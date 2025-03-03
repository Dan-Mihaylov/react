import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Timer from './components/Timer';

function App() {
    const [show, setShow] = useState(false);

    const showButtonHandler = () => {
        setShow(state => !state);
    }

    return (
        <>
            <h1>UseEffect Hook</h1>

            <button onClick={showButtonHandler}>{show ? 'Hide' : 'Show'} Input</button>

            {show && <Input />}

            <hr />

            {show && <Timer />}
        </>
    )
}

export default App
