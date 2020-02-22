import React, { PureComponent } from 'react'
import Toolbar from 'components/Toolbar'
import Sidenav from './components/Sidenav'
import ScreenSettings from './components/ScreenSettings'
import { VersionBox } from 'components/VersionBox/StyledComponent'

import TimyLogo from 'assets/images/timy-logo-white.png'

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
        />
        <Sidenav
          projects={PROJECTS}
        />
        <ScreenSettings
          projectName='Project 4'
          projectOwner='Iqbal Novramadani'
          projectAdmins={PROJECT_ADMINS}
        />
        <VersionBox>
          1.0
        </VersionBox>
      </div>
    )
  }
}

export default ProjectSettings
