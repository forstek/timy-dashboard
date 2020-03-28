import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import * as s from './StyledComponent'

import Input from 'components/Input'
import Button from 'components/Button'
import ForstekFooter from 'components/ForstekFooter'

import TimyLogo from 'assets/images/timy-logo.png'

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
            Remote work
            <br />
            time tracker
          </p>
        </s.FormHeader>
        <s.FormBody>
          <Input
            type='text'
            placeholder='Name'
          />
          <Input
            type='email'
            placeholder='Email'
          />
          <Input
            type='password'
            placeholder='Password'
          />
          <Input
            type='password'
            placeholder='Confirm password'
          />
        </s.FormBody>
        <s.FormFooter>
          <Button
            text='Sign up'
            onClick={() => { console.log('Sign up') }}
          />
          <Link
            to='/login'
          >
                        Already have an account?
          </Link>
        </s.FormFooter>
        <ForstekFooter />
      </s.Form>
    )
  }
}
