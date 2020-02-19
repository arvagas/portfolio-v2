// library imports
import React, { useState, useRef } from 'react'
// styling
import { StyledContactForm, StyledContactHeader, StyledContactLabel, StyledContactInput, StyledContactTextArea, StyledContactSubmit } from '../../styles/StyledComps'

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

    // add data validation
    
    // update values
    switch (name) {
      case 'name':
        setNameInput(value)
        break
      case 'email':
        setEmailInput(value)
        break
      case 'message':
        setMessageInput(value)
        break
      default:
        break
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
    let sendInfo = { name: nameInput, email: emailInput, message: messageInput }

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
        alert('Message has been sent successfully to arvagas@gmail.com!')
        // reset form after success
        setNameInput('')
        setEmailInput('')
        setMessageInput('')
      } else alert('Message was unable to be sent. Please try again later.')
      
      // enable button for next use
      refBtn.current.removeAttribute('disabled')
    })
  }

  return (
    <StyledContactForm onSubmit={onSubmit} noValidate>
      <StyledContactHeader>Contact Me</StyledContactHeader>
      <StyledContactLabel>
        Name:
        <StyledContactInput type='text' name='name' value={nameInput} onChange={event => handleChange(event)} placeholder='John Smith' required/>
      </StyledContactLabel>
      <StyledContactLabel>
        Email:
        <StyledContactInput type='email' name='email' value={emailInput} onChange={event => handleChange(event)} placeholder='example@gmail.com' required/>
      </StyledContactLabel>
      <StyledContactLabel>
        Message:
        <StyledContactTextArea rows='10' name='message' value={messageInput} onChange={event => handleChange(event)} placeholder='Write your message here...' required/>
      </StyledContactLabel>
      <StyledContactSubmit type='submit' ref={refBtn}>Submit</StyledContactSubmit>
    </StyledContactForm>
  )
}

export default ContactForm