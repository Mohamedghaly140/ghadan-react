import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Button.module.css';

const ListItem = props => {
  return (
    <li className={classes.ListElement}>
      <NavLink exact={props.exact} to={`${props.dir}${props.link}`} activeClassName={classes.active}>{props.children}</NavLink>
    </li>
  );
}

export default ListItem