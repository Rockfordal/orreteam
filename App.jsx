import React from 'react';
import Cars from './bilregister/Car.jsx';
import MyNavbar from './layout/Navbar.jsx';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

const Home   = () => <div><h1>Home</h1></div>;
const Garage = () => <div><h1>Garage</h1></div>;

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={MyNavbar}>
          <IndexRoute component={Home} />
          <Route path="/cars" component={Cars} />
          <Route path="/garage" component={Garage} />
        </Route>
      </Router>
    ) } }

export default App
