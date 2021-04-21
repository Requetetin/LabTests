import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from './Input'

describe('Input tests', () => {
  test('Input render', () => {
    render(<Input />)
  })
  test('Input can be written', () => {
    render(<Input />)

    const inputElement = screen.getByRole('textbox')

    userEvent.type(inputElement, '123')

    expect(inputElement).toHaveValue('123')
  })
})
