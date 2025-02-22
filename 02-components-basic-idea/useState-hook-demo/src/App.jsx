import './App.css'
import Timer from './components/Timer'
import Counter from './components/Counter'

function App() {

  const messages = {
    gameIsOverMsg: 'Game Is Over!!!',
    lastChanceMsg: 'Last Chance!',
    tooCloseMsg: 'Getting Too Close!',
  }

  return (
    <>
      <Timer></Timer>

      <br />
      <hr />

      <Counter messages={messages}></Counter>
    </>
  )
}

export default App
