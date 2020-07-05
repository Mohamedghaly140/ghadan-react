import React from 'react';

import SolarSaltimg from '../../../assets/images/rock_salt/Solar_Salt.jpg';

const SolarSalt = () => {
  return (
    <div className='solar-salt py-5'>
      <div className='container py-2'>
        <h2
          className='mb-4 pb-3'
          style={{ borderBottom: '2px solid #ce8d16', display: 'inline-block' }}
        >
          Solar Salt
        </h2>
        <div className='row'>
          <div className='col-md-4 offset-md-1'>
            <img
              class='card-img-top img-fluid'
              src={SolarSaltimg}
              alt='Solar Salt'
              title='Solar Salt - Egypt Origin'
            />
          </div>
          <div className='col-md-6 offset-md-1'>
            <div className='slat-content'>
              <h4 class='card-title'>Solar Salt - Egypt Origin</h4>
              <p class='card-text'>
                Solar Salt for Deicing
                <ul>
                  <li>Grade A: NaCl 98%</li>
                  <li>Grade B: NaCl 96%</li>
                  <li>Grad C: NaCl 90-94%</li>
                </ul>
              </p>
              <a href='#' class='card-link'>
                Contact us for more details.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarSalt;
