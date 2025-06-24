import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import Product from './pages/Product'
import Profile from './pages/Profile'
import Cart from './pages/cart'
import Wishlist from './pages/Wishlist'
import Checkout from './pages/CheckOut'
import OrderSuccess from './pages/OrderSuccess'
import MyOrders from './pages/MyOrders'
import Settings from './pages/Setting'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import SuccessLogin from './components/SuccessLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/List" element={<List />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/OrderSuccess" element={<OrderSuccess />} />
      <Route path="/MyOrders" element={<MyOrders />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/success-login" element={<SuccessLogin />} />
    </Routes>

 
  
    </>
  )
}

export default App
