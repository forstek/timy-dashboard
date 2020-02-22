import React from 'react'
import { pure } from 'recompose'
import Styled from './StyledComponent'

const ForstekFooter = () => (
  <Styled.ForstekFooter>
    Made with &#129505; by &nbsp;
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
