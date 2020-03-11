import React, { PureComponent } from 'react'
import * as s from './StyledComponent'
import Emoji from 'assets/images/no-project-emoji.png'

export default class ScreenNoProject extends PureComponent {
  render () {
    return (
      <s.screen>
        <s.welcomeText1>
              Welcome to Timy<br />
              Thank you for using me!
        </s.welcomeText1>
        <s.emoji
          src={Emoji}
        />
        <s.welcomeText2>
              But you have no project yet,<br />
              let's create one by clicking below button
        </s.welcomeText2>
        <s.Button>
              Create project
        </s.Button>
      </s.screen>
    )
  }
}
