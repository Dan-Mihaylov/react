import { useState } from 'react'
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
				<Home />
				<Login />
				<Register />
				<PageCreate />
				<PageEdit />
				<Details />
				<Catalog />
			</main>


		</div>
	)
}

export default App;
