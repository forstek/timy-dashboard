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
    image,
    text,
    onClick
  } = props

  return (
    <s.Button
      type={type}
      name={name}
      value={value}
      background={background}
      color={color}
      onClick={onClick}
    >
      { image &&
        <s.Icon src={image} />
      }
      {text}
    </s.Button>
  )
}

export default pure(Button)
