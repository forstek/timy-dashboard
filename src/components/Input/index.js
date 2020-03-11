import React from 'react'
import { pure } from 'recompose'
import * as s from './StyledComponent'

const Input = (props) => {
  const {
    type,
    name,
    value,
    label,
    placeholder
  } = props

  return (
    <s.Input
      type={type}
      name={name}
      value={value}
      label={label}
      placeholder={placeholder}
    />
  )
}

export default pure(Input)
