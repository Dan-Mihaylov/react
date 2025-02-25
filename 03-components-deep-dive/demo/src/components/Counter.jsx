import { useState, useEffect } from "react";
import styles from './Counter.module.css';

export default function Counter (props) {

	const [count, setCount] = useState(props.initialCount);
	const [counterEl, setCounterEl] = useState(<div className={styles.centered}><p className={styles.loader}></p></div>);


	useEffect(() => {
		console.log('Use Effect')
		
		if (count > 0) {
			setCounterEl(<p>{count}</p>);
		}

		return () => {
			console.log('CLEANING UP....');
			setCounterEl(<div className={styles.centered}><p className={styles.loader}></p></div>);
		}
		

	}, [count])


	const increaseEventHandler = () => {
		setCount(count + 1);
	}

	const decreaseEventHandler = () => {
		setCount(count - 1);
	}


	return (
		<>
		<section>
			<h1>Counter with useEffect</h1>
			{counterEl}
			<button onClick={increaseEventHandler}>
				+
			</button>
			<button onClick={decreaseEventHandler}>
				-
			</button>
		</section>
		</>
	)
}
