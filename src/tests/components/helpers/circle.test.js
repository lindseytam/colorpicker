import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Circle from './../../../../src/lib/components/helpers/circle'

test('Circle Helper', () => {

    const change = jest.fn();

    const { rerender } = render(
        <Circle onChange={change}/>
    )

    // default sizes and colors should be used
    const circle = screen.getByTestId(/circle/i)
    expect(circle).toBeInTheDocument()


    


})