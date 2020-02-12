import React from 'react'
import { pure } from 'recompose'
import Styled from './StyledComponent'

const Input = (props) => {
  const {
    type,
    name,
    value,
    label,
    placeholder
  } = props

  return (
    <Styled.Input
      type={type}
      name={name}
      value={value}
      label={label}
      placeholder={placeholder}
    />
  )
}

export default pure(Input)
