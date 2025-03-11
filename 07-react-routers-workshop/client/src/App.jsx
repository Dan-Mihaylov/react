import { useState } from 'react'
import { Routes, Route } from 'react-router';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import PageCreate from './components/page-create/PageCreate';
import PageEdit from './components/page-edit/PageEdit';
import Details from './components/details/Details';
import Catalog from './components/catalog/Catalog';

function App() {
	const [count, setCount] = useState(0)

	return (
		<div id="box">

			<Header />

			<main id="main-content">
				<Routes>
					<Route path="" element={ <Home /> }/>
					<Route path="/login" element={ <Login /> }/>
					<Route path="/register" element={ <Register /> }/>
					<Route path="/game-create" element={ <PageCreate /> }/>
					<Route path="/game-edit/:gameId" element={ <PageEdit /> }/>
					<Route path="/details/:gameId" element={ <Details /> }/>
					<Route path="/catalog" element={ <Catalog /> }/>
				</Routes>
			</main>


		</div>
	)
}

export default App;
