import React from 'react';
import classes from './NavItemDrop.module.css';

const NavItemDrop = props => {
  return (
    <li className={classes.NavItemDrop}>
      {props.children}
    </li>
  );
};

export default NavItemDrop;