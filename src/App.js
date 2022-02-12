import { BrowserRouter as Router } from 'react-router-dom';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Offers from './components/Offers';
import StarProducts from './components/StarProducts';
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Press from './components/Press';
import Footer from './components/Footer';
import NavOptions from './components/NavOptions';
import data from './data/data';
import './App.css';

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptops={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <StarProducts starProducts={data.starProduct} />
      <HotAccessories />
      <ProductReviews productReviews={data.productReviews} />
      <Videos videos={data.videos} />
      <Press />
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
