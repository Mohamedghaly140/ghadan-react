import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Slider.css';

import Logo from '../Logo/Logo';
import slid1 from '../../assets/images/slider/Ghadan Company Your Salt Partner.jpg';
import slid2 from '../../assets/images/slider/Genuine Rock Salt Producer.jpg';
import slid3 from '../../assets/images/slider/Third Party Quality Control.jpg';
import slid4 from '../../assets/images/slider/Millions of Tons Capacity.jpg';
import slid5 from '../../assets/images/slider/Agile Efficient Stevedore Performance.jpg';
import slid6 from '../../assets/images/slider/Pure Rock Salt.jpg';
import slid7 from '../../assets/images/slider/Our Market.jpg';
import slid8 from '../../assets/images/slider/sea_salt.jpg';
import slid9 from '../../assets/images/slider/edible_salt.jpg';
import slid10 from '../../assets/images/slider/salt_tablets.jpg';

const Slider = props => {
  return (
    <div className="slider">
      <OwlCarousel
        className='owl-theme'
        items={1}
        margin={0}
        nav={true}
        dots={true}
        loop={true}
        autoplay={true}
        autoplayHoverPause={true}
      >
        <div className="item">
          <div className="overlay"></div>
          <img src={slid1} className="d-block w-100" alt="Ghadan Company Your Salt Partner" title="Ghadan Company Your Salt Partner" />
          <div className="caption" style={{top: '25%'}}>
            <div style={{height: '50%'}}>
              <Logo />
            </div>
            <h2>Ghadan Company</h2>
            <p>Your Salt Partner</p>
          </div>
        </div>
        <div className="item">
          <div className="overlay"></div>
          <img src={slid2} className="d-block w-100" alt="Genuine Rock Salt Producer" title="Genuine Rock Salt Producer" />
          <div className="caption">
            <h2>GENUINE ROCK SALT PRODUCER</h2>
          </div>
        </div>
        <div className="item">
          <div className="overlay"></div>
          <img src={slid3} className="d-block w-100" alt="Third Party Quality Control" title="Third Party Quality Control" />
          <div className="caption">
            <h2>Third Party Quality Control</h2>
          </div>
        </div>
        <div className="item">
          <div className="overlay"></div>
          <img src={slid4} className="d-block w-100" alt="Millions of Tons Capacity" title="Millions of Tons Capacity" />
          <div className="caption">
            <h2>Millions of Tons Capacity</h2>
          </div>
        </div>
        <div className="item">
          <div className="overlay"></div>
          <img src={slid5} className="d-block w-100" alt="Agile Efficient Stevedore Performance" title="Agile Efficient Stevedore Performance" />
          <div className="caption">
            <h2>Agile Efficient Stevedore Performance</h2>
          </div>
        </div>
        <div className="item">
          <div className="overlay"></div>
          <img src={slid6} className="d-block w-100" alt="Pure Rock Salt" title="Pure Rock Salt" />
          <div className="caption">
            <h2>Our Product</h2>
            <p>Pure Rock Salt</p>
          </div>
        </div>
        <div className="item">
          <div className="overlay"></div>
          <img src={slid7} className="d-block w-100" alt="Our Market" title="Our Market" />
          <div className="caption">
            <h2>We deliver Any Where</h2>
            <p>We deliver Any Where</p>
          </div>
        </div>
        <div className="item">
          <div className="overlay"></div>
          <img src={slid8} className="d-block w-100" alt="Sea Salt" title="Sea Salt" />
          <div className="caption">
            <h2>Sea Salt</h2>
          </div>
        </div>
        <div className="item">
          <div className="overlay"></div>
          <img src={slid9} className="d-block w-100" alt="Edible Salt" title="Edible Salt" />
          <div className="caption">
            <h2>Edible Salt</h2>
          </div>
        </div>
        <div className="item">
          <div className="overlay"></div>
          <img src={slid10} className="d-block w-100" alt="Salt Tablets" title="Salt Tablets" />
          <div className="caption">
            <h2>Salt Tablets</h2>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Slider;
