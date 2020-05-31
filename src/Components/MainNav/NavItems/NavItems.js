import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';
import DropDown from '../../UI/Button/DropDownButton';

const NavItems = props => {
  return (
    <ul className={classes.NavItems}>
      <NavItem link="/" exact>Home</NavItem>
      <DropDown title="Products" />
      <NavItem link="/About">About</NavItem>
      <NavItem link="/Contact">Contact</NavItem>
    </ul>
  );
}

export default NavItems;