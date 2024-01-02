import React from 'react'
import { useEffect } from 'react';
import { CircularProgress , CircularProgressLabel} from '@chakra-ui/react';
import "./Home.css";


const Home = () => {

  useEffect(() => {
    let mouseDownAt = "0";
    let prevPercentage = "0";
    const track = document.getElementById('slider');
    console.log('track:', track);
  console.log('mouseDownAt:', mouseDownAt);

    if (track) {
      const handleOnDown = (e) => {
        const track = e.target.closest('#slider');
      
        if (track) {
          mouseDownAt = e.clientX;
        }
      };
  
      const handleOnUp = () => {
        const track = document.getElementById('slider');
        if (track) {
          mouseDownAt = "0";
          prevPercentage = track.dataset.percentage || "0";
        }
      };
      const handleOnMove = (e) => {
        const track = e.target.closest('#slider');
        console.log('track:', track);
        console.log('mouseDownAt:', mouseDownAt);
  
        if (track && mouseDownAt !== "0") {
          const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
          const maxDelta = window.innerWidth;
  
          const percentage = (mouseDelta / maxDelta) * -100;
          const nextPercentageUnconstrained =
            parseFloat(prevPercentage) + percentage;
          const nextPercentage = Math.max(
            Math.min(nextPercentageUnconstrained, 0),
            -70
          );
  
          track.dataset.percentage = nextPercentage;
          track.style.transform = `translateX(${nextPercentage}%)`;
        }
      };
  
      window.addEventListener("mousedown", handleOnDown);
      window.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
  
      window.addEventListener("mouseup", handleOnUp);
      window.addEventListener("touchend", handleOnUp);
  
      window.addEventListener("mousemove", handleOnMove);
      window.addEventListener("touchmove", handleOnMove);
  
      return () => {
        window.removeEventListener("mousedown", handleOnDown);
        window.removeEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
        window.removeEventListener("mouseup", handleOnUp);
        window.removeEventListener("touchend", handleOnUp);
        window.removeEventListener("mousemove", handleOnMove);
        window.removeEventListener("touchmove", handleOnMove);
      };
    } else {
      console.error("Element with ID 'slider' not found");
    }
  }, []);
  

  return (
<div> 

  <div className='first-page-container'>
    <div className='video-container'>
      <video  loop muted autoPlay playsInline className='bg-video'>
        <source src='Bg2.mp4' type='video/mp4' />
        </video>

    <div className='header-container'> 
      <img className='header-image' src='Bg-Logo.png' alt='logo'/>
        <a class="btn btn-primary" id='menu-button' href="#" role="button">
       <img src='menu.png' alt='menuIcon' className='menu-icon' /> 
        </a>
    </div>

    <div className='video-text-container'>
      The spaces we make shape the people we become.
    </div>
    </div>
  </div>

<div className='ourself-box-container'>
  <div className='ourself-flex-box'>
    <div className='ourself-header-flex-box'>
  <div className='ourself-header'> 
  Redefining the Boundaries of Architectural Design
  </div>
 <div className='ourself-image-box '> 
    <img src = "ourself-image.jpg" alt='ourselfImage' id='ourself-image' />
  </div>

 </div>
  

<div className='ourself-text-flex-box'>

  <div className='ourself-text'> 
  From The Very First Blueprint To The Final Brushstroke, We Have Evolved With Time, Embracing New Technologies And Trends While Staying True To Our Timeless Values. Our Journey Has Been Adorned With Milestones Of Success, But What Truly Drives Us Is The Satisfaction Of Our Clients As They Witness Their Visions Metamorphose Into Reality </div>

  <div className='ourself-statistics'>  

  <div className=' statistics-box '>
    <p>Architecture</p>
  <CircularProgress value={79} color='black' size = '100px' >
  <CircularProgressLabel>79%</CircularProgressLabel>
</CircularProgress>
</div>

<div className=' statistics-box '>
    <p>Interior Design</p>
  <CircularProgress value={62} color='black' size = '100px' >
  <CircularProgressLabel>62%</CircularProgressLabel>
</CircularProgress>
</div>

<div className=' statistics-box '>
    <p>Construction</p>
  <CircularProgress value={92} color='black' size = '100px' >
  <CircularProgressLabel>92%</CircularProgressLabel>
</CircularProgress>
</div>


  </div>
  </div>
  </div>
</div>

<div className='services-container'>

<div className='services-header'> Our Services </div>
<div className='services-box'>


<div className='slider' id='slider' data-mouse-down-at= '0' data-prev-percentage= '0'>
      <div className='slide' >
        <div className='slider-image'> 
        <img src='Exterior.jpg' alt='' draggable = "false" />   
        </div>
        <div className='slider-text'> 
        <p>Exterior Design</p>
        </div>
        <button type="button" class="btn btn-dark">Know More</button>

      </div>

      <div className='slide' >
        <div className='slider-image'> 
        <img src='Interior.png' alt='' draggable = "false" />   
        </div>
        <div className='slider-text'> 
          <p>Interior Design</p>
        </div><button type="button" class="btn btn-dark">Know More</button>
      </div>

      <div className='slide' >
        <div className='slider-image'> 
        <img src='InteriorDesign.png' alt='' draggable = "false" />   
        </div>
        <div className='slider-text'> 
        <p>Art and Styling</p>
        </div><button type="button" class="btn btn-dark">Know More</button>
      </div>

      <div className='slide' >
        <div className='slider-image'> 
        <img src='Kitchen.png' alt='' draggable = "false" />   
        </div>
        <div className='slider-text'> 
        <p> Kicthen Design</p>
        </div><button type="button" class="btn btn-dark">Know More</button>
      </div>
</div>
</div>
</div>


<div className='projects-container'>
<div className='projects-header'> Our Latest Projects </div>
<div className='projects-box'> 

  <div className='year-box'>
    <p className='pro-year'> 2023</p>
    <div className='project-box'>   
    <div className='project-header-box'>
      <p className='pro-text'> Luxury Home Interior Design </p>
      <img src='GR.png' alt='' className='pro-img' /> 

      
       </div>
    <div className='project1-button-box'> 
    <button  type="button" class="btn btn-dark">View</button>
    <img src='Int.png' alt='' className='pro1-img' /></div>

    </div>
  </div>
  </div>
    <div className='projects-box'>
  <div className='year-box'>
    <p className='pro-year'> 2023</p>

    <div className='project-box'>   
    <div className='project-header-box'>
      <p className='pro-text'> Val Halla - Restaraunt Bar  </p>
      <img src='Valhalla.jpg' alt='' className='pro-img' />
       </div>
    <div className='project-button-box'> 
    <button  type="button" class="btn btn-dark">View</button>
    <img src='Valhalla-table.png'  alt='' className='pro1-img'/>
    </div>

    </div>
  </div>
  </div>


  <button type="button" class="btn btn-outline-dark">Explore Projects</button>
</div>

<div className='tag-line-container'>
  <div className='tag-line-box'>
    <p className='tag-line-text'>Dreams Designed, Worlds Defined.</p>
  </div>
</div>

<div className='review-container'>

  <div className='review-box'>
  
  <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">

    <div class="carousel-item active" data-bs-interval="10000">
      <div class="inside-card">
        
        <p className='review-text'>Incredible dedication from the team,<br/> very responsive andenthusiastic.</p>
        <div className='review-member'>
          <p>Klaus Mickelson</p>
        <p>Manager,The Orginals</p> </div>
      </div>
    </div>

    <div class="carousel-item" data-bs-interval="2000">
     
      <div class="inside-card">
      <p className='review-text'>It has been a real pleasure to work with you and <br/> it's fantastic tosee how professional and hard working you are.</p>
        <div className='review-member'>
          <p>Dr Khan I </p>
        <p>London</p> </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="inside-card">
      <p className='review-text'>Thank you very much for helping me with my change<br/> of useplanning application which got approved.</p>
        <div className='review-member'>
          <p>Harvey V.</p>
        <p>London</p> </div>
      </div>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>

  
</div>

<div className='footver-container'>


    <div className='footer-box'>

    

    <div className='call-us'>
    <div className='footer-text'>Let's Work Together ?</div>
    <button type="button" class="btn btn-secondary ">Get In Touch</button>
    </div>
    </div> 
    <img src='Cover.webp' alt='' className='footer-cover'></img>
    <div className='copyright-box'>
      <p className='brand-name'> © 2023 Designed by Jikkesh,  Grove Street Tech</p>

      <div className='social-media-icons-bar'>
      <a className='insta-icon' href='https://www.instagram.com/a2nxtgenstudio/' target="_blank"><img className='social-media-icons' src='icons/instagram.png'></img></a>
      <a className='facebook-icon' href='https://www.facebook.com' target="_blank"><img className='social-media-icons' src='icons/facebook.png'></img></a>
      </div>
      
    </div>
   
  </div>



    

      
</div>

  )
}

export default Home