import React from 'react'
import { pure } from 'recompose'
import * as s from './StyledComponent'

const Sidenav = (props) => {
  const {
    projects
  } = props

  return (
    <s.Sidenav>
      {projects.map(({
        label,
        name
      }) => (
        <s.Navmenu key={name}> {label} </s.Navmenu>
      ))}
    </s.Sidenav>
  )
}

export default pure(Sidenav)
