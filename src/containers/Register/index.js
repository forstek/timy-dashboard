import React, { Component } from 'react'
import Button from 'components/Button'
import Google from 'assets/images/google-logo.png'

class Register extends Component {
  render () {
    return (
      <div className='Register'>
        <Button
          text='Sign up'
        />
        <Button
          src={Google}
          background='#FFFFFF'
          color='#707070'
          text='Sign in'
        />
      </div>
    )
  }
}

export default Register
