import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const NavItems = props => {
  return (
    <ul className={classes.NavItems}>
      <NavItem link="/" exact>Home</NavItem>
      <NavItem link="/products">Products</NavItem>
      <NavItem link="/about">About</NavItem>
      <NavItem link="/contact">Contact</NavItem>
    </ul>
  );
}

export default NavItems;