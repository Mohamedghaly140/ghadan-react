import React from 'react';
import { Col } from 'react-bootstrap';
import classes from './ContactUs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  return (
    <Col md={4}>
      <div>
        <h4 className={classes.FooterHeading}>CONTACT US</h4>
        <ul className={classes.ListUnstyled}>
          <li>
            <FontAwesomeIcon icon={faPhoneAlt} /> <span>+2 010 000 73381</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> &nbsp;{' '}
            <span>info@ghadan.co</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;{' '}
            <span>1st Kafrawy st. New Demitta, Demitta, Egypt</span>
          </li>
        </ul>
        <div className={classes.Icons}>
          <span>
            <a
              href='https://www.facebook.com/ghadan.co/?ref=br_rs'
              target='_blank' rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </span>
          <span>
            <a href='https://twitter.com/Salt_from_Egypt' target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </span>
          <span>
            <a
              href='https://www.linkedin.com/company/egypt-rock-salt-ghadan/'
              target='_blank' rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ContactUs;
