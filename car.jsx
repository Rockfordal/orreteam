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
        const carurl = 'http://localhost:2480/documentbyclass/bilar/Cars/0';
        let success = (car) => {
            this.setState({cars: [car]});
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
