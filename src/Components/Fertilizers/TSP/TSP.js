import React from 'react';

import TSPimg from '../../../assets/images/Fertilizers/Phosphate/TSP/TSP.jpg';

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

import SSPPDF from '../../../assets/images/Fertilizers/Phosphate/SSP/Ghadan_SSPconverted.pdf';

const SSP = () => {
  return (
    <div className='ssp'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9' style={{ margin: 'auto' }}>
            <h1>TSP</h1>
            <div className='row'>
              <div class='col-md-9'>
                <p>Triple superphosphate (CaP 15:45)</p>
                <p>
                  The TSP belongs to the group of the water-soluble and
                  universal phosphorous fertilizers. Its perfect physical and
                  chemical properties do make it applicable for the vast amounts
                  of different soils and crops: rise, roses, wheat, tomatoes,
                  etc. Water and citrate soluble P2O5: min 45.5%; water-soluble
                  P2O5: min 43%. We are selling it in 50 kg bags and in bulk in
                  containers.
                </p>
                <p>
                  It is appropriate for feeding all the types of soils that have
                  рН within the limits of weakly acidic to alkaline medium.
                </p>
              </div>
              <div class='col-md-3'>
                <img
                  src={TSPimg}
                  title='TSP'
                  alt='Rock Salt Egypt'
                  class='img-fluid img-thumbnail'
                />
              </div>
            </div>

            <ul>
                <h2>Application</h2>
                <li>Weak and abnormally developed root system.</li>
                <li>Small-sized and curled at edges blue-green or green leaves with bronze or violet shade.</li>
                <li>The development, fluorescence, and ripening of the fruits are inhibited.</li>
                <li>Low resistance to frost and cold.</li>
                <li>The intensely reduced yield of poor quality.</li>
            </ul>
            <hr />
            <ul>
                <h2>Advantages</h2>
                <li>It accelerates the growth of the root system of the young plants.</li>
                <li>It shortens the time period of youthful infertility of young grapevines and fruit crops, it accelerates the fluorescence and the ripening of the fruits.</li>
                <li>It increases the resistance of the plants to freezing and drought.</li>
                <li>It performs a decisive role in the formation of the quality of the production of cereals, vegetable, fruit, technical and oil-bearing crops.</li>
                <li>It eliminates the negative influence of one-sided nitrogen fertilization.</li>
                <li>Plants derive most phosphorus from the soil in the middle of their vegetation when the main volume of vegetative mass is formed and the production is created.</li>
            </ul>
            <hr />
            <ul>
                <h2>Specifications Crops</h2>
                <li>Formula : [Ca(H₂PO₄)₂ .H₂O]</li>
                <li>Grade : CaP 15:45</li>
                <li>P2O5 : 45%</li>
                <li>Ca: 15 %</li>
                <li>Moisture : 4.0%</li>
                <li>Hardiness : 3kg Min</li>
                <li>pH &lt; 1–3</li>
                <li>Granule Strength : 1.5-3.5</li>
                <li>Granule composition	≥95% Ø1–5 mm</li>
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
            <p>Safety Data Sheet</p>
            <div className='attach'>
              <a href={SSPPDF} target='_blank' rel='noopener noreferrer'>
                <h3>SAFETY DATA SHEET</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSP;
