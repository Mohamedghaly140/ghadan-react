import React from 'react';
import { NavLink } from 'react-router-dom';
import './SGS.css';

import QualityControl from '../../../assets/images/slider/Third Party Quality Control.jpg';
import Certificate from '../../../assets/images/certificate.jpg';

const SGSAnalysis = () => {
    return (
        <section>
            <div className="container">
                <div className="rock-page3">
                    <div className="sgs">
                        <div className="row">
                            <div className="col-md-9" style={{margin: 'auto'}}>
                                <h2>ROCK SALT Analysis By SGS</h2>
                                <img className="img-fluid img-thumbnail" src={QualityControl} alt="Rock Salt" style={{marginTop: '1.5rem'}} />
                                <ul style={{margin: '3rem auto'}}>
                                    <li> <a href="Rock-Salt-Halite.html">NaCl</a> : &lt; 98%</li>
                                    <li>Moisture : &gt; 1.5</li>
                                    <li> <a href="rock salt/index.html">Applications</a> : Industrial use, Deicing, as Raw Material for Edible Salt.</li>
                                    <li> <a href="How-Is-the-Rock-Salt-Mined.html">Standards</a> : ASTM D632 Type 1, BS 3247 … etc.</li>
                                </ul>
                                <hr />
                                <img className="img-fluid img-thumbnail" src={Certificate} alt="certificate" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SGSAnalysis;
