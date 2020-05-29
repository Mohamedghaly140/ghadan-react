import React from 'react';
import classes from './Logo.module.css';
import { NavLink } from 'react-router-dom';
import burgerLogo from '../../assets/images/ghadan-logo.png';

const Logo = props => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <NavLink exact to='/'>
        <img src={burgerLogo} alt='The Burger Builder' />
      </NavLink>
    </div>
  );
};

export default Logo;
