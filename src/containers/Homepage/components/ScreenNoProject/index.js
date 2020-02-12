import React, { PureComponent } from 'react'
import Styled from './StyledComponent'
import Emoji from 'assets/images/no-project-emoji.png'

export default class ScreenNoProject extends PureComponent {
  render () {
    return (
      <Styled.screen>
          <Styled.welcomeText1>
              Welcome to Timy<br />
              Thank you for using me!
          </Styled.welcomeText1>
          <Styled.emoji
            src={Emoji}
          />
          <Styled.welcomeText2>
              But you have no project yet,<br />
              let's create one by clicking below button
          </Styled.welcomeText2>
          <Styled.Button>
              Create project
          </Styled.Button>
      </Styled.screen>
    )
  }
}
