import React from 'react'
import { pure } from 'recompose'
import * as s from './StyledComponent'

const ForstekFooter = () => (
  <s.ForstekFooter>
    Made with&nbsp;
    <span
      role='img'
      aria-label='love'
    >
      🧡
    </span> by&nbsp;
    <a href='https://www.forstek.co/'
      target='_blank'
      rel='noopener noreferrer'
    >
      <s.Forstek>
        forstek
      </s.Forstek>
    </a>
  </s.ForstekFooter>
)

export default pure(ForstekFooter)
