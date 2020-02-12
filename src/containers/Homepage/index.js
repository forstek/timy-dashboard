import React, { PureComponent } from 'react'
import Toolbar from 'components/Toolbar'

import ScreenNoProject from './components/ScreenNoProject'
import Sidenav from './components/Sidenav'

import TimyLogo from 'assets/images/timy-logo-white.png'
import AddIcon from 'assets/images/add-icon-white.png'
import UserIcon from 'assets/images/user-icon.png'

class Homepage extends PureComponent {
  render () {

    const projects = [
      { name: 'project1', label: 'Project 1' },
      { name: 'project2', label: 'Project 2' },
      { name: 'project3', label: 'Project 3' },
      { name: 'project4', label: 'Project 4' },
    ]

    return (
      <div>
        <Toolbar
          logo={TimyLogo}
          buttonImg={AddIcon}
          profileImg={UserIcon}
        />
        <Sidenav projects={projects} />
        <ScreenNoProject />
      </div>
    )
  }
}

export default Homepage
