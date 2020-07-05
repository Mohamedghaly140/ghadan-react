import React from 'react';
import { NavLink } from 'react-router-dom';
import './RockSaltMined.css';

import RockSalt4 from '../../../assets/images/rocksalt4.jpg';
import RockSalt5 from '../../../assets/images/rocksalt5.jpg';

const RockSaltMined = () => {
    return (
        <section>
        <div className="container">
            <div className="rock-mined">
                <div className="mined">
                    <div className="row">
                        <div className="col-md-9" style={{margin: 'auto'}}>
                            <h2>How Is the Rock Salt Mined?</h2>
                            <p>These mines vary in depth from 100 meters to a mile or more in <a href="rock salt/index.html">SIWA Oasis</a>. the diggers are used for digging up roads,  which bore into the salt. The lumps are then taken to a crushing and screening plant, Before storage, the salt is treated with an anti-caking agent which will stop the pieces coagulating. This ensures that it can be held in local storage depots, ready for use as soon as the bad weather sets in USA, Canada &amp; Europe.</p>
                        </div>
                        <div className="col-md-9" style={{margin: 'auto'}}>
                            <img className="img-fluid img-thumbnail" src={RockSalt4} alt="Rock Salt" />
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="mined">
                    <div className="row">
                        <div className="col-md-9" style={{margin: 'auto'}}>
                            <h2>Processes on ROCK SALT</h2>
                            <p>After <a href="rock salt/index.html">Extracting ROCK SALT</a> from mines in SIWA oasis, SIWA’s environment plays a role in improving the salt quality, not only the clean environment due to leakage of human industrial activities, but also the high temperature are the most advantages of this place, so <a href="rock salt/index.html">ROCK SALT</a> is left in this climate for more drying process and then transported to our flat warehouses in <strong>Damietta</strong> and <strong>Port Said</strong> where the crushing process is implemented to fit all the required specifications of our global customers.</p>
                        </div>
                        <div className="col-md-9" style={{margin: 'auto'}}>
                            <img className="img-fluid img-thumbnail" src={RockSalt5} alt="Rock Salt" />
                        </div>
                        <div className="col-md-9" style={{margin: 'auto'}}>
                            <p style={{marginTop: '1.5rem'}}>
                                Quality Assurance is the best one of our strategies in growing our <mark>SALT</mark> business, we are co-operating with SGS Labs to make sure that we achieve our objective in satisfying our customers desire, the results of <a href="Rock-salt-analysis-SGS.html">SGS analyses</a> have matched <mark>ROCK SALT specification</mark> ordered by our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default RockSaltMined;
