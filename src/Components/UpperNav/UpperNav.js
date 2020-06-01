import React from 'react';
import { Container } from 'react-bootstrap';
import Radium from 'radium';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  UpperNavbar,
  ContactSpan,
  IconsSpan,
  IconsSpanA,
  Contact,
  Icons
} from './styleUpperNav';

const UpperNav = props => {
  const IconsStyle = {
    color: '#ce8d16',
    ':hover': {
      transform: 'rotate(360deg)',
      transition: '.5s ease'
    }
  }

  return (
    <nav>
      <Container>
        <UpperNavbar>
          <Contact>
            <FontAwesomeIcon icon={faPhoneAlt} />{' '}
            <ContactSpan>+2 010 000 73381</ContactSpan>,&nbsp;
            <FontAwesomeIcon icon={faEnvelope} />{' '}
            <ContactSpan>info@ghadan.co</ContactSpan>
          </Contact>
          <Icons>
            <IconsSpan>
              <IconsSpanA
                href='https://www.facebook.com/ghadan.co/?ref=br_rs'
                target='_blank'>
                <FontAwesomeIcon icon={faFacebookF} style={IconsStyle} />
              </IconsSpanA>
            </IconsSpan>
            <IconsSpan>
              <IconsSpanA href='https://twitter.com/Salt_from_Egypt' target='_blank'>
              <FontAwesomeIcon icon={faTwitter} style={IconsStyle} />
              </IconsSpanA>
            </IconsSpan>
            <IconsSpan>
              <IconsSpanA
                href='https://www.linkedin.com/company/egypt-rock-salt-ghadan/'
                target='_blank'>
                <FontAwesomeIcon icon={faLinkedinIn} style={IconsStyle} />
              </IconsSpanA>
            </IconsSpan>
          </Icons>
        </UpperNavbar>
      </Container>
    </nav>
  );
};

export default Radium(UpperNav);