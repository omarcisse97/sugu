import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router';
import Sugu from './pages/sugu';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sugu />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
