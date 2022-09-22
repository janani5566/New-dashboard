import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import About from './pages/About'
import Comment from './pages/Comment'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/about' element={<About />} />
      <Route path='/comment' element={<Comment />} />
      <Route path='/analyticts' element={<Analytics />} />
      <Route path='/product' element={<Product />} />
      <Route path='/productlist' element={<ProductList />} />
    </Routes>
    </Sidebar>
    </BrowserRouter>
  )
}

export default App
