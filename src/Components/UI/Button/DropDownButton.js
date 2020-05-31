import React from 'react';
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import ListItem from './ListItems';

const Button = props => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant=''
        id='dropdown-basic'
        style={{ color: '#FFF', outline: 'none' }}
      >
        {props.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <ListDrop>
          <ListItem link='/Rock-salt'>Rock salt</ListItem>
          <ListItem link='/Tablet-salt'>Tablet salt</ListItem>
          <ListItem link='/Edible-salt'>Edible salt</ListItem>
          <ListItem link='/Industrial-salt'>Industrial salt</ListItem>
          <ListItem link='/Solar-salt'>Solar salt</ListItem>
        </ListDrop>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Button;

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