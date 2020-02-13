import React, { PureComponent } from 'react'
// import Toolbar from 'components/Toolbar'
// import ScreenNoProject from './components/ScreenNoProject'
import ScreenDashboard from './components/ScreenDashboard'
// import Sidenav from './components/Sidenav'

// import TimyLogo from 'assets/images/timy-logo-white.png'
// import AddIcon from 'assets/images/add-icon-white.png'
// import UserIcon from 'assets/images/user-icon.png'

class Homepage extends PureComponent {
  render () {
    // const PROJECTS = [
    //   { name: 'project1', label: 'Project 1' },
    //   { name: 'project2', label: 'Project 2' },
    //   { name: 'project3', label: 'Project 3' },
    //   { name: 'project4', label: 'Project 4' }
    // ]

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
        {/* <Toolbar
          logo={TimyLogo}
          buttonImg={AddIcon}
          profileImg={UserIcon}
        /> */}
        {/* <Sidenav projects={projects} /> */}
        <ScreenDashboard
          projectTitle='Project 4'
          members={MEMBERS}
          categories={CATEGORIES}
        />
      </div>
    )
  }
}

export default Homepage
