import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWarehouse,
  faClipboardList,
  faCube,
  faShippingFast,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Features = props => {
  return (
    <div style={features} className="text-center">
      <Container>
        <Row>
          <Col sm={6} md={6} lg={3}>
            <FeatIcon>
              <FontAwesomeIcon icon={faWarehouse} />
            </FeatIcon>
            <h3>Logistics</h3>
            <p>
              Efficient, swift, high control and convenient. We have our
              logistics facilities. bulk, packed or containerized, we can
              deliver anywhere.
            </p>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <FeatIcon>
              <FontAwesomeIcon icon={faClipboardList} />
            </FeatIcon>
            <h3>Quality Control</h3>
            <p>
              GHADAN is a client of SGS, the famous brand of third party survey
              services. We provide the quality test, and loading control
              according to buyer requirements , assuring quality and efficiency.
            </p>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <FeatIcon>
              <FontAwesomeIcon icon={faCube} />
            </FeatIcon>
            <h3>Packaging</h3>
            <p>
              Tell us what you need. GHADAN provides the packaging and private
              label services including design and printing.
            </p>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <FeatIcon>
              <FontAwesomeIcon icon={faShippingFast} />
            </FeatIcon>
            <h3>Shipping</h3>
            <p>
              We have our stevedoring company which is shipping 1,200,000 tons
              per year
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;

const features = {
  margin: '20px auto',
  padding: '30px 0'
};

const FeatIcon = styled.div`
  background-color: #333;
  color: #ce8d16;
  width: 70px;
  height: 70px;
  padding: 2px;
  margin: 0px auto 20px auto;
  text-align: center;
  font-size: 38px;
  border-radius: 50%;
`;
