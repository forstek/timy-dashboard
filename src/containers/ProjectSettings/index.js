import React, { PureComponent } from 'react'
import Toolbar from 'components/Toolbar'
import Sidenav from './components/Sidenav'
import ScreenSettings from './components/ScreenSettings'

import TimyLogo from 'assets/images/timy-logo-white.png'
import AddIcon from 'assets/images/add-icon-white.png'
import UserIcon from 'assets/images/user-icon.png'

class ProjectSettings extends PureComponent {
  render () {
    const PROJECTS = [
      { name: 'project1', label: 'Project 1' },
      { name: 'project2', label: 'Project 2' },
      { name: 'project3', label: 'Project 3' },
      { name: 'project4', label: 'Project 4' }
    ]

    const PROJECT_ADMINS = [
      { name: 'Iqbal Novramadani', label: 'Iqbal Novramadani' },
      { name: 'Angga Pratama Putra', label: 'Angga Pratama Putra' }
    ]

    return (
      <div>
        <Toolbar
          logo={TimyLogo}
          buttonImg={AddIcon}
          profileImg={UserIcon}
        />
        <Sidenav
          projects={PROJECTS}
        />
        <ScreenSettings
          projectName='Project 4'
          projectOwner='Iqbal Novramadani'
          projectAdmins={PROJECT_ADMINS}
        />
      </div>
    )
  }
}

export default ProjectSettings
