import React from 'react';
import classes from './About.module.css';
import Brand from '../../assets/images/ghadan-logo.png';

const About = () => {
  return (
    <div className={classes.AboutGhadan}>
        <div className="container">
            <div className="text-center">
                <img className="img-fluid" src={Brand} alt="Ghadan Company For Rock Salt" title="Ghadan Company For Rock Salt" />
            </div>
            <h2>About GHADAN</h2>
            <p><strong>GHADAN COMPANY</strong> was founded in 2009 as a marketing company in Egypt, and in short time invaded many of the business regions, specially the minerals with efficient performance in salt supply. We developed our business of salt rapidly, and succeeded to be among the well-known salt companies in Egypt, promoted our brand all over Europe, USA and Canada. As we are reliable producers of bulk salt, we have our own mine in the western desert in Egypt, one of the cleanest environments on the planet. We produce and supply very high quality salt with a capacity of 1000,000MT per year. We have the experience and facilities to supply to Europe, Canada and USA, with the aware that every market has its requirements and standards. So, we deal with orders separately, processing salt according buyer's options.</p>

            <p><strong>GHADAN</strong> succeeded to gain an international reputation as a reliable Egyptian salt supplier since 2011, when GHADAN discovered the immense salt deposit in Siwa Oasis in the Western Desert, GHADAN was the first company introduced to the global market Siwa Rock Salt. Committing many shipments over years, we supplied a constant quality that conforms ASTM D632 type 1.</p>

            <p>In 2016 <strong>GHADAN</strong> was one of three non-American companies that show and participate in the annual convention that started its first round in 1961. Also, GHADAN <span>CEO Mr. Ahmed Lotfy</span> has gained Winter Maintenance Supervisor Certificate during the convention.</p>
        </div>
    </div>
  );
}

export default About;