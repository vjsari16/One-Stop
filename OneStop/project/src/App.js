import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Login from './screens/Loginscreen';
import Home from './screens/home';
import Cartscreen from './screens/Cartscreen'
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Orderscreen from './screens/Ordersscreen';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/food" element={<Homescreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path='/register' element={<Registerscreen/>}/>
          <Route path='/orders' element={<Orderscreen/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
