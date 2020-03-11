import React, { PureComponent } from 'react'
import * as s from './StyledComponent'

export default class ScreenScreenshot extends PureComponent {
  render () {
    const {
      hours
    } = this.props

    return (
      <s.ScreenScreenshotGrid>
        <s.Hours>
          {hours}
        </s.Hours>
        <s.Screenshot />
      </s.ScreenScreenshotGrid>
    )
  }
}
