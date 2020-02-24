import React from 'react'
import { pure } from 'recompose'
import Styled from './StyledComponent'

const ForstekFooter = () => (
  <Styled.ForstekFooter>
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
      <Styled.Forstek>
        Forstek
      </Styled.Forstek>
    </a>
  </Styled.ForstekFooter>
)

export default pure(ForstekFooter)
