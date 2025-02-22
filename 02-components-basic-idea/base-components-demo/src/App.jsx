import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
const headerElements = ['Home', 'About', 'Contacts'];
const name = 'Peter Parker';

const today = new Date();
const readableDate = today.toLocaleDateString();

  return (
    <>
      <Header 
        elements={headerElements}>
      </Header>
    
      <Main 
        name={name}
        />
    
      <Footer
        date={readableDate}
        />

    </>

  )
}

export default App
