import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './Fertilizers.css';

import DAP from './DAP/DAP';
import MAP from './MAP/MAP';
import SSP from './SSP/SSP';
import TSP from './TSP/TSP';
import UERA from './UERA/UERA';

const Products = () => {
  return (
    <Fragment>
      <Route path="/Fertilizers/DAP" component={DAP} />
      <Route path="/Fertilizers/MAP" component={MAP} />
      <Route path="/Fertilizers/SSP" component={SSP} />
      <Route path="/Fertilizers/TSP" component={TSP} />
      <Route path="/Fertilizers/UERA" component={UERA} />
    </Fragment>
  );
}

export default Products;