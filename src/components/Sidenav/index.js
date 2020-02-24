import React from 'react'
import { pure } from 'recompose'
import Styled from './StyledComponent'

const Sidenav = (props) => {
  const {
    projects
  } = props

  return (
    <Styled.Sidenav>
      {projects.map(({
        label,
        name
      }) => (
        <Styled.Navmenu key={name}> {label} </Styled.Navmenu>
      ))}
    </Styled.Sidenav>
  )
}

export default pure(Sidenav)
