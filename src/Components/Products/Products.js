import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import RockSalt from './RockSalt/RockSalt';
import EdibleSalt from './EdibleSalt/EdibleSalt';
import IndustrialSalt from './IndustrialSalt/IndustrialSalt';
import TabletSalt from './TabletSalt/TabletSalt';
import SolarSalt from './SolarSalt/SolarSalt';

const Products = () => {
  return (
    <Fragment>
      <Route path="/Products/Rock-salt" component={RockSalt} />
      <Route path="/Products/Edible-salt" component={EdibleSalt} />
      <Route path="/Products/Industrial-salt" component={IndustrialSalt} />
      <Route path="/Products/Tablet-salt" component={TabletSalt} />
      <Route path="/Products/Solar-salt" component={SolarSalt} />
    </Fragment>
  );
}

export default Products;