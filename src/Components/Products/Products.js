import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import RockSalt from './RockSalt/RockSalt';
import EdibleSalt from './EdibleSalt/EdibleSalt';
import IndustrialSalt from './IndustrialSalt/IndustrialSalt';
import TabletSalt from './TabletSalt/TabletSalt';
import SolarSalt from './SolarSalt/SolarSalt';

import RockSaltHalite from './RockSaltHalite/RockSaltHalite';
import SGSAnalysis from './SGSAnalysis/SGSAnalysis';
import RockSaltMined from './RockSaltMined/RockSaltMined';

import './Products.css';

const Products = () => {
  return (
    <Fragment>
      <Route path="/Products/Edible-salt" component={EdibleSalt} />
      <Route path="/Products/Industrial-salt" component={IndustrialSalt} />
      <Route path="/Products/Tablet-salt" component={TabletSalt} />
      <Route path="/Products/Solar-salt" component={SolarSalt} />
      <Route path="/Siwa-Rocks" component={RockSalt} />
      <Route path="/SGS-Analysis" component={SGSAnalysis} />
      <Route path="/Rock-Salt-Mined" component={RockSaltMined} />
      <Route path="/Rock-Salt-Halite" component={RockSaltHalite} />
    </Fragment>
  );
}

export default Products;