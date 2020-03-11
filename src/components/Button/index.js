import React from 'react'
import { pure } from 'recompose'
import * as s from './StyledComponent'

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
    <s.Button
      type={type}
      name={name}
      value={value}
      background={background}
      color={color}
    >
      <s.Icon
        src={src}
      />
      {text}
    </s.Button>
  )
}

export default pure(Button)
