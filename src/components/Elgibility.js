import React from 'react'
import './eligib.css';


export default function Elgibility() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <h2 className='txt1'>Check Your Eligibility</h2>
            <p  className='txt2'>The Y-Axis points calculator is an easy way for you to evaluate your profile’s strength when applying to work, study or settle abroad.</p>
        </div>
      
      </div>

      <div className="cont-flex">

        <div className='eligi'>
        <div><img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt=""/></div>
        <div><h2>USA</h2></div>
        </div>

         <div className='eligi'>
        <div><img src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg" alt=""/></div>
        <div><h2>Uk</h2></div>
        </div>   

        <div className='eligi'>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/640px-Flag_of_Australia_%28converted%29.svg.png" alt=""/></div>
        <div><h2>Australia</h2></div>
        </div>

        <div className='eligi'>
        <div><img src="https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg" alt=""/></div>
        <div><h2>Canada</h2></div>
        </div>
      </div>

    </div>
  )
}
