// library imports
import React, { useState, useRef } from 'react'
// validation imports
import { validEmailRegex, validateForm } from '../../utils/formValidation'
// styling
import { StyledContactForm, StyledContactHeader, StyledContactNotice, StyledContactLabel, StyledContactInput, StyledContactTextArea, StyledContactError, StyledContactSubmit } from '../../styles/StyledComps'

const ContactForm = () => {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')
  const [errors, setErrors] = useState({
    nameInputError: '',
    emailInputError: '',
    messageInputError: ''
  })
  const refBtn = useRef()

  const handleChange = (event) => {
    let { name, value } = event.target

    // data validation, then update values
    switch (name) {
      case 'name':
        if (!value.length) setErrors({...errors, nameInputError: 'name is a required field'})
        else setErrors({...errors, nameInputError: ''})
        setNameInput(value)
        break
      case 'email':
        if (!value.length) setErrors({...errors, emailInputError: 'email is a required field'})
        else if (validEmailRegex.test(value) === false) setErrors({...errors, emailInputError: 'email must be in a valid format'})
        else setErrors({...errors, emailInputError: ''})
        setEmailInput(value)
        break
      case 'message':
        if (!value.length) setErrors({...errors, messageInputError: 'message is a required field'})
        else setErrors({...errors, messageInputError: ''})
        setMessageInput(value)
        break
      default:
        break
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
    let sendInfo = { name: nameInput, email: emailInput, message: messageInput }

    // check to see if form is filled out/valid
    if (nameInput && emailInput && messageInput && validateForm(errors)) {
      // disable button to prevent multiple emails being sent
      refBtn.current.setAttribute('disabled', true)
  
      // attempt to send email
      fetch('https://arvin-agas-portfolio.herokuapp.com/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendInfo)
      })
      .then(res => res.json())
      .then(jsonRes => {
        if (jsonRes.message === 'Success') {
          alert('Message has been sent successfully!')
          // reset form after success
          setNameInput('')
          setEmailInput('')
          setMessageInput('')
        } else alert('Message was unable to be sent. Please try again later.')
        
        // enable button for next use
        refBtn.current.removeAttribute('disabled')
      })
    } else {
      // check which fields are missing/incorrect
      let inputCheck = {...errors}
      if (!nameInput) inputCheck.nameInputError = 'name is a required field'
      if (!emailInput) inputCheck.emailInputError = 'email is a required field'
      else if (validEmailRegex.test(emailInput) === false) inputCheck.emailInputError = 'email must be in a valid format'
      if (!messageInput) inputCheck.messageInputError = 'message is a required field'
      // update error messages
      setErrors(inputCheck)
    }
  }

  return (
    <StyledContactForm onSubmit={event => onSubmit(event)} noValidate>
      <StyledContactHeader>Contact Me</StyledContactHeader>

      <div>
        <StyledContactNotice>A message will be sent directly to <a href='mailto: arvagas@gmail.com'>arvagas@gmail.com</a>.</StyledContactNotice>
        <StyledContactNotice>Please allow up to 48 hours for a response back.</StyledContactNotice>
        <StyledContactNotice>Thank you.</StyledContactNotice>
      </div>

      <StyledContactLabel>
        Name:
        <StyledContactInput type='text' name='name' value={nameInput} onChange={event => handleChange(event)} placeholder='John Smith' required/>
        {errors.nameInputError ? <StyledContactError>{errors.nameInputError}</StyledContactError> : ''}
      </StyledContactLabel>

      <StyledContactLabel>
        Email:
        <StyledContactInput type='email' name='email' value={emailInput} onChange={event => handleChange(event)} placeholder='example@gmail.com' required/>
        {errors.emailInputError ? <StyledContactError>{errors.emailInputError}</StyledContactError> : ''}
      </StyledContactLabel>

      <StyledContactLabel>
        Message:
        <StyledContactTextArea rows='10' name='message' value={messageInput} onChange={event => handleChange(event)} placeholder='Write your message here...' required/>
        {errors.messageInputError ? <StyledContactError>{errors.messageInputError}</StyledContactError> : ''}
      </StyledContactLabel>

      <StyledContactSubmit type='submit' ref={refBtn}>Submit</StyledContactSubmit>
    </StyledContactForm>
  )
}

export default ContactForm