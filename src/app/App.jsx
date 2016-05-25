import React from 'react';
import Car from './bilregister/Car.jsx';
import Cars from './bilregister/Cars.jsx';
import MyNavbar from './layout/Navbar.jsx';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

const Hem = () => "<h1>Home</h1>"
const Garage = () => "<h1>Garage</h1>"

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={MyNavbar}>
          <IndexRoute component={Hem}/>
          <Route path="/cars" component={Cars}/>
            <Route path="/cars/:id" component={Car}/>
          <Route path="/garage" component={Garage}/>
        </Route>
      </Router>
    ) } }

/* <Route path="/cars/:id/delete" component={CarDelete}/> */

export default App
