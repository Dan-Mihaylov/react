import { useState } from "react";

export default function Counter (props) {

  const [count, setCount] = useState(0);


  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }


  let header;

  if (count <= 3) {
    header = <h2>Counter</h2>
  } else if (count <= 5) {
    header = <h2>{props.messages.tooCloseMsg}</h2>
  } else if (count <= 9) {
    header = <h2>{props.messages.lastChanceMsg}</h2>
  } else {
    header = <h2>{props.messages.gameIsOverMsg}</h2>
  }

  return (
    <>

      {header}

      <p>Current Count: {count}</p>
      
      { count < 10
        ? <>
          <button onClick={increaseCount}>+</button>
          <button onClick={decreaseCount}>-</button>
          </>
        : <></>
      }
    </>
  )

}

