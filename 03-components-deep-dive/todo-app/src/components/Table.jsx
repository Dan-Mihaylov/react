import styles from './Table.module.css';
import { useState, useEffect } from 'react';
import TodoListItem from './TodoListItem';

export default function Table(props) {

	const loaderEl = <>
		<div className={styles.loadingContainer}>
			<div className={styles.loadingSpinner}>
				<span className={styles.loadingSpinnerText}>
					Loading
				</span>
			</div>
		</div>
	</>;

	const [table, setTable] = useState(loaderEl);
	const [todos, setTodos] = useState([]);
	const baseUrl = 'http://localhost:3030/jsonstore';

	const todoUrl = `${baseUrl}/todos`

	useEffect(() => {
		fetch(todoUrl)
			.then(result => result.json())
			.then(data => {
				const result = Object.values(data);
				setTodos(result);
			})
	}, [])

	useEffect(() => {
		if (todos.length > 0) {
		const tableEl = <>
			<table className={styles.table}>
				<thead>
					<tr>
						<th className={styles.tableHeaderTask}>Task</th>
						<th className={styles.tableHeaderStatus}>Status</th>
						<th className={styles.TableHeaderAction}>Action</th>
					</tr>
				</thead>

				<tbody>
					{todos.map(todo => <>

						<TodoListItem
							key={todo._id}
							todo={todo}
							onStatusChange={statusChangeHandler}
						/>

					</>)}
				</tbody>
			</table>
		</>

		setTable(tableEl);
	}

	}, [todos])

	const statusChangeHandler = (todoId) => {
		setTodos(oldTodos => oldTodos.map(todo => todo._id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo))
	}

	return (
		<>

			{table}

		</>
	)

}