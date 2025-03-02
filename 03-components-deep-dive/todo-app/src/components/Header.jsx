import styles from './Header.module.css';


export default function Header (props) {
	
	return <>
			<header className={styles.navigationHeader}>
				<span className={styles.navigationLogo}>
					<img src="./todo-icon.png" alt="todo-logo" />
				</span>
				<span className={styles.spacer}></span>
				<span className={styles.navigationDescription}>Todo List</span>
			</header>
	</>
}
