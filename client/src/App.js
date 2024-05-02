import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./pages/home"
import { Login } from './fcts/login';
import Admin from './pages/Admin';
import Button from 'react-bootstrap/Button';

function App() {
  return (<>
    {/* <Home /> */}
    <div>
      <Button variant="light"><Link to="/api">Home</Link></Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>


    <Routes>
      <Route path="/api" element={<Home />} />
      <Route path="/api/admin" element={<Admin />} />
      <Route path="/api/login" element={<Login />} />
      {/* <Route path="/api/users/addUser" element={<addUser />} /> */}
    </Routes>
  </>);
}
export default App;
