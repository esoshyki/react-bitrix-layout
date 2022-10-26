import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'
import App from '../src/components/App'

describe('Common render', () => {
  it('Renders without crashing', () => {
    render(<App />)
  })
})

