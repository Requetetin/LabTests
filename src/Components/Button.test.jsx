import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from './Button'

describe('Button tests', () => {
  test('Button render', () => {
    render(<Button />)
  })
  test('Button has value +', () => {
    render(<Button title="+" />)

    expect(screen.getByText('+')).toBeInTheDocument()
  })
  test('Button can be pressed', () => {
    const mockTest = jest.fn()
    render(<Button onClick={mockTest} />)

    const inputElement = screen.getByRole('button')
    userEvent.click(inputElement)

    expect(mockTest.mock.calls.length).toEqual(1)
  })
})
