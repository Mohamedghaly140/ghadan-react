import React, { Fragment } from 'react';
import Slider from './Slider/Slider';
import Features from './Features/Features';
import Partner from './Partner/Partner';
import Story from './Story/Story';
import Blog from './Blog/Blog';

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <Features />
      <Partner />
      <Story />
      <Blog />
    </Fragment>
  );
}

export default Home;