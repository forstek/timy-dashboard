import React, { Component } from 'react'
import Form from './components/RegisterForm'
import ForstekFooter from 'components/ForstekFooter'

class Register extends Component {
  render () {
    return (
      <div>
        <Form />
        <ForstekFooter />
      </div>
    )
  }
}

export default Register
