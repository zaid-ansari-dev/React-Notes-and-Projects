import { Routes, Route } from 'react-router-dom';
import './App.css'
import { HomePage } from './pages/HomePage.jsx'
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import { OrdersPage } from './pages/OrdersPage.jsx';
import { TrackingPage } from './pages/TrackingPage.jsx';
import { NotFound } from './pages/NotFound.jsx';
console.log('hello')
function App() {

  return ( //instead of path='/' u could just use index 
    
      <Routes>
        <Route index element={<HomePage/>}/> 
        <Route path='checkout' element={<CheckoutPage/>}/>
        <Route path='orders' element={<OrdersPage/>}/>
        <Route path='tracking' element={<TrackingPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    
  )
}

export default App
