import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import {Link} from 'react-router';

class MyNavbar extends React.Component {
    render() {
        return (
          <div>
        <Navbar brand='React Materialize OrientDB' right>
          <NavItem className="active" href='#/cars'>Bilar</NavItem>
          <NavItem href='#/garage'>Garage</NavItem>
          </Navbar>
           {this.props.children}
          </div>
        ) } }

export default MyNavbar
