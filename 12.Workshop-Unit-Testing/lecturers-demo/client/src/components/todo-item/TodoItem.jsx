import React from 'react'

const TodoItem = ({
    _id,
    text,
    isCompleted,
    onToggle,
}) => {
    return (
        <li className="todo-item py-4">
            <div className="flex items-center">
                <input
                    id="todo1"
                    name="todo1"
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => onToggle(_id)}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label htmlFor="todo1" className="ml-3 block text-gray-900">
                    <span className="text-lg font-medium">{text}</span>
                </label>
            </div>
        </li>
    )
}

export default TodoItem
