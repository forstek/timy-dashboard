import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import * as s from './StyledComponent'

import Input from 'components/Input'
import Button from 'components/Button'
import ForstekFooter from 'components/ForstekFooter'

import TimyLogo from 'assets/images/timy-logo.png'
import GoogleLogo from 'assets/images/google-logo.png'

export default class Form extends PureComponent {
  render () {
    return (
      <s.Form>
        <s.FormHeader>
          <img
            src={TimyLogo}
            alt='Timy-logo'
          />
          <p>
                        Remote working<br />
                        time tracker
          </p>
        </s.FormHeader>
        <s.FormBody>
          <Input
            type='text'
            placeholder='Email'
          />
          <Input
            type='password'
            placeholder='Password'
          />
        </s.FormBody>
        <s.FormFooter>
          <Button
            text='Sign in'
          />
          <Button
            text='Sign in'
            src={GoogleLogo}
            background='#FFFFFF'
            color='#707070'
          />
          <Link
            to='/'
          >
                        Forgot password?
          </Link>
          <Link
            to='/register'
          >
                        Don't have an account?
          </Link>
        </s.FormFooter>
        <ForstekFooter />
      </s.Form>
    )
  }
}
