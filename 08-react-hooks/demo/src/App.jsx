import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import AddInfo from './components/AddInfo'
import ViewJokes from './components/ViewJokes'

function App() {


	return (
		<>
			<Header />


			<Routes>
				<Route  path="/" element={<Home/>}/>
				<Route path="/info" element={<AddInfo />}/>
				<Route path="/jokes" element={<ViewJokes />} />
			</Routes>
		</>
	)
}

export default App
