import React, { Fragment } from 'react';
import './HoverDropDown.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const HoverDropDown = () => {
  return (
    <Fragment>
      <div className='dropdown'>
        <button className='dropbtn'><FontAwesomeIcon icon={faChevronLeft} /> Salt</button>
        <div className='dropdown-content'>
          <NavLink to='/Siwa-Rocks'>Siwa Rocks</NavLink>
          <NavLink to='/SGS-Analysis'>SGS Analysis</NavLink>
          <NavLink to='/Rock-Salt-Mined'>How Is the Rock Salt Mined</NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default HoverDropDown;
