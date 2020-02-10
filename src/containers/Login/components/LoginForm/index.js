import React, { Component } from 'react'
import Styled from './StyledComponent'

import Input from 'components/Input'
import Button from 'components/Button'

import TimyLogo from 'assets/images/timy-logo.png'
import GoogleLogo from 'assets/images/google-logo.png'

export default class Form extends Component {
  render () {
    return (
      <Styled.Form>
        <Styled.FormHeader>
          <img
            src={TimyLogo}
            alt='Timy-logo'
          />
          <p>
                        Remote working<br />
                        time tracker
          </p>
        </Styled.FormHeader>
        <Styled.FormBody>
          <Input
            type='text'
            placeholder='Email'
          />
          <Input
            type='password'
            placeholder='Password'
          />
        </Styled.FormBody>
        <Styled.FormFooter>
          <Button
            text='Sign in'
          />
          <Button
            text='Sign in'
            src={GoogleLogo}
            background='#FFFFFF'
            color='#707070'
          />
          <a
            href='/'
          >
                        Forgot password?
          </a>
          <a
            href='/'
          >
                        Don't have an account?
          </a>
        </Styled.FormFooter>
      </Styled.Form>
    )
  }
}
