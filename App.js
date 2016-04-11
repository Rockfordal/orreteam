import React from 'react';

class App extends React.Component {
    render() {
        return <div>
            <h1>Webpack + React + Materialize</h1>
            <table className="striped">
              <thead>
                <tr>
                  <th data-field="name">mja</th>
                  <th data-field="year">mja</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Saab Turbo</td>
                  <td>1943</td>
                </tr>
                <tr>
                  <td>Audi S6</td>
                  <td>2013</td>
                </tr>
                <tr>
                  <td>Ford Fiat</td>
                  <td>2013</td>
                </tr>
              </tbody>
            </table>
            <br/>
            <a className="waves-effect waves-light btn">Click me</a>
        </div>
    }
}

export default App
