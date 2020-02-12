import React, { PureComponent } from 'react'
import Form from './components/LoginForm'
import ForstekFooter from 'components/ForstekFooter'

class Login extends PureComponent {
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
