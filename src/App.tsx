import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/home/contact/Contact';
import Navbar from './components/home/navbar/Navbar';
import Text from './components/home/text/Text';
import ImageSlider from './components/home/image-slider/ImageSlider';
import LinkCards from './components/home/cards/LinkCards';
import Form from './components/home/form/Forms'
import Footer from './components/home/footer/Footer';
import ShortVideo from './components/home/shortVideo/ShortVideo';
import MainText from './components/home/mainText/MainText';


function App() {
  return (
    <div>
      <Contact />
      <Navbar />
      <Text />
      <ImageSlider />
      <MainText />
      <LinkCards />
      <ShortVideo />
      <Footer />
    </div>

  );
}
export default App;
