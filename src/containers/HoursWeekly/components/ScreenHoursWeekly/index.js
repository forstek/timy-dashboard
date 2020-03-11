import React, { PureComponent } from 'react'
import * as s from './StyledComponent'

export default class ScreenHoursWeekly extends PureComponent {
  render () {
    const {
      membersName
    } = this.props

    return (
      <s.ScreenWeeklyHoursGrid>
        <s.Menu>
          <a href='/home'>Dashboard</a>
          <a href='/settings'>Settings</a>
        </s.Menu>
        <s.Title>
          {membersName} weeks
          <s.Year>
                  2019
          </s.Year>
        </s.Title>
        <s.DailyLink
          href='/daily'
        >
                  Daily
        </s.DailyLink>
        <s.Chart />
      </s.ScreenWeeklyHoursGrid>
    )
  }
}
