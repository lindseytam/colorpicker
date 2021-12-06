import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Hexagon from '../../../lib/components/helpers/hexagon'

test('Hexagon Helper', () => {
    const change = jest.fn();


    render(
        <Hexagon onChange={change}/>
    )

    expect(true).toBe(true)


})