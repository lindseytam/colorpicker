import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import ColorPicker from '../../lib'

test('ColorPicker', () => {

    const change = jest.fn();

    render(
        <ColorPicker onChange={change}/>
    )

    expect(true).toBe(true)


})