
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage'
import ProjectPage from './pages/Projects/Projects'
import Work from './pages/Work/Work'
import TravelPage from './pages/Travel/Travel'

import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/Projects' element={<ProjectPage />}></Route>
        <Route path='/Work' element={<Work />}></Route>
        <Route path='/Travel' element={<TravelPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
} 