import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './RockSalt.module.css';
import Img1 from '../../../assets/images/rocksalt11.jpg';
import Img2 from '../../../assets/images/rocksalt2.jpg';
import Img3 from '../../../assets/images/rocksalt3.jpg';

const RockSalt = () => {
  return (
    <div className={classes.ProductRock}>
      <Container>
        <div className='rocksalt'>
          <div className='siwa-rock'>
          <h2>SIWA ROCK SALT FROM EGYPT</h2>
            <section id='sec1'>
              <Row>
                <Col md={9}>
                  <p>
                    What is <strong>“SIWA ROCK SALT”</strong> ? Firstly, we have
                    to stand for the facts which made{' '}
                    <a href='index.html'>ROCK SALT</a> as a Global product
                    contributing in the creation of what had been called{' '}
                    <strong>“SALT BUSINESS”</strong>, the answer is{' '}
                    <strong>“SNOW”</strong>, snow is the biggest climatic
                    problem facing North America and most of European countries,
                    these countries have been obligated to face the snow
                    problems.
                  </p>
                </Col>
                <Col md={3}>
                  <img
                    className='img-fluid img-thumbnail'
                    src={Img1}
                    alt='Rock Salt'
                    title='Rock Salt'
                  />
                </Col>
              </Row>
            </section>
            <section id='sec2'>
              <Row>
                <Col md={3}>
                  <img
                    className='img-fluid img-thumbnail'
                    src={Img2}
                    alt='Rock Salt'
                    title='Rock Salt'
                  />
                </Col>
                <Col md={9}>
                  <p>
                    <strong>ROCK SALT</strong> is considered as the most
                    inexpensive and effective <strong>DEICER</strong> for snow
                    and used worldwide for <strong>SNOW REMOVAL</strong>, and
                    that enables some entrepreneurs to startup their{' '}
                    <strong>BUSINESS in SALT</strong>, the legalizations and
                    lows have controlled the{' '}
                    <a href=''>specification and quality</a> of imported{' '}
                    <strong>SALT</strong>, so salt <strong>BUYERS</strong> have
                    to look for the best quality, effective and inexpensive{' '}
                    <strong>SALT</strong>, salt used for snow removal is
                    classified according to the composition as{' '}
                    <a href='../How-Is-the-Rock-Salt-Mined'>
                      ROCK SALT or MARINE SALT
                    </a>
                    , After period of studying, investigation and analysis it
                    was clear that <a href='index'>ROCK SALT</a> is better and
                    more profitable than <strong>MARINE SALT</strong>.
                  </p>
                </Col>
              </Row>
            </section>
            <section id='sec3'>
              <Row>
                <Col md={9}>
                  <p>
                    So why has to use <a href='index.html'>SIWA ROCK SALT</a>,
                    Egypt has become one of the most{' '}
                    <strong>SALT SUPPLIER</strong> in the world after the salt
                    exploration and foundation in <strong>SIWA OASIS</strong>,
                    the nature of <strong>SIWA</strong> environment had played a
                    significant role in ranking the{' '}
                    <a href='rock salt/index'>ROCK SALT</a> mined from it as one
                    of the purest salt products around the world, at economical
                    cost that makes it competitive in price and quality.
                  </p>
                </Col>
                <Col md={3}>
                  <img
                    className='img-fluid img-thumbnail'
                    src={Img3}
                    alt='Rock Salt'
                    title='Rock Salt'
                  />
                </Col>
              </Row>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RockSalt;
