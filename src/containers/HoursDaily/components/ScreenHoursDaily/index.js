import React, { PureComponent } from 'react'
import * as s from './StyledComponent'
import ScreenScreenshot from '../ScreenScreenshot'

export default class ScreenHoursDaily extends PureComponent {
  render () {
    const {
      membersName
    } = this.props

    return (
      <s.ScreenDailyHoursGrid>
        <s.Menu>
          <a href='/home'>Dashboard</a>
          <a href='/settings'>Settings</a>
        </s.Menu>
        <s.Title>
          {membersName} clocks
          <s.Date>
                  2 Feb 2020
          </s.Date>
        </s.Title>
        <s.WeeklyLink
          href='/weekly'
        >
                  Weekly
        </s.WeeklyLink>
        <s.DisplayScreenshot>
          <ScreenScreenshot
            hours='23'
          />
        </s.DisplayScreenshot>
      </s.ScreenDailyHoursGrid>
    )
  }
}
