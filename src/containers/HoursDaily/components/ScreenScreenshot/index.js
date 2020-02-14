import React, { PureComponent } from 'react'
import Styled from './StyledComponent'

export default class ScreenScreenshot extends PureComponent {
  render () {
    const {
      hours
    } = this.props

    return (
      <Styled.ScreenScreenshotGrid>
        <Styled.Hours>
          {hours}
        </Styled.Hours>
        <Styled.Screenshot />
      </Styled.ScreenScreenshotGrid>
    )
  }
}
