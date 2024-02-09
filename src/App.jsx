
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Header from './Components/Header/Header'
import Homepage from './pages/Homepage/Homepage'

import './index.css'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage />}></Route>
          {/* <Route path='/page1' element={<Page1 />}></Route> */}
        </Routes>
    </BrowserRouter>
  );
} 
