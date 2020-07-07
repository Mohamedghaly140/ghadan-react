import React from 'react';

import DAPimg from '../../../assets/images/Fertilizers/Phosphate/DAP/DAP.jpg';

import SugerBeet from '../../../assets/images/Fertilizers/crops/DAP/sugar-beet.jpg';
import PerennialGrasses from '../../../assets/images/Fertilizers/crops/DAP/Perennial grasses.jpg';
import GrainCorn from '../../../assets/images/Fertilizers/crops/DAP/Grain corn.jpg';
import SilageCorn from '../../../assets/images/Fertilizers/crops/DAP/Silage corn.jpg';
import Oats from '../../../assets/images/Fertilizers/crops/DAP/Oats.jpg';
import Rye from '../../../assets/images/Fertilizers/crops/DAP/Rye.jpg';
import Barley from '../../../assets/images/Fertilizers/crops/DAP/Barley.jpg';
import Potatoes from '../../../assets/images/Fertilizers/crops/DAP/Potatoes.jpeg';
import Sunflower from '../../../assets/images/Fertilizers/crops/DAP/Sunflower.jpg';
import Soybeans from '../../../assets/images/Fertilizers/crops/DAP/Soybeans.jpg';
import Rapeseed from '../../../assets/images/Fertilizers/crops/DAP/Rapeseed.jpg';
import Wheat from '../../../assets/images/Fertilizers/crops/DAP/Wheat.jpeg';

import AspectsPDF from '../../../assets/images/Fertilizers/Phosphate/DAP/Aspects DAP standard-converted.pdf';
import GDAP from '../../../assets/images/Fertilizers/Phosphate/DAP/G-DAP  MSDS-converted Ghadan.pdf';

const DAP = () => {
  return (
    <div className='dap'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9' style={{ margin: 'auto' }}>
            <h1>DAP</h1>
            <div className='row'>
              <div className='col-md-9'>
                <p>( DI-AMMONIUM PHOSPHATE ) (NP 18:46)</p>
                <p>
                  Granular highly concentrated nitrogen-phosphorous fertilizer.
                  The values of the nitrogen and the phosphorous 18-46 %
                  increase the resistance of the plants to any unfavorable
                  conditions of the environment (drought, cold/frost). They also
                  increase the resistance of the latter to various diseases.
                  Moreover, high phosphorous content helps the accumulation of
                  sugar in the roots and in the fruits.
                </p>
              </div>
              <div className='col-md-3'>
                <img
                  src={DAPimg}
                  alt='DAP'
                  className='img-fluid img-thumbnail'
                />
              </div>
            </div>

            <ul>
              <h2>Application</h2>
              <li>Period: Autumn, Spring</li>
              <li>Method: Broadcasting, During planting (of tubers)</li>
              <li>Soils: All soils</li>
            </ul>
            <hr />
            <ul>
              <h2>Advantages</h2>
              <li>Optimally suitable fertilizer for winter cereals</li>
              <li>Ensures good root system growth</li>
              <li>High cropping</li>
              <li>High-quality plant products</li>
            </ul>
            <hr />
            <ul>
              <h2>Specifications</h2>
              <li>Formula : (NH4)2HPO4</li>
              <li>Grade : NP 18:46</li>
              <li>P2O5 : 46% (20% P)</li>
              <li>N: 18%</li>
              <li>S: 12 %</li>
              <li>pH &lt; 6.0–7.2</li>
              <li>Granule Strength : MPa min. 6</li>
              <li>Granule composition ≥95% Ø1–6 mm</li>
            </ul>
            <hr />
            <h2>Crops</h2>
            <div className='crops'>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={SugerBeet}
                    className='figure-img img-fluid rounded'
                    alt='Sugar beet'
                  />
                </div>
                <figcaption className='figure-caption'>Sugar beet.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={PerennialGrasses}
                    className='figure-img img-fluid rounded'
                    alt='Perennial grasses'
                  />
                </div>
                <figcaption className='figure-caption'>
                  Perennial grasses.
                </figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={GrainCorn}
                    className='figure-img img-fluid rounded'
                    alt='Grain corn'
                  />
                </div>
                <figcaption className='figure-caption'>Grain corn.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={SilageCorn}
                    className='figure-img img-fluid rounded'
                    alt='Silage corn'
                  />
                </div>
                <figcaption className='figure-caption'>Silage corn.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Oats}
                    className='figure-img img-fluid rounded'
                    alt='Oats'
                  />
                </div>
                <figcaption className='figure-caption'>Oats.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Rye}
                    className='figure-img img-fluid rounded'
                    alt='Rye'
                  />
                </div>
                <figcaption className='figure-caption'>Rye.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Barley}
                    className='figure-img img-fluid rounded'
                    alt='Barley'
                  />
                </div>
                <figcaption className='figure-caption'>Barley.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Potatoes}
                    className='figure-img img-fluid rounded'
                    alt='Potatoes'
                  />
                </div>
                <figcaption className='figure-caption'>Potatoes.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Sunflower}
                    className='figure-img img-fluid rounded'
                    alt='Sunflower'
                  />
                </div>
                <figcaption className='figure-caption'>Sunflower.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Soybeans}
                    className='figure-img img-fluid rounded'
                    alt='Soybeans'
                  />
                </div>
                <figcaption className='figure-caption'>Soybeans.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Rapeseed}
                    className='figure-img img-fluid rounded'
                    alt='Rapeseed'
                  />
                </div>
                <figcaption className='figure-caption'>Rapeseed.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Wheat}
                    className='figure-img img-fluid rounded'
                    alt='Wheat'
                  />
                </div>
                <figcaption className='figure-caption'>Wheat.</figcaption>
              </figure>
            </div>
            <h3>Safety Data Sheet</h3>
            <div className='attach'>
              <a href={AspectsPDF}>
                <h3>Stander Aspects of Granular Di-ammonium Phosphate G-DAP</h3>
              </a>
            </div>
            <div className='attach'>
              <a href={GDAP} target='_blank' rel='noopener noreferrer'>
                <h3>
                  MATERIAL SAFTEY DATA SHEET (MSDS) Granular Di-ammonium
                  Phosphate (G-DAP)
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAP;
