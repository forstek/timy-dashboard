import React, { PureComponent } from 'react'
import Toolbar from 'components/Toolbar'
import Sidenav from './components/Sidenav'
import ScreenHoursWeekly from './components/ScreenHoursWeekly'
import { VersionBox } from 'components/VersionBox/StyledComponent'

import TimyLogo from 'assets/images/timy-logo-white.png'

class HoursWeekly extends PureComponent {
  render () {
    const PROJECTS = [
      { name: 'project1', label: 'Project 1' },
      { name: 'project2', label: 'Project 2' },
      { name: 'project3', label: 'Project 3' },
      { name: 'project4', label: 'Project 4' }
    ]

    return (
      <div>
        <Toolbar
          logo={TimyLogo}
        />
        <Sidenav
          projects={PROJECTS}
        />
        <ScreenHoursWeekly
          membersName='Iqbal Novramadani'
        />
        <VersionBox>
            1.0
        </VersionBox>
      </div>
    )
  }
}

export default HoursWeekly
