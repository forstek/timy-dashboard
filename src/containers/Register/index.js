import React, { PureComponent } from 'react'
import Form from './components/RegisterForm'
import ForstekFooter from 'components/ForstekFooter'

class Register extends PureComponent {
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
