import React from 'react';
import { Col } from 'react-bootstrap';
import classes from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <Col md={5}>
      <h4 className={classes.FooterHeading}>About Ghadan</h4>
      <p className={classes.FooterP}>
        Ghadan Company Started in 2009 as a promoting marketing organization in
        Egypt, and in short time invaded many of the business regions, specially
        the minerals and fuel business. We developed our business of salt
        rapidly, and succeeded to be among the well-known Salt Companies in
        Egypt, rock salt, marine salt, siwa salt, Egyption rock salt.
      </p>
    </Col>
  );
};

export default AboutSection;