import Table from './Table';
import styles from './TodoContainer.module.css';

export default function TodoContainer (props) {

	return (
		<>
		
		<section className={styles.todoListContainer}>
			<h1>Todo List</h1>
					
			<div className={styles.addBtnContainer}>
				<button className="btn">+ Add new Todo</button>
			</div>

			<div className={styles.tableWrapper}>
				<Table/>
			</div>

		</section>
		
		</>
	)


}