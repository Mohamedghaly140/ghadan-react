import React from 'react';

import SSPimg from '../../../assets/images/Fertilizers/Phosphate/SSP/SSP.jpg';

import coton from '../../../assets/images/Fertilizers/crops/SSP/coton.jpg';
import Sugarcane from '../../../assets/images/Fertilizers/crops/SSP/Sugarcane.jpg';
import Tobacco from '../../../assets/images/Fertilizers/crops/SSP/Tobacco.jpg';
import Isabgol from '../../../assets/images/Fertilizers/crops/SSP/Isabgol.jpg';
import Wheat from '../../../assets/images/Fertilizers/crops/SSP/Wheat.jpeg';
import rice from '../../../assets/images/Fertilizers/crops/SSP/rice.jpg';
import Maize from '../../../assets/images/Fertilizers/crops/SSP/Maize.jpeg';
import Bajra from '../../../assets/images/Fertilizers/crops/SSP/Bajra.jpg';
import Sorghum from '../../../assets/images/Fertilizers/crops/SSP/Sorghum.jpg';
import Groundnut from '../../../assets/images/Fertilizers/crops/SSP/Groundnut.jpg';
import Castor from '../../../assets/images/Fertilizers/crops/SSP/Castor.jpg';
import onion from '../../../assets/images/Fertilizers/crops/SSP/onion.jpg';
import Potato from '../../../assets/images/Fertilizers/crops/SSP/Potato.jpg';
import Tomato from '../../../assets/images/Fertilizers/crops/SSP/Tomato.jpg';
import Grape from '../../../assets/images/Fertilizers/crops/SSP/Grape.jpg';

import SSPPDF from '../../../assets/images/Fertilizers/Phosphate/SSP/Ghadan_SSPconverted.pdf';

const SSP = () => {
  return (
    <div className='ssp'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9' style={{ margin: 'auto' }}>
            <h1>SSP</h1>
            <div className='row'>
              <div className='col-md-9'>
                <p>Single superphosphate (CaP 20:18)</p>
                <p>
                  Single superphosphate (SSP) was the first commercial mineral
                  fertilizer and it led to the development of the modern plant
                  nutrient industry. This material was once the most commonly
                  used fertilizer, but other phosphorus (P) fertilizers have
                  largely replaced SSP because of its relatively low P content.
                  SSP can easily be produced on a small scale to meet regional
                  needs. Since SSP contains both monocalcium phosphate (MCP,
                  also called calcium dihydrogen phosphate) and gypsum, no
                  problems arise with phosphogypsum byproduct disposal unlike
                  the manufacture of other common P fertilizers.
                </p>
              </div>
              <div className='col-md-3'>
                <img
                  src={SSPimg}
                  alt='Rock Salt Egypt'
                  title='SSP'
                  className='img-fluid img-thumbnail'
                />
              </div>
            </div>

            <ul>
              <h2>Application</h2>
              <li>Period: Autumn, Spring</li>
              <li>Method: At the time of Sowing</li>
              <li>Soils: sulfur deficient soils</li>
            </ul>
            <hr />
            <ul>
              <h2>Advantages</h2>
              <li>
                SSP is one of the cheapest forms of phosphate &amp; Supplies sulfate
                sulfur and calcium
              </li>
              <li>
                The ratio of phosphorus and sulfur suits many crop and pasture
                needs. Both the phosphorus and sulfur are in readily available
                forms.
              </li>
              <li>
                It can be blended with other fertilizer products (except Urea &amp;
                DAP).
              </li>
              <li>
                It can be stored easily for long periods, without taking up
                moisture.
              </li>
              <li>
                It contains calcium and sulfur (mostly as gypsum) and helps keep
                soil in good shape by maintaining soil structure. SSP provides a
                balance of P, S, and Ca that mimics pasture growth requirements
                and is the best-balanced P, S, and Ca fertilizer for Australian
                pastures.
              </li>
            </ul>
            <hr />
            <ul>
              <h2>Specifications Crops</h2>
              <li>Formula: Ca(H₂PO4)₂</li>
              <li>Grade : CaP 20:18</li>
              <li>P2O5: 18% (7% P)</li>
              <li>Ca: 20%</li>
              <li>S: 12 %</li>
              <li>pH &lt; 2</li>
              <li>Appearance : Granulated solid</li>
              <li>Solubility Partially soluble in water</li>
              <li>Granule Strength : 3kg Min</li>
              <li>Granule composition ≥ 95% Ø2–5 mm</li>
            </ul>
            <hr />
            <h2>Crops</h2>
            <div className='crops'>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={coton}
                    className='figure-img img-fluid rounded'
                    alt='Cotton'
                  />
                </div>
                <figcaption className='figure-caption'>Cotton.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Sugarcane}
                    className='figure-img img-fluid rounded'
                    alt='Sugarcane'
                  />
                </div>
                <figcaption className='figure-caption'>Sugarcane.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Tobacco}
                    className='figure-img img-fluid rounded'
                    alt='Tobacco'
                  />
                </div>
                <figcaption className='figure-caption'>Tobacco.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Isabgol}
                    className='figure-img img-fluid rounded'
                    alt='Isabgul'
                  />
                </div>
                <figcaption className='figure-caption'>Isabgul.</figcaption>
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
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={rice}
                    className='figure-img img-fluid rounded'
                    alt='Rice'
                  />
                </div>
                <figcaption className='figure-caption'>Rice.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Maize}
                    className='figure-img img-fluid rounded'
                    alt='Maize'
                  />
                </div>
                <figcaption className='figure-caption'>Maize.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Bajra}
                    className='figure-img img-fluid rounded'
                    alt='Bajra'
                  />
                </div>
                <figcaption className='figure-caption'>Bajra.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Sorghum}
                    className='figure-img img-fluid rounded'
                    alt='Sorghum/Jowar'
                  />
                </div>
                <figcaption className='figure-caption'>
                  Sorghum/Jowar.
                </figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Groundnut}
                    className='figure-img img-fluid rounded'
                    alt='Groundnut'
                  />
                </div>
                <figcaption className='figure-caption'>Groundnut.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Castor}
                    className='figure-img img-fluid rounded'
                    alt='Castor'
                  />
                </div>
                <figcaption className='figure-caption'>Castor.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={onion}
                    className='figure-img img-fluid rounded'
                    alt='Onion'
                  />
                </div>
                <figcaption className='figure-caption'>Onion.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Potato}
                    className='figure-img img-fluid rounded'
                    alt='Potato'
                  />
                </div>
                <figcaption className='figure-caption'>Potato.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Tomato}
                    className='figure-img img-fluid rounded'
                    alt='Tomato'
                  />
                </div>
                <figcaption className='figure-caption'>Tomato.</figcaption>
              </figure>
              <figure className='figure'>
                <div className='image'>
                  <img
                    src={Grape}
                    className='figure-img img-fluid rounded'
                    alt='Grape'
                  />
                </div>
                <figcaption className='figure-caption'>Grape.</figcaption>
              </figure>
            </div>
            <p>Safety Data Sheet</p>
            <div className='attach'>
              <a href={SSPPDF}>
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
