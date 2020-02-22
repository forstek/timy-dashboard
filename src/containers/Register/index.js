import React, { PureComponent } from 'react'
import Form from './components/RegisterForm'
import { VersionBox } from 'components/VersionBox/StyledComponent'

class Register extends PureComponent {
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

export default Register
