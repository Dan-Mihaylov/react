import { it, expect, beforeEach, vi } from 'vitest'
import ReactDOM from 'react-dom/client'
import { act } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import TodoItem from './TodoItem'

// Custom way
beforeEach(() => {
    document.body.innerHTML = '';
});

// Custom way
it('Should display todo text', async () => {
    const container = document.createElement('div');

    document.body.appendChild(container);

    const root = ReactDOM.createRoot(container);

    await act(() => {
        root.render(<TodoItem text="t1" />)
    });

    const textElement = document.querySelector('label[for=todo1] span');

    expect(textElement.textContent).toEqual('t1');
});

// Testing lirbary way
it('Should display todo text', () => {
    render(<TodoItem text="test1" />);

    const textElement = screen.queryByText('test1');

    expect(textElement).toBeInTheDocument();
});

it('Should be checked when isCompleted', () => {
    render(<TodoItem isCompleted text="text1" />);

    const checkbox = screen.getByRole('checkbox', { name: 'text1' })

    expect(checkbox).toBeChecked();
});

it('Should be checked when clicked', () => {
    const onToggle = vi.fn();

    render(
        <TodoItem
            _id="123"
            isCompleted={false}
            text="checkbox-1"
            onToggle={onToggle}
        />
    );

    const checkbox = screen.getByRole('checkbox', { name: 'checkbox-1' });

    fireEvent.click(checkbox);

    expect(onToggle).toBeCalled();
    expect(onToggle).toBeCalledTimes(1);
    expect(onToggle.mock.calls[0]).toEqual(['123'])
});

it('Should match snapshot', () => {
    render(
        <TodoItem
            _id="123"
            isCompleted={false}
            text="checkbox-1"
        />
    );

    expect(document.body).toMatchSnapshot();
});
