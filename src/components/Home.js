import React from 'react'
import './home.css';
import Websites from './websites';

export default function Home() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://fdoverseas.com/wp-content/uploads/2021/09/FB-Banner-2.jpg" class="d-block w-100 imgs" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://d2hpxyoi44i7uq.cloudfront.net/wp-content/uploads/2022/07/Ace-the-Standardized-1020x420-1.jpg" class="d-block w-100 imgs" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://production-azent-website-cms-uploads.s3.ap-south-1.amazonaws.com/Tips_To_Choose_The_Best_Study_Abroad_Consultants_9f172d5e1a.jpg" class="d-block w-100 imgs" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container">
    <img class="mainImg" src="https://i0.wp.com/tonyeducation.com/wp-content/uploads/2020/06/university-abroad-1280x700-head-1.jpg?fit=1280%2C700&ssl=1"/>
    <div class="allText aboveText">
      <p class="text-blk headingText">
        Our Mission
      </p>
      <p class="text-blk subHeadingText">
      India’s No.1 Immigration & Visa Consultant.
      </p>
      <p class="text-blk description">
      MS Overseas is India’s No.1 Overseas Career Consultant and presumably the world’s largest B2C immigration firm. Established in 1999, our 50+ company owned and managed offices across India, Australia, the United Arab Emirates, the United Kingdom, and Canada and 1500+ employees serve over 1 million customers. We are Licensed Recruitment Agents in India and IATA travel agents
      </p>
      <button class="explore">
        Explore
      </button>
    </div>
  </div>
  
</div>

    </div>
  )
}
