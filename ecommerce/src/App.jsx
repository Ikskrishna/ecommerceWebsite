import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Category from './Pages/Category'
import Cart from './Pages/Cart'
import ProductCard from './components/ProductCard'
import ProductPage from './Pages/ProductPage'
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext'
import UseLenis from './components/UseLenis'
import CheckOut from './Pages/CheckOut'
import '@fontsource/inter'; // default 400
import '@fontsource/inter/600.css'; // optional additional weights
import PrivacyPolicy from './Pages/PrivacyPolicy'
  
function App() {
 
    UseLenis()

  return (
    <>
    <div className='w-full max-w-[1440px] mx-auto overflow-x-hidden'>

    <CartProvider>
    <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:categoryName" element={<Category/>} />
            <Route path="/checkout" element={<CheckOut />} /> 
            <Route path="/product" element={<ProductCard />} />
            <Route path="/product/:id" element={<ProductPage />} /> 
            <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          </Routes>
    <Footer />
    </CartProvider>
    </div>
    </>
  )
}

export default App
