import React from 'react'
import { pure } from 'recompose'

import {
  Button,
  Avatar
} from 'antd'

import * as s from './StyledComponent'

const Toolbar = (props) => {
  const {
    logo,
    profileImg,
    handleAdd,
    handleProfile
  } = props

  return (
    <s.Toolbar>
      <s.Logo
        src={logo}
      />
      <s.Tooltip>
        <span>Create new project</span>
        <s.Add>
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
        </s.Add>
      </s.Tooltip>
      <s.Profile>
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
      </s.Profile>
    </s.Toolbar>
  )
}

export default pure(Toolbar)
