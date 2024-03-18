// pages/index.js
import Head from 'next/head';
import Carousel from '../components/Carousel';
import CarGrid from '../components/CarGrid';
import Footer from '../components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
  return (
    <div>
      <Head>
        <title>DODOMA CAR LENDING SITE</title>
        {/* Add any other meta tags or stylesheets here */}
      </Head>

      <header>
      <div className="header">
  <a href="#default" className="logo">DODOMA CAR LENDING SITE</a>
  <div className="header-right">
    <a className="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
      </header>

    <div className='bod'>
    <main>
        
        <div className='word'>
      <p>
      "Welcome to DODOMA CAR LENDING SITE where driving dreams come to life! At our showroom, 
      we invite you to embark on a journey of automotive excellence. Explore our curated collection of cars,
       each designed to deliver a perfect blend of style and performance. Whether you're seeking luxury, 
       efficiency, or adventure, we have the ideal ride waiting for you. Let's make your driving aspirations a reality. start your exploration with DODOMA CAR LENDING SITE today!"</p></div>
        <Carousel />
        <CarGrid />
        <Footer />
      </main>

    </div>
      {/* Add any other components or sections as needed */}
    </div>
  );
};

export default Home;
