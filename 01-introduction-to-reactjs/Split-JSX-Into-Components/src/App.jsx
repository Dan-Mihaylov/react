import Header from './components/Header'
import Slider from './components/Slider'
import About from './components/About'
import Trending from './components/Trending'
import Discount from './components/Discount'
import Brand from './components/Brand'
import Contact from './components/Contact'
import Client from './components/Client'
import Info from './components/Info'
import Footer from './components/Footer'




export default function App() {


  return (
    <>

      <div className="hero_area">
        <Header></Header>
        <Slider/>
      </div>

      <About/>
      <Trending/>
      <Discount/>
      <Brand/>

      <Contact/>
      <Client/>
      <Info/>

      <Footer/>

    </>
  )
}
