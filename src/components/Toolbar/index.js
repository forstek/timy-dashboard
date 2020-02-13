import React from 'react'
import { pure } from 'recompose'
import Styled from './StyledComponent'
import { Link } from 'react-router-dom'

const Toolbar = (props) => {
  const {
    logo,
    buttonImg,
    profileImg,
    logoLink,
    handleAdd,
    handleProfile
  } = props

  return (
    <Styled.Toolbar>
      <Link
        to={logoLink}
      >
        <Styled.Logo
          src={logo}
        />
      </Link>
      <Styled.Tooltip>
        <span>Create new project</span>
        <Styled.Add
          onClick={handleAdd}
        >
          <Styled.ButtonIcon
            src={buttonImg}
          />
        </Styled.Add>
      </Styled.Tooltip>
      <Styled.Profile
        onClick={handleProfile}
      >
        <Styled.ButtonIcon
          src={profileImg}
        />
      </Styled.Profile>
    </Styled.Toolbar>
  )
}

export default pure(Toolbar)
