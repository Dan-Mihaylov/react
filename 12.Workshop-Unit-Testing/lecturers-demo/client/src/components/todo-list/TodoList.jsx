import { useEffect, useState } from "react";
import TodoItem from "../todo-item/TodoItem";
import request from "../../utils/request";

export default function TodoList() {
    const [todos, setTodos] = useTodos();

    const todoToggleHandler = (todoId) => {
        setTodos(state => state.map(todo => todo._id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    }

    return (
        <>
            <ul className="divide-y divide-gray-200 px-4">
                {todos.map(todo => <TodoItem {...todo} onToggle={todoToggleHandler} />)}
            </ul>
        </>
    );
}

function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        request.get('http://localhost:3030/jsonstore/todos')
            .then((result) => {
                const todosResult = Object.values(result);

                setTodos(todosResult);
            })
    }, []);

    return [todos, setTodos];
}
