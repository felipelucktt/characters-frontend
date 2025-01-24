import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CharactersDetails from './pages/Details/details'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharactersDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
