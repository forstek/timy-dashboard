import React, { PureComponent } from 'react'
import Styled from './StyledComponent'

export default class Sidenav extends PureComponent {
  render () {
    const {
      projects
    } = this.props

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
}
