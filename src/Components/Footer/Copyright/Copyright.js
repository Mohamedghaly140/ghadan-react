import React from 'react';
import classes from './Copyright.module.css';

const Copyright = () => {
  return (
    <div className={classes.Copyright}>
      <p>
        Copyright &copy; 2020 All rights reserved |{' '}
        <a href="/">
          <span>Ghadan</span>
        </a>
      </p>
    </div>
  );
};

export default Copyright;
