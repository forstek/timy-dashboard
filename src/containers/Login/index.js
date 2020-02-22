import React, { PureComponent } from 'react'
import Form from './components/LoginForm'
import { VersionBox } from 'components/VersionBox/StyledComponent'

class Login extends PureComponent {
  render () {
    return (
      <div>
        <Form />
        <VersionBox>
          1.0
        </VersionBox>
      </div>
    )
  }
}

export default Login
