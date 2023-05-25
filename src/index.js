import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
// import Aboutus from './components/Aboutus';
// import Test1 from './components/Test1';
// import Cards from './components/Cards';
import Elgibility from './components/Elgibility';
import Review from './components/Review';
//  import Userdetails from './components/UserDetails';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test1 /> */}
    {/* <Cards/> */}
    <Elgibility/>
    <Review/>

   
   
    <Footer/>


  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
