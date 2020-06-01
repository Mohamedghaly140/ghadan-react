import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './Blog.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClock, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  return (
    <div className={classes.Services}>
      <Container>
        <div className='header text-center'>
          <h1 style={{color: '#ce8d16', textTransform: 'capitalize'}}>Rock Salt, the Purest in the Nature</h1>
          <p>
            Welcome our new product Rock Salt from Siwa Oasis, one of the
            highest qualities in the world. For more info and orders contact us.
          </p>
        </div>
        <Row className="text-center">
          <Col sm={12} md={6} lg={4}>
            <h3>
              <FontAwesomeIcon style={{color: '#ce8d16'}} icon={faCheckCircle} /> SGS Quality
              Tests
            </h3>
            <p>
              We are a regular client of SGS, the famous brand of survey
              services. We provide the quality test, and loading control
              according to buyer option. For old quality reports Contact us.
            </p>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <h3>
              <FontAwesomeIcon style={{color: '#ce8d16'}} icon={faClock} /> Mine and Storage Visits
            </h3>
            <p>
              Our potential respected clients are very welcomed to visit our
              Mine, Storage and the Loading Port, checking our logistic
              facilities and our products.
            </p>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <h3>
              <FontAwesomeIcon style={{color: '#ce8d16'}} icon={faHandshake} /> Partners not Buyers
            </h3>
            <p>
              Ghadan is looking for Partners not Buyers, once you are in a
              business with Ghadan, then you are one of Ghadan big Family. Feel
              secured and successful business advantages. We support you.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;