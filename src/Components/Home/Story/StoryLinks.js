import React from 'react';

import { NavLink } from 'react-router-dom';

import RockSaltHalite from '../../Products/RockSaltHalite/RockSaltHalite';
import RockSaltMined from '../../Products/RockSaltMined/RockSaltMined';
import SGSAnalysis from '../../Products/SGSAnalysis/SGSAnalysis';
import RockSalt from '../../Products/RockSalt/RockSalt';

const StoryLinks = () => {
  return (
    <ul style={{ width: '300px' }}>
      <li>
        <NavLink to='/Rock-Salt-Halite'>Rock Salt (Halite)</NavLink>
      </li>
      <li>
        <NavLink to='/Rock-Salt-Mined'>
          How Is the Rock Salt Mined?
        </NavLink>
      </li>
      <li>
        <NavLink to='/SGS-Analysis'>ROCK SALT Analysis By SGS</NavLink>
      </li>
      <li>
        <NavLink to='/Siwa-Rocks'>SIWA ROCK SALT FROM EGYPT</NavLink>
      </li>
    </ul>
  );
};

export default StoryLinks;
