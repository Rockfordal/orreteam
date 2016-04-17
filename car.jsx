import React from 'react';
import Db from './db';

class Carindex extends React.Component {
    constructor() {
        super();
        this.state = { cars: [] };
        /* this.update = this.update.bind(this); */
    }
    /* update(){
       this.setState(cars: this.state.cars)
       } */
    render() {
        return (
            <table className="striped">
              <thead>
                <tr>
                  <th data-field="name">Bilmärke</th>
                  <th data-field="year">År</th>
                </tr>
              </thead>
              <tbody>
                  {this.state.cars.map((car) => {
                       return <Carrow key={car.id} car={car} />;
                   })}
              </tbody>
            </table>
        )
    }
    componentDidMount() {
        let db = new Db;
        const baseurl = 'http://localhost:2480';
        //const carurl = baseurl + '/documentbyclass/bilar/Cars/0';
        const iQuery = 'SELECT * FROM Cars';
        const carurl = baseurl + '/query/bilar/sql/' + iQuery;
        let success = (cars) => {
            console.log(cars.result);
            this.setState({cars: cars.result});
            }
        db.get(carurl, success);
    }
}

const Carrow = (props) =>
    <tr>
      <td>{props.car.name}</td>
      <td>{props.car.year}</td>
    </tr>

// Cars.propTypes = {
//     cars: React.PropTypes.string
// }

// Cars.defaultProps = {
//     cars: "inga bilar än"
// }

export default Carindex
