import React from 'react'
import { pure } from 'recompose'
import Styled from './StyledComponent'

const Toolbar = (props) => {
  const {
    logo,
    buttonImg,
    profileImg,
    handleAdd,
    handleProfile
  } = props

  return (
    <Styled.Toolbar>
      <Styled.Logo
        src={logo}
      />
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
