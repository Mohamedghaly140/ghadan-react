import React from 'react';

import MAPimg from '../../../assets/images/Fertilizers/Phosphate/MAP/MAP.jpg';

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

import MAPPDF from '../../../assets/images/Fertilizers/Phosphate/MAP/Ghadan-103-SDS_Monoammonium-Phosphate-M.A.P.-converted.pdf';

const MAP = () => {
  return (
    <div className='map'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9' style={{ margin: 'auto' }}>
            <h1>MAP</h1>
            <div className='row'>
              <div className='col-md-9'>
                <p>Granular mono-ammonium phosphate (NP 12:52) (H1)</p>
                <p>
                  MAP is a highly concentrated nitrogen-phosphorous fertilizer
                  suitable for most types of soil and plants. It is normally
                  applied to the basic processing of the soil. It serves the
                  output increase as well as quality improvement.
                </p>
              </div>
              <div className='col-md-3'>
                <img
                  src={MAPimg}
                  alt='MAP'
                  className='img-fluid img-thumbnail'
                />
              </div>
            </div>

            <ul>
              <h2>Application (H2)</h2>
              <li>Period: autumn, spring</li>
              <li>Method: broadcasting, during sowing</li>
              <li>Soils: alkaline soils (рН (Н2О) &gt; 7.5)</li>
            </ul>
            <hr />
            <ul>
              <h2>Advantages</h2>
              <li>High cropping</li>
              <li>
                Ensures good root system growthBrewing barley Crops All crops
                Period Broadcasting MethodAlkaline soils (рН (Н2О) &gt; 7,5) Soils
                1–4 mm ≥95% pH 5.2 – 6.0strength Dose 6100 kg/ha Autumn Spring
                During sowing
              </li>
              <li>High-quality plant products</li>
            </ul>
            <hr />
            <ul>
              <h2>Specifications</h2>
              <li>Formula: NH4H2PO4</li>
              <li>Grade : NP 12:52</li>
              <li>Granule: ≥ 95% Ø 1-</li>
              <li>P2O5: 55%</li>
              <li>N: 11-12 %</li>
              <li>MgO: 0.1-0.6</li>
              <li>Water solubility: 370 g/L</li>
              <li>Solution PH : 5-5.5</li>
              <li>Granule strength: MPa min. 6</li>
              <li>composition: 4mm</li>
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
              <a href={MAPPDF} target='_blank' rel="noopener noreferrer">
                <h3>Safety Data Sheet Mono-ammonium Phosphate </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MAP;
