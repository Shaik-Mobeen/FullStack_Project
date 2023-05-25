import React from 'react'
import './cards-style.css';

export default function Cards() {
  return (
    <div>
     <section class="details-card">
    <div class="container">
    <h1 className='text'>Our services</h1>
        <div class="row">
           
            <div class="col-md-3">
                <div class="card-content">
                    <div class="card-img">
                        <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt=""/>
                        <span><h4>USA</h4></span>
                    </div>
                    <div class="card-desc">
                        <h3>usa</h3>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Student Visa & Admission</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Visitors Visa</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Work Visa – H1B</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Business Visa</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>PR Visa – servises </p>
                     
                            <a href="#" class="btn-card">Read</a>   
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card-content">
                    <div class="card-img">
                        <img src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg" alt=""/>
                        <span><h4>UK</h4></span>
                    </div>
                    <div class="card-desc">
                    <h3>UK</h3>
                    <p><i class="fa fa-check icons" aria-hidden="true"></i>Student Visa – Tier 4</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Visitors Visa</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Work Visa – Skilled Worker</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Business Visa</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Innovator Visa</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>HPI Visa</p>
                            <a href="#" class="btn-card">Read</a>   
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card-content">
                    <div class="card-img">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/640px-Flag_of_Australia_%28converted%29.svg.png" alt=""/>
                        <span><h4>Australia</h4></span>
                    </div>
                    <div class="card-desc">
                    <span><h4>Australia</h4></span>
                    <p><i class="fa fa-check icons" aria-hidden="true"></i>Student Visa & Admission</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Visitors Visa</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Graduate Work Visa</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Business Visa</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Subclass 189</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>TSS Visa</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>PR Visa – Skill Migration</p>
                            <a href="#" class="btn-card">Read</a>   
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card-content">
                    <div class="card-img">
                        <img src="https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg" alt=""/>
                        <span><h4>Canada</h4></span>
                    </div>
                    <div class="card-desc">
                        <h3>Canada</h3>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Student Visa & Admission</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Visitors Visa</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Work Visa – FSTP</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>Business Visa</p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>PR Visa – Express Entry </p>
                        <p><i class="fa fa-check icons" aria-hidden="true"></i>PR Visa – PNP</p>
                            <a href="#" class="btn-card">Read</a>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}
