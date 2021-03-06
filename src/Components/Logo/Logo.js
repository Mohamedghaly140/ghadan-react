import React from 'react';
import classes from './Logo.module.css';
import burgerLogo from '../../assets/images/ghadan-logo.png';

const Logo = props => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={burgerLogo} alt='Ghadan Company Rock Salt' style={{width: props.width}} />
    </div>
  );
};

export default Logo;
