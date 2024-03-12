import './App.css';
import Navbar from './components/Navbar/Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Loginsignup from './pages/LoginSignup';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer'
import men_banner from './components/Datas/banner_mens.png'
import women_banner from './components/Datas/banner_women.png'
import kid_banner from './components/Datas/banner_kids.png'
import About from './pages/About.jsx'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>  
        <Route path='/home' element={<Home/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
