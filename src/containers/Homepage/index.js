import React, { Component } from 'react'
import Toolbar from 'components/Toolbar'

import TimyLogo from'assets/images/timy-logo-white.png'
import AddIcon from 'assets/images/add-icon-white.png'
import UserIcon from 'assets/images/user-icon.png'

class Homepage extends Component {
  render () {
    return (
      <div>
        <Toolbar
          logo={TimyLogo}
          buttonImg={AddIcon}
          profileImg={UserIcon}
        />
      </div>
    )
  }
}

export default Homepage
