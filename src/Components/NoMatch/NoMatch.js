import React from 'react';
import { Redirect } from 'react-router-dom';
import NotFound from '../../assets/notfound.svg';

const NoMatch = () => {
  return <Redirect to='/' />;
};

export default NoMatch;

// const pageStyle = {
//   height: '90vh',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center'
// }

// const imgStyle = {
//   width: '300px',
//   maxWidth: '70%'
// }

// <div style={pageStyle}>
//   <img style={imgStyle} src={NotFound} alt='Page Not Found 4040' />
//   <p style={{textTransform: 'capitalize', color: '#444', fontWeight: 'bold'}}>page you are looking for does not exist</p>
//   <NavLink to='/' exact>
//     <h3>Let's Go Home</h3>
//   </NavLink>
// </div>
