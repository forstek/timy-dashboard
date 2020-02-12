import React from 'react'
import { pure } from 'recompose'
import Styled from './StyledComponent'

const Button = (props) => {
  const {
    type,
    name,
    value,
    background,
    color,
    src,
    text
  } = props

  return (
    <Styled.Button
      type={type}
      name={name}
      value={value}
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
