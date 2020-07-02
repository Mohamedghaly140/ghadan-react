import React from 'react';

import UERAimg from '../../../assets/images/Fertilizers/Phosphate/UREA/UREA.jpg';
import UERAPDF from '../../../assets/images/Fertilizers/Phosphate/UREA/UREA MSDS.pdf';

const UERA = () => {
  return (
    <div className='urea'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9' style={{ margin: 'auto' }}>
            <h1>UREA</h1>
            <div className='row'>
              <div className='col-md-9'>
                <p>
                  Urea is the most important nitrogenous fertilizer in the
                  country because of its high N content (46%N). Besides its use
                  in the crops, it is used as a cattle feed supplement to
                  replace a part of protein requirements. It has also numerous
                  industrial uses notably for the production of plastics.
                  Presently all the Urea manufactured in the country is Neen
                  coated.
                </p>
              </div>
              <div className='col-md-3'>
                <img
                  src={UERAimg}
                  alt='Rock Salt Egypt'
                  title='UREA'
                  className='img-fluid img-thumbnail'
                />
              </div>
            </div>

            <ul>
              <h2>Application</h2>
              <li>Store separately from ammonium nitrate.</li>
              <li>Don’t use small, fast-moving augers to move the Urea.</li>
              <li>
                Don’t exceed a spreading width of 50 feet when urea is applied.
              </li>
              <li>Don’t place urea in direct contact with corn seed.</li>
              <li>
                Keep rates of nitrogen applied together with small grain in the
                drill to 10 pounds on dry soils and 20 pounds when soil is
                moist.
              </li>
              <li>
                Apply urea on sod crops when atmosphere temperature is below 60
                degrees Fahrenheit.
              </li>
              <li>
                When broadcasting urea on soils of high pH (above 7.5),
                incorporate the material into the soil as soon as possible.
              </li>
            </ul>
            <hr />
            <ul>
              <h2>Advantages</h2>
              <li>
                You can apply urea to the soil as a solid, solution or, for
                certain crops, a foliar spray.
              </li>
              <li>Usage involves little or no fire or explosion hazard.</li>
              <li>
                Urea’s high analysis – 46 percent N – helps reduce handling,
                storage, and transportation costs over other dry N forms.
              </li>
              <li>
                Urea manufacturing releases few pollutants to the environment.
              </li>
              <li>
                When properly applied, it results in crop yield increases equal
                to other forms of nitrogen.
              </li>
            </ul>
            <hr />
            <ul>
              <h2>Specifications Crops</h2>
              <li>Formula : (NH4)2HPO4</li>
              <li>Grade : NP 18:46</li>
              <li>N: 46%</li>
              <li>Biuret : 1.5 % </li>
              <li>pH &lt; 6.0–7.2</li>
              <li>Moisture : 1%</li>
              <li>Granule Strength : MPa min. 6</li>
              <li>Granule composition ≥90% Ø1–2.8 mm IS sieve</li>
            </ul>
            <p>Safety Data Sheet</p>
            <div className='attach'>
              <a href={UERAPDF}>
                <h3>
                  MATERIAL SAFTEY DATA SHEET (MSDS) <strong>Urea</strong>
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UERA;
