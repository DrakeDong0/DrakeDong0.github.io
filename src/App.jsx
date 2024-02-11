
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage'
import ProjectPage from './pages/Projects/Projects'
import Extras from './pages/Extras/Extras'

import './index.css'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/Projects' element={<ProjectPage />}></Route>
          <Route path='/Extras' element={<Extras />}></Route>
        </Routes>
    </BrowserRouter>
  );
} 
