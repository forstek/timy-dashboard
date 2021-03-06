import React, { PureComponent } from 'react'
import Toolbar from 'components/Toolbar'
import Sidenav from 'components/Sidenav'
// import ScreenNoProject from './components/ScreenNoProject'
import ScreenDashboard from './components/ScreenDashboard'
import { VersionBox } from 'components/VersionBox/StyledComponent'

import TimyLogo from 'assets/images/timy-logo-white.png'

class Homepage extends PureComponent {
  render () {
    const PROJECTS = [
      { name: 'project1', label: 'Project 1' },
      { name: 'project2', label: 'Project 2' },
      { name: 'project3', label: 'Project 3' },
      { name: 'project4', label: 'Project 4' }
    ]

    const MEMBERS = [
      { name: 'Iqbal Novramadani', label: 'Iqbal Novramadani' },
      { name: 'Angga Pratama Putra', label: 'Angga Pratama Putra' }
    ]

    const CATEGORIES = [
      { name: 'Apps development', label: 'Apps development' },
      { name: 'Web development', label: 'Web development' }
    ]

    return (
      <div>
        <Toolbar
          logo={TimyLogo}
        />
        <Sidenav
          projects={PROJECTS}
        />
        <ScreenDashboard
          projectTitle='Project 4'
          members={MEMBERS}
          categories={CATEGORIES}
        />
        <VersionBox>
            1.0
        </VersionBox>
      </div>
    )
  }
}

export default Homepage
