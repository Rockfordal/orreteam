import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

class MyNavbar extends React.Component {
    render() {
        return (
        <Navbar brand='React Materialize OrientDB' right>
          <NavItem className="active" href='#/cars'>Bilar</NavItem>
          <NavItem href='#/garages'>Garage</NavItem>
        </Navbar>
        )
    }
}

export default MyNavbar
