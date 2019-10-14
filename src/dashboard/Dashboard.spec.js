import React from 'react';
import { render } from "react-testing-library";
import Dashboard from './Dashboard';

test('Dashboard renders correctly', () => {
    render(<Dashboard />);
})

test('Default renders to unlocked and open', () => {
    const { getByText } = render(<Dashboard />);
    
    getByText(/unlocked/i);
    getByText(/open/i);
});

test('Dashboard shows the display and controls panels', () => {
    const { getByTestId } = render(<Dashboard />);
    
    getByTestId(/display-panel/i);
    getByTestId(/controls-panel/i);
});