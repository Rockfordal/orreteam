import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as $ from 'jquery';

const cars = [{id: 1, name: "Ford",  age: 1943},
              {id: 2, name: "Volvo", age: 1974}];

ReactDOM.render(<App cars={cars} />, document.getElementById('app'));
