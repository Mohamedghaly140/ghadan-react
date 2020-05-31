import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Navbar = styled.nav`
  background-color: #333;
`;

const Toolbar = props => {
  return (
    <Navbar>
      <Container>
        <header className={classes.Toolbar}>
          <DrawerToggle clicked={props.drawerToggleClicked} />
          <div className={classes.Logo}>
            <NavLink exact to='/'>
              <Logo />
            </NavLink>
          </div>
          <nav className={classes.DesktopOnly}>
            <NavItems />
          </nav>
        </header>
      </Container>
    </Navbar>
  );
};

export default Toolbar;
