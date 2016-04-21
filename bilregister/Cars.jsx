import React from 'react';
import Db from '../common/Db';
import {Button, Icon} from 'react-materialize';
import {Link} from 'react-router';

class Cars extends React.Component {
    render() {
        return (
          <div>
            <CarIndex />
            <br />
            <Button node='a' waves='light'><Icon right>add</Icon>Ny Bil</Button>
            <br />
          </div>
)}}

class CarIndex extends React.Component {
    constructor() {
        super();
        this.state = { cars: [{}] };
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
                     return <CarRow key={car.id} car={car} />
                   })}
              </tbody>
            </table>
        )
    }
    componentDidMount() {
        let db = new Db;
        db.query('bilar', 'SELECT name, year, @rid as id FROM Cars', (cars) => {
            this.setState({cars: cars.result});
            }
      );
    }
}

const CarRow = (props) => {
    return (
      <tr>
        <td>{props.car.name}</td>
        <td>{props.car.year}</td>
        <td><Link to={`/cars/${rid2id(props.car.id)}`}><Icon>delete</Icon></Link></td>
      </tr>
    )
}

const rid2id = (rid) => {
    if (rid) {
        let i = rid.indexOf(':') + 1;
        let l = rid.length + 1;
        let id = rid.substring(i, l);
        return id;
    }
    else return "";
}

/* let id = rid.replace('#', '00').replace(':', '00'); */

// Cars.propTypes = {
//     cars: React.PropTypes.string
// }

export default Cars
