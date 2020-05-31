import React from 'react';
import classes from './SideDrawer.module.css';

import Aux from '../../../hoc/Auxiliray';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import BackDrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  let attachedClass = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClass = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed}/>
      <div className={attachedClass.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav className={classes.MobileOnly}>
          <NavItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
