import React, { Fragment, Suspense } from 'react';
import { Route } from 'react-router-dom';
import './Products.css';

import Spinner from '../UI/Spinner/Spinner';

const RockSalt = React.lazy(() => import('./RockSalt/RockSalt'));
const EdibleSalt = React.lazy(() => import('./EdibleSalt/EdibleSalt'));
const IndustrialSalt = React.lazy(() =>
  import('./IndustrialSalt/IndustrialSalt')
);
const TabletSalt = React.lazy(() => import('./TabletSalt/TabletSalt'));
const SolarSalt = React.lazy(() => import('./SolarSalt/SolarSalt'));

const RockSaltHalite = React.lazy(() =>
  import('./RockSaltHalite/RockSaltHalite')
);
const SGSAnalysis = React.lazy(() => import('./SGSAnalysis/SGSAnalysis'));
const RockSaltMined = React.lazy(() => import('./RockSaltMined/RockSaltMined'));

const Products = () => {
  return (
    <Fragment>
      <Route
        path='/Products/Edible-salt'
        render={() => (
          <Suspense fallback={<Spinner />}>
            <EdibleSalt />
          </Suspense>
        )}
      />
      <Route
        path='/Products/Industrial-salt'
        render={() => (
          <Suspense fallback={<Spinner />}>
            <IndustrialSalt />
          </Suspense>
        )}
      />
      <Route
        path='/Products/Tablet-salt'
        render={() => (
          <Suspense fallback={<Spinner />}>
            <TabletSalt />
          </Suspense>
        )}
      />
      <Route
        path='/Products/Solar-salt'
        render={() => (
          <Suspense fallback={<Spinner />}>
            <SolarSalt />
          </Suspense>
        )}
      />
      <Route
        path='/Siwa-Rocks'
        render={() => (
          <Suspense fallback={<Spinner />}>
            <RockSalt />
          </Suspense>
        )}
      />
      <Route
        path='/SGS-Analysis'
        render={() => (
          <Suspense fallback={<Spinner />}>
            <SGSAnalysis />
          </Suspense>
        )}
      />
      <Route
        path='/Rock-Salt-Mined'
        render={() => (
          <Suspense fallback={<Spinner />}>
            <RockSaltMined />
          </Suspense>
        )}
      />
      <Route
        path='/Rock-Salt-Halite'
        render={() => (
          <Suspense fallback={<Spinner />}>
            <RockSaltHalite />
          </Suspense>
        )}
      />
    </Fragment>
  );
};

export default Products;
