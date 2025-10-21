import { Routes, Route } from 'react-router';
import './App.css'
import {HomePage} from './pages/HomePage.jsx'
console.log('hello')
function App() {

  return ( //instead of path='/' u could just use index 
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='checkout' element={<div>test checkout page</div>}/>
    </Routes>
  )
}

export default App
