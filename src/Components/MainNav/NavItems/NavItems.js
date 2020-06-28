import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';
import NavItemDrop from './NavItem/NavItemDrop';
import DropDownButton from '../../UI/Button/DropDownButton';
import DropDownFertilizers from '../../UI/Button/DropDownFertilizers/DropDownFertilizers';

const NavItems = props => {
  return (
    <ul className={classes.NavItems}>
      <NavItem link="/" exact>Home</NavItem>
      <NavItemDrop>
        <DropDownButton title="Salt" />
      </NavItemDrop>
      <NavItemDrop>
        <DropDownFertilizers title="Fertilizers" />
      </NavItemDrop>
      <NavItem link="/About">About</NavItem>
      <NavItem link="/Contact">Contact</NavItem>
    </ul>
  );
}

export default NavItems;