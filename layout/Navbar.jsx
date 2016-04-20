import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import {Link} from 'react-router';
import classNames from 'classnames';

class MyNavbar extends React.Component {
  render() {
    var loc = this.props.location.pathname;
    return (
      <div>
        <Navbar brand='React Materialize OrientDB' right>
          <NavItem href='#/cars'   className={classNames({active: loc=='/cars'})}>Bilar</NavItem>
          <NavItem href='#/garage' className={classNames({active: loc== '/garage'})}>Garage</NavItem>
        </Navbar>
        {this.props.children}
      </div>
    ) } }

export default MyNavbar
