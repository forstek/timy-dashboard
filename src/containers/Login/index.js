import React, { Component } from 'react'
import Form from './components/LoginForm'
import ForstekFooter from 'components/ForstekFooter'

class Login extends Component {
  render () {
    return (
      <div>
        <Form />
        <ForstekFooter />
      </div>
    )
  }
}

export default Login
