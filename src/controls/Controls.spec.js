import React from 'react';
import { render } from "react-testing-library";
import Controls from './Controls';

test('Controls renders correctly', () => {
    render(<Controls />);
})

test('Controls render buttons to toggle locked and closed', () => {
    const { getByTestId } = render(<Controls />);

    getByTestId(/lock-button/i);
    getByTestId(/close-button/i);
});

test('Close button disabled if gate is locked', () => {
    const { getByTestId } = render(<Controls locked={true} />);

    expect(getByTestId(/close-button/i).disabled).toBe(true);
});

test('Lock button disabled if gate is open', () => {
    const { getByTestId } = render(<Controls closed={false} />);

    expect(getByTestId(/lock-button/i).disabled).toBe(true);
});



