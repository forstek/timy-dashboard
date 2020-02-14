import React, { PureComponent } from 'react'
import Styled from './StyledComponent'

export default class ScreenHoursWeekly extends PureComponent {
  render () {
    const {
      membersName
    } = this.props

    return (
      <Styled.ScreenWeeklyHoursGrid>
        <Styled.Menu>
          <a href='/home'>Dashboard</a>
          <a href='/settings'>Settings</a>
        </Styled.Menu>
        <Styled.Title>
          {membersName} weeks
          <Styled.Year>
                  2019
          </Styled.Year>
        </Styled.Title>
        <Styled.DailyLink
          href='/daily'
        >
                  Daily
        </Styled.DailyLink>
        <Styled.Chart />
      </Styled.ScreenWeeklyHoursGrid>
    )
  }
}
