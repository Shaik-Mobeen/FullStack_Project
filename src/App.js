import React from 'react';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './website.css';
import Websites from './components/websites';
// import Create from './components/create';
import Update from './components/update';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Cards from './components/Cards';
import Signup from './components/Signup';
import Login from './components/Login';
import Empcreate from './components/employees/Empcreate';
import Empdetails from './components/employees/Empdetails';
import Empedit from './components/employees/Empedit';
import Emplist from './components/employees/Emplist';


function App() {
  return (
    <Router>
    <div classNameName="App">
     <nav className="navbar navbar-expand-lg bg-body-tertiary" p-5 m-5>
  <div className="container-fluid">
    <Link className="navbar-brand logos" to="#"><i className="fa fa-graduation-cap" aria-hidden="true"></i>MS Study Abroad</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Aboutus">About Us</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Cards">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/create">Create</Link>
        </li>
        <li classNameName="nav-item">
          <Link className="nav-link active" aria-current="page" to="/update">Update</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Contactus">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Signup">Registration</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/employee">employee</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

   <Routes>
         
   <Route exact path='/' element={< Home />}></Route>
   <Route exact path='/Aboutus' element={< Aboutus />}></Route>
   <Route exact path='/Cards' element={< Cards />}></Route>
 <Route exact path='/' element={< Websites />}></Route>
   {/* <Route exact path='/create' element={< Create />}></Route> */}

  <Route exact path='/update' element={< Update />}></Route>
  <Route exact path='/Contactus' element={< Contactus />}></Route>
  <Route exact path='/Signup' element={< Signup />}></Route>
  <Route exact path='/Login' element={< Login />}></Route>
  <Route path='/create' element ={<Empcreate />}></Route>
  <Route path='/details/:empid' element ={<Empdetails />}></Route>
  <Route path='/edit/:empid' element ={<Empedit />}></Route>

  <Route path='/employee' element ={<Emplist />}></Route>
   
      
       </Routes>
 


    </div>
    </Router>
  );
}

export default App;
