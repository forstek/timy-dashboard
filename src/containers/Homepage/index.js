import React, { PureComponent } from 'react'
import Toolbar from 'components/Toolbar'

import ScreenNoProject from './components/ScreenNoProject'
import Sidenav from './components/Sidenav'

import TimyLogo from 'assets/images/timy-logo-white.png'
import AddIcon from 'assets/images/add-icon-white.png'
import UserIcon from 'assets/images/user-icon.png'

class Homepage extends PureComponent {
  render () {
    return (
      <div>
        <Toolbar
          logo={TimyLogo}
          buttonImg={AddIcon}
          profileImg={UserIcon}
        />
        <Sidenav />
        <ScreenNoProject />
      </div>
    )
  }
}

export default Homepage
