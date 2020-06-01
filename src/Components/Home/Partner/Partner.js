import React from 'react';
import classes from './Partner.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import LogoPartner from '../../../assets/images/Member_Logo.jpg';

const Partner = props => {
  return (
    <div className={classes.Aboutus}>
      <Container>
        <Row>
          <Col md={12} lg={4}>
            <img
              src={LogoPartner}
              className='img-fluid'
              alt='Ghadan Company For Rock Salt'
              title='SIMA membership'
            />
          </Col>
          <Col md={12} lg={8}>
            <div className={classes.Content}>
              <h2>About SIMA</h2>
              <p>
                The Snow &amp; Ice Management Association is a North American trade
                association for snow &amp; ice removal professionals. SIMA empowers
                snow management for success. Ghadan is registered as a
                contractor/ manufacturer of rock deicing rock salt in SIMA
                membership list.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Partner;