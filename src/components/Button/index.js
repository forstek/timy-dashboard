import React from 'react'
import { pure } from 'recompose'
import Styled from './StyledComponent'

const Button = (props) => {
  const {
    background,
    color,
    src,
    text
  } = props

  return (
    <Styled.Button
      background={background}
      color={color}
    >
      <Styled.Icon
        src={src}
      />
      {text}
    </Styled.Button>
  )
}

export default pure(Button)
