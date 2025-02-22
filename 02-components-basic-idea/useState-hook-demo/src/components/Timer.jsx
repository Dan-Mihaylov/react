import { useState } from "react"



export default function Timer (props) {
  
  const [time, setTime] = useState(0);

  setTimeout(() => {
    setTime(time + 1);
  }, 1000);


  return (
    <>
    
    <h2>Timer</h2>
    {time <= 10 
      ? <p>{time}</p>
      : <p> <strong>Game Over</strong> </p>
    }
    </>
  )
}