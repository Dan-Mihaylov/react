import styles from './Main.module.css';
import TodoContainer from './TodoContainer';


export default function Main (props) {


	return (
		<>
			<main className={styles.main}>

				<TodoContainer/>
				
			</main>
		</>
	)

}