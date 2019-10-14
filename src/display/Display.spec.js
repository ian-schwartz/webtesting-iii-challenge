import React from 'react';
import { render } from "react-testing-library";
import Display from './Display';

test('Display renders correctly', () => {
    render(<Display />);
});

test('Display shows both lock/unlock & open/closed',() => {
    const { getByTestId } = render(<Display />);

    getByTestId(/lock-display/i);
    getByTestId(/close-display/i);
});

test('Display shows closed if closed prop is true', () => {
    const { getByText } = render(<Display closed={true} />);

    getByText(/^closed/i);
});

test('Display shows open if closed prop is false', () => {
    const { getByText } = render(<Display closed={false} />);

    getByText(/^open/i);
});

test('Display shows unlocked if locked prop is false', () => {
    const { getByText } = render(<Display locked={false} />);

    getByText(/^unlocked/i);
});

test('Display shows locked if locked prop is true', () => {
    const { getByText } = render(<Display locked={true} />);

    getByText(/^locked/i);
});

test('When locked lock display uses red-led class', () => {
    const { getByTestId } = render(<Display locked={true} />);

    expect(getByTestId(/lock-display/i).classList.contains('red-led')).toBe(true);
});

test('When unlocked lock display uses green-led class', () => {
    const { getByTestId } = render(<Display locked={false} />);

    expect(getByTestId(/lock-display/i).classList.contains('green-led')).toBe(true);
});

test('When closed closed display uses red-led class', () => {
    const { getByTestId } = render(<Display closed={true} />);

    expect(getByTestId(/close-display/i).classList.contains('red-led')).toBe(true);
});

test('When open closed display uses green-led class', () => {
    const { getByTestId } = render(<Display closed={false} />);

    expect(getByTestId(/close-display/i).classList.contains('green-led')).toBe(true);
});