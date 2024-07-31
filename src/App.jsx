import {Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Schedule from './pages/Schedule'

function App() {
  return (
    <div className='container'>
     
      <Routes>
        <Route index element={<Login />} /> 
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>

     </div>
 ) 
}

export default App;
