import React from 'react';
import "./ImageSlider.css";
import { Carousel } from 'antd';

function ImageSlider(){
  return(
    <div className='slider-container'>
    <Carousel autoplay>
    <div> <img className="slider-image" src="./images/img1.png" alt="" /> </div>
    <div> <img className="slider-image" src="./images/img2.jpg" alt="" /> </div>
    <div> <img className="slider-image" src="./images/img3.png" alt="" /> </div>
    <div> <img className="slider-image" src="./images/img4.jpg" alt="" /> </div>
  </Carousel> 
  </div>
     )
};
  
  export default ImageSlider;