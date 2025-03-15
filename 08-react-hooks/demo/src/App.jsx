import { Route, Routes } from 'react-router';
import { UserContext } from './context/userContext';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AddInfo from './components/AddInfo';
import ViewJokes from './components/ViewJokes';
import { useState } from 'react';


const defaultImageUrl = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/78d0bcc3-418b-4f9c-a3bb-27afbe816c03/de8qqfg-5a5e39c2-bb68-4572-8f43-37d784543d21.png/v1/fill/w_894,h_894,q_70,strp/an_anonymous_user_icon___by_impossibleplay9_de8qqfg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzc4ZDBiY2MzLTQxOGItNGY5Yy1hM2JiLTI3YWZiZTgxNmMwM1wvZGU4cXFmZy01YTVlMzljMi1iYjY4LTQ1NzItOGY0My0zN2Q3ODQ1NDNkMjEucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EKJCQiJAeb5Dq3_FhtpFddUxVdikurux7K8YctBzsOA';
const defaultUsername = 'Anonymous';


function App() {

	const [username, setUsername] = useState(defaultUsername);
	const [imageUrl, setImageUrl] = useState(defaultImageUrl);

	const userSetHandler = (formData) => {
		const data = Object.fromEntries(formData);
		setUsername(data.username);
		setImageUrl(data.imageUrl);
	}


	return (
		<>
			<UserContext.Provider value={{username, imageUrl, userSetHandler}}>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/info" element={<AddInfo />} />
					<Route path="/jokes" element={<ViewJokes />} />
				</Routes>
			</UserContext.Provider>
		</>
	)
}

export default App



// Import the createContext context object that you have created and wrap all the elements that you want to have access to the state in this with a Context.Provider.
// In the value property you can destructure an object of all the props that you want to be included in this context.