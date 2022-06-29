import { Grid } from '@material-ui/core';
import React from 'react';
import './App.css';
import Home from "./pages/home/Home"
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'
import Login from './pages/login/Login'

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
