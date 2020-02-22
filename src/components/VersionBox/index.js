import React from 'react'
import { pure } from 'recompose'

import * as s from './StyledComponent'

const VersionBox = ({ version }) => (
  <s.VersionBox>
    {`${version}`}
  </s.VersionBox>
)

export default pure(VersionBox)