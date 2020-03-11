import React from 'react'
import { pure } from 'recompose'
import * as s from './StyledComponent'

const ForstekFooter = () => (
  <s.ForstekFooter>
    Made with &nbsp;
    <span
      role='img'
      aria-label='love'
    >
        &#129505;
    </span>
      &nbsp; by &nbsp;
    <a
      href='https://www.forstek.co/'
    >
      <s.Forstek>
        Forstek
      </s.Forstek>
    </a>
  </s.ForstekFooter>
)

export default pure(ForstekFooter)
