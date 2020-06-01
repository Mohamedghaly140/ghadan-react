import React from 'react';
import { Container, Row } from 'react-bootstrap';
import classes from './Footer.module.css';
import AboutSection from './AboutSection/AboutSection';
import Navigations from './Navigations/Navigations';
import ContactUs from './ContactUs/ContactUs';
import Copyright from './Copyright/Copyright';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <Container>
        <Row>
          <AboutSection />
          <Navigations />
          <ContactUs />
        </Row>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
