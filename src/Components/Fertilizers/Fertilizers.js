import React, { Fragment, Suspense } from 'react';
import { Route } from 'react-router-dom';
import './Fertilizers.css';

import Spinner from '../UI/Spinner/Spinner';

const DAP = React.lazy(() => import('./DAP/DAP'));
const MAP = React.lazy(() => import('./MAP/MAP'));
const SSP = React.lazy(() => import('./SSP/SSP'));
const TSP = React.lazy(() => import('./TSP/TSP'));
const UERA = React.lazy(() => import('./UERA/UERA'));

const Products = () => {
  return (
    <Fragment>
      <Route
        path='/Fertilizers/DAP'
        render={() => (
          <Suspense fallback={<Spinner />}>
            <DAP />
          </Suspense>
        )}
      />
      <Route
        path='/Fertilizers/MAP'
        render={() => (
          <Suspense fallback={<Spinner />}>
            <MAP />
          </Suspense>
        )}
      />
      <Route
        path='/Fertilizers/SSP'
        render={() => (
          <Suspense fallback={<Spinner />}>
            <SSP />
          </Suspense>
        )}
      />
      <Route
        path='/Fertilizers/TSP'
        render={() => (
          <Suspense fallback={<Spinner />}>
            <TSP />
          </Suspense>
        )}
      />
      <Route
        path='/Fertilizers/UERA'
        render={() => (
          <Suspense fallback={<Spinner />}>
            <UERA />
          </Suspense>
        )}
      />
    </Fragment>
  );
};

export default Products;
