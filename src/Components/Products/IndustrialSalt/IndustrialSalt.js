import React from 'react';
import { NavLink } from 'react-router-dom';

import IndustrialSaltimg from '../../../assets/images/rock_salt/Industrial_Salt.jpg';

const IndustrialSalt = () => {
  return (
    <div className='intdusrrial-salt py-5'>
      <div className='container py-2'>
        <h2
          className='mb-4 pb-3'
          style={{ borderBottom: '2px solid #ce8d16', display: 'inline-block' }}
        >
          Industrial Salt
        </h2>
        <div className='row'>
          <div className='col-md-4 offset-md-1'>
            <img
              className='img-fluid img-thumbnail'
              src={IndustrialSaltimg}
              alt='Industrial Salt'
              title='Industrial Salt – Egypt Origin'
            />
          </div>
          <div className='col-md-6 offset-md-1  d-flex align-items-center justify-content-center'>
            <div className='salt-content'>
              <h4>Industrial Salt – Egypt Origin</h4>
              <p>From our new in Siwa :</p>
              <ul>
                <li>We process the highest quality</li>
                <li>Rock Salt Industrial Use</li>
                <li>NaCl : Up to 99.8%</li>
                <li>Moisture : 1%</li>
              </ul>
              <NavLink to='/Contact' className='card-link'>
                Contact us for more details.
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialSalt;
