import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles/carouselStyle.css'

import Cech from '../assets/images/cech.jpg';
import Havertz from '../assets/images/havertz.jpg';
import Squad from '../assets/images/goal.jpg';
import Womens from '../assets/images/womens.jpg';
import Chillwell from '../assets/images/chillwell.jpg';
import Mendy from '../assets/images/mendy.jpg';

const MyCarousel = () => {
    return(
   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Cech}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>CECH IS THE INSPIRATION</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Womens}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>WOMENS TEAM READY TO ROLL</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Havertz}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>HAVERTZ WITH THE HAT TRICK</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Chillwell}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>CHILLWELL MAKES HIS DEBUT</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Mendy}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>MENDY HAS SIGNED</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Squad}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>THE SQUAD CELEBRATES RUNAWAY VICTORY</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}


export default MyCarousel;


