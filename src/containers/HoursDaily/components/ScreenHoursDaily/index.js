import React, { PureComponent } from 'react'
import Styled from './StyledComponent'
import ScreenScreenshot from '../ScreenScreenshot'

export default class ScreenHoursDaily extends PureComponent {
  render () {
    const {
      membersName
    } = this.props

    return (
      <Styled.ScreenDailyHoursGrid>
        <Styled.Menu>
          <a href='/home'>Dashboard</a>
          <a href='/settings'>Settings</a>
        </Styled.Menu>
        <Styled.Title>
          {membersName} clocks
          <Styled.Date>
                  2 Feb 2020
          </Styled.Date>
        </Styled.Title>
        <Styled.WeeklyLink
          href='/weekly'
        >
                  Weekly
        </Styled.WeeklyLink>
        <Styled.DisplayScreenshot>
          <ScreenScreenshot
            hours='23'
          />
        </Styled.DisplayScreenshot>
      </Styled.ScreenDailyHoursGrid>
    )
  }
}
