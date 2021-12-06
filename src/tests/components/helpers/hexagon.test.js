import {render, screen, fireEvent} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Hexagon from '../../../lib/components/helpers/hexagon'

test('Hexagon Helper', () => {
    const change = jest.fn();

    render(
        <Hexagon onChange={change}/>
    )

    // hexagon color picker should be rendered
    const hexagon = screen.getByTestId(/hexagon/i)
    expect(hexagon).toBeInTheDocument()

    // test updating colorpicker
    fireEvent.input(hexagon, {target: {value: "#000000"}})
    expect(hexagon.value).toBe("#000000")
})