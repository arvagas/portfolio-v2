// library imports
import React, { useState } from 'react'
// styling
import { StyledContactForm } from '../../styles/StyledComps'

const ContactForm = () => {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')
  const [errors, setErrors] = useState({
    nameInputError: '',
    emailInputError: '',
    messageInputError: ''
  })

  const handleChange = (event) => {
    let { name, value } = event.target

    // data validation
    console.log(name)
    
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
    // reset form after success
    setNameInput('')
    setEmailInput('')
    setMessageInput('')
  }

  return (
    <StyledContactForm>
      <h1>Contact Me</h1>
      <form onSubmit={onSubmit} noValidate>
        <label>
          Name
          <input type='text' name='name' value={nameInput} onChange={event => handleChange(event)} placeholder='John Smith' required/>
        </label>
        <label>
          Email
          <input type='email' name='email' value={emailInput} onChange={event => handleChange(event)} placeholder='example@gmail.com' required/>
        </label>
        <label>
          Message
          <textarea name='message' value={messageInput} onChange={event => handleChange(event)} placeholder='Write your message here...' required/>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </StyledContactForm>
  )
}

export default ContactForm