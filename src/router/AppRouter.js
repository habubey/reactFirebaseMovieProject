import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react'
import Arama from '../pages/Arama'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Navbar from "../components/Navbar";
import Listeleme from "../pages/Listeleme";
import Filmdetay from "../pages/Filmdetay";



const AppRouter = () => {
  return (
   <Router>
    <Navbar />
    <Routes>

    <Route path="/" element={<Arama />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/listeleme" element={<Listeleme />} />
    <Route path="/detay/:id" element={<Filmdetay />} />
    </Routes>

   </Router>
  )
}

export default AppRouter