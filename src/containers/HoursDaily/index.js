import React, { PureComponent } from 'react'
import Toolbar from 'components/Toolbar'
import Sidenav from 'components/Sidenav'
import ScreenHoursDaily from './components/ScreenHoursDaily'

import TimyLogo from 'assets/images/timy-logo-white.png'

class HoursDaily extends PureComponent {
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
        <ScreenHoursDaily
          membersName='Iqbal Novramadani'
        />
      </div>
    )
  }
}

export default HoursDaily
