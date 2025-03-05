import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Blog from './components/Blog';

const paths = {
  home: '/',
  about: '/about',
  pricing: '/pricing',
  blog: '/blog',
  contact: '/contact'
}

function App() {

  return (
    <div className="bg-white">

      <Header/>
      <Routes>

        <Route path={paths.home} element={<Home/>}/>
        <Route path={paths.about} element={<About/>}/>
        <Route path={paths.pricing} element={<Pricing/>}/>
        <Route path={paths.blog} element={<Blog/>}/>
        <Route path={paths.contact} element={<Contact/>}/>

      </Routes>

    </div>
  )
}


export default App
