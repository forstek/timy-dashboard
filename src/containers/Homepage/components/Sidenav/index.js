import React, { PureComponent } from 'react'
import Styled from './StyledComponent'

export default class Sidenav extends PureComponent {
  render () {
    return (
      <Styled.Sidenav>
          <Styled.Navmenu>Project 1</Styled.Navmenu>
          <Styled.Navmenu>Project 2</Styled.Navmenu>
          <Styled.Navmenu>Project 3</Styled.Navmenu>
          <Styled.Navmenu>Project 4</Styled.Navmenu>
      </Styled.Sidenav>
    )
  }
}
