import React from 'react';

import RockSalt from '../../../assets/images/rocksalt1.jpg';

const RockSaltHalite = () => {
  return (
    <section>
      <div class='container py-5'>
        <div class='rock-page1'>
          <div class='rock-salt-halite'>
            <div class='row'>
              <div class='col-md-9' style={{ margin: 'auto' }}>
                <h2
                  className='mb-4 pb-3'
                  style={{
                    borderBottom: '2px solid #ce8d16',
                    display: 'inline-block',
                  }}
                >
                  Rock Salt (Halite)
                </h2>
                <p className='mt-1'>
                  Halite is the scientific name of ROCK SALT, the question is
                  “how is Rock Salt formed?”; it is true, ROCK SALT is formed
                  from SODIUM CHLORIDE, It's chemical formula is NaCl.
                </p>
              </div>
              <div class='col-md-9' style={{ margin: 'auto' }}>
                <img
                  class='img-fluid img-thumbnail'
                  src={RockSalt}
                  alt='Rock Salt'
                />
                <hr className='py-2 mt-5' />
              </div>
            </div>
          </div>
          <div class='rock-vs'>
            <div class='row'>
              <div class='col-md-9' style={{ margin: 'auto' }}>
                <h2>ROCK SALT vs SOLAR SALT:</h2>
                <p>
                  The most important factor which distinguishes ROCK SALT from
                  MARINE SALT is the appearance and mechanism of composition,
                  ROCK SALT forms isometric crystals and it is typically
                  colorless or white, but may also be other colors depending on
                  the amount and type of impurities contained within it.
                </p>
                <p>
                  The rock salt is found in beds of sedimentary evaporate
                  minerals. This is caused by large lakes and seas drying up.
                  These salt beds can be hundreds of meters deep.{' '}
                  <a href='Rock-salt-analysis-SGS.html'>ROCK SALT crystals</a>{' '}
                  form very quickly in some rapidly evaporating lakes.{' '}
                  <a href='rock salt/index.html'>SIWA in EGYPT</a> was covered
                  by inland seas over 200 million years ago which helped create
                  the{' '}
                  <a href='How-Is-the-Rock-Salt-Mined.html'>layers of salt</a>{' '}
                  that are mined today. When very hot temperatures in the area
                  evaporated the waters very slowly, they left large salt
                  deposits under the earth. Then through the long process of
                  geologic aging, the salt layers are covered with marine
                  sediments.
                </p>
                <p>
                  Unlike traditional rock salt, white marine salt is not mined
                  from underground. Instead it is harvested by evaporating sea
                  water, which leaves behind a cleaner product.
                </p>
                <p>
                  The color of <a href='rock salt/index.html'>ROCK SALT</a>{' '}
                  crystals is geologically influenced going from clear, to pink,
                  to dark brown.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RockSaltHalite;
