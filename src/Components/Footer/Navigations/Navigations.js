import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import classes from './Navigations.module.css';
import DropDownButton from '../../UI/Button/DropDownButton';

const Navigations = () => {
  return (
    <Col md={3}>
      <h4 className={classes.FooterHeading}>NAVIGATIONS</h4>
      <ul className={classes.ListUnstyled}>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li className='dropdown'>
          <DropDownButton title="Products" padding="0" />
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </Col>
  );
};

export default Navigations;
