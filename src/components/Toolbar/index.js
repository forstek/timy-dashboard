import React from 'react'
import { pure } from 'recompose'

import {
  Button,
  Avatar
} from 'antd'

import Styled from './StyledComponent'

const Toolbar = (props) => {
  const {
    logo,
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
        <Styled.Add>
          <Button
            type='primary'
            shape='circle'
            icon='plus'
            size='large'
            onClick={handleAdd}
            style={{
              background: '#FC6F20',
              border: 'none'
            }}
          />
        </Styled.Add>
      </Styled.Tooltip>
      <Styled.Profile>
        <Avatar
          shape='circle'
          src={profileImg || ''}
          icon={profileImg ? '' : 'user'}
          size='large'
          onClick={handleProfile}
          style={{
            background: '#C4C4C4',
            color: '#000000'
          }}
        />
      </Styled.Profile>
    </Styled.Toolbar>
  )
}

export default pure(Toolbar)
