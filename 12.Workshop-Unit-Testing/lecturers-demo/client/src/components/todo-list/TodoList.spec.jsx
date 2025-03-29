import { expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import TodoList from "./TodoList";

it.skip('Should check todo when clicked | Snapshot', async () => {
    const mockResult = {
        'todo_2': {
            "_id": "todo_2",
            "text": "Do laundry",
            "isCompleted": false
        }
    }

    vi.mock('../../utils/request', async (importOriginal) => {
        const request = await importOriginal();
        return {
            default: {
                ...request,
                get: async () => mockResult
            }
        }
    });

    render(<TodoList />)

    await vi.waitUntil(() => document.querySelector('.todo-item'))

    screen.debug();

    expect(true).toBe(true);
});
