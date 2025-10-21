import { Routes, Route } from 'react-router';
import './App.css'
import {HomePage} from './pages/HomePage.jsx'
import {CheckoutPage} from './pages/CheckoutPage.jsx';
console.log('hello')
function App() {

  return ( //instead of path='/' u could just use index 
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='checkout' element={<CheckoutPage/>}/>
    </Routes>
  )
}

export default App
