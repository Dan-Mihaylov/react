import styles from './Table.module.css';

export default function TodoListItem (props) {

  return (
    <tr className={props.todo.isCompleted ? styles.isCompleted : styles.todo}>
     <td>{props.todo.text}</td>
     <td>{props.todo.isCompleted ? 'Completed' : 'Pending'}</td>
     <td className={styles.todoAction}>
       <button className={`${styles.todoBtn} ${styles.btn}`} onClick={() => props.onStatusChange(props.todo._id)}>Change status</button>
      </td>
    </tr>
  )

}