import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

class MyNavbar extends React.Component {
    render() {
        return (
        <div>
        <Navbar brand='logo' right>
          <NavItem href='get-started.html'>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
        </div>
        )
    }

}

export default MyNavbar
