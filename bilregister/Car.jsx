import React from 'react';
import Db from '../common/Db';
import {Button, Icon} from 'react-materialize';

class Cars extends React.Component {
    render() {
        return (
          <div>
            <Car_index />
            <br />
            <Button node='a' waves='light'><Icon right>add</Icon>Ny Bil</Button>
          </div>
)}}

class Car_index extends React.Component {
    constructor() {
        super();
        this.state = { cars: [] };
    }
    render() {
        return (
            <table className="striped">
              <thead>
                <tr>
                  <th data-field="name">Bilmärke</th>
                  <th data-field="year">År</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                  { this.state.cars.map((car) => {
                     return <Car_row key={car["@rid"]} car={car} />
                   })}
              </tbody>
            </table>
        )
    }
    componentDidMount() {
        let db = new Db;
        db.query('bilar', 'SELECT * FROM Cars', (cars) => {
            this.setState({cars: cars.result});
            }
      );
    }
}

const Car_row = (props) =>
    <tr>
      <td>{props.car.name}</td>
      <td>{props.car.year}</td>
      <td><Icon>delete</Icon></td>
    </tr>

// Cars.propTypes = {
//     cars: React.PropTypes.string
// }

export default Cars
