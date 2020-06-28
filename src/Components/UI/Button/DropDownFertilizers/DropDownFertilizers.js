import React from 'react';
import Radium from 'radium';
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import ListItem from '../ListItems';

const ListDrop = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 0;
  margin: 0;
`;

const DropDownButton = props => {
  const btnStyle = {
    color: '#FFF',
    outLine: 'none',
    border: 'none',
    padding: props.padding,

    '@media (max-width: 767px)': {
      color: '#8f5c2c',
      fontWeight: '500'
    }
  }

  return (
    <Dropdown style={btnStyle}>
      <Dropdown.Toggle
        variant='transparent'
        id='dropdown-basic'
        style={btnStyle}
      >
        {props.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <ListDrop>
          <ListItem dir='/Fertilizers' link='/SSP'>SSP</ListItem>
          <ListItem dir='/Fertilizers' link='/TSP'>TSP</ListItem>
          <ListItem dir='/Fertilizers' link='/MAP'>MAP</ListItem>
          <ListItem dir='/Fertilizers' link='/DAP'>DAP</ListItem>
          <ListItem dir='/Fertilizers' link='/UERA'>UERA</ListItem>
        </ListDrop>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Radium(DropDownButton);