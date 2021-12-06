import {render, screen, fireEvent} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Circle from './../../../../src/lib/components/helpers/circle'

test('Circle Helper', () => {

    const change = jest.fn();

    render(
        <Circle onChange={change}/>
    )

    // circle color picker should be rendered
    const circle = screen.getByTestId(/circle/i)
    expect(circle).toBeInTheDocument()

    // test updating colorpicker
    fireEvent.input(circle, {target: {value: "#000000"}})
    expect(circle.value).toBe("#000000")
})