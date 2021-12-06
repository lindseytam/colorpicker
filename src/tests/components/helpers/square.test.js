import {render, screen, fireEvent} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Square from '../../../lib/components/helpers/square'

test('Square Helper', () => {

    const change = jest.fn();

    render(
        <Square onChange={change}/>
    )

    // square color picker should be rendered
    const square = screen.getByTestId(/square/i)
    expect(square).toBeInTheDocument()

    // test updating colorpicker
    fireEvent.input(square, {target: {value: "#000000"}})
    expect(square.value).toBe("#000000")
})