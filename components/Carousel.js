// components/Carousel.js
import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
  return (
    <><div id="carousel" className="carousel">

  <div id='item_1' className="hideLeft">
    <img src="/car5.jpg"/>
    </div>

  <div id='item_2' className="prevLeftSecond">
    <img src="/car7.jpg"/>
    </div>

  <div id='item_3' className="prev">
    <img src="/car3.jpg"/>
    </div>

  <div id='item_4' className="selected">
    <img src="car6.jpg"/>
    </div>

  <div id='item_5' className="next">
    <img src="car2.png"/>
    </div>

  <div id='item_6' className="nextRightSecond">
    <img src="/car1.png"/>
    </div>

  <div id='item_7' className="hideRight">
    <img src="/car2.png"/>
    </div>

  <div id='item_8' class="hideRight">
    <img src="/car8.jpg"/>
    </div>



  </div></>
  );
};

export default Carousel;
