import React, { Component } from 'react'
import Styled from './StyledComponent'

import Input from 'components/Input'
import Button from 'components/Button'

import TimyLogo from 'assets/images/timy-logo.png'

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
            type='text'
            placeholder='Name'
          />
          <Input
            type='password'
            placeholder='Password'
          />
          <Input
            type='password'
            placeholder='Confirm password'
          />
        </Styled.FormBody>
        <Styled.FormFooter>
          <Button
            text='Sign up'
          />
          <a
            href='/'
          >
                        Already have an account?
          </a>
        </Styled.FormFooter>
      </Styled.Form>
    )
  }
}
