import React from 'react';
import Carindex from './car.jsx';
import MyNavbar from './components/navbar.jsx'


class Knapp extends React.Component {
    render() {
        return (
              <a className="waves-effect waves-light btn">Click me</a>
            )}}

class App extends React.Component {
    render() {
        return (
          <div>
              <MyNavbar />
              <h1>Webpack + React + Materialize</h1>
              <br/>
              <Carindex />
              <br/>
              <Knapp />
          </div>
)}}



export default App
