import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RockSaltImg from '../../../assets/images/rock/rock-salt.jpeg';
import classes from './Story.module.css';

import StoryLinks from './StoryLinks';

const Story = () => {
  return (
    <div className={classes.RockSalt}>
      <Container>
        <Row>
          <Col sm={12} md={9} lg={9}>
            <h3>Egyptian Rock Salt (Siwa Salt) Story &#58;</h3>
            <p>
              Ghadan Company is the entity who discovered the huge rock salt
              deposits in the Western Desert in Matrouh, specifically near the
              Siwa salt lakes; and Ghadan was the first company to mine and
              process rock salt in Egypt. Ghadan Started the First shipment of
              Siwa Rock Salt in 2011 before any other company. Egypt became
              among the main suppliers countries of deicing rock salt to the
              USA, because the huge discovery, operations, and branding of
              Ghadan made the Egyptian rock salt a preferable source, Ghadan
              distinguished the Egyptian rock salt calling and promoting it as
              Siwa salt. Siwa salt also made Ghadan as the reliable name amongst
              the salt companies in Egypt.
            </p>
            <p>
              Ghadan supplies are up to 1.50M Metric tons of various salt
              products raw salt, coarse salt, deicing salt, edible salt, salt
              for water softening.
            </p>
            <p>
              Through its sub diaries and facilities, Ghadan supplies bulk salt
              also bagged salt, Through a A-Z well-controlled process, which
              guarantees constant quality and swift performance.
            </p>
            <p>In brief, Ghadan is where to buy rock salt.</p>
            <h3>Learn More</h3>
            <StoryLinks />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <img className="img-thumbnail" src={RockSaltImg} alt="Rock Salt" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Story;