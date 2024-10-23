import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login'
import Register from './auth/Register'
const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App