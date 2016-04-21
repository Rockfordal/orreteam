import React from 'react';
import Db from '../common/Db';
import {Button, Icon} from 'react-materialize';
import {Link} from 'react-router';

class Car extends React.Component {
    render() {
        return (
          <div>
            Visar bil {this.props.params.id}
            <br/>
            <Button node='a' waves='light'><Icon right>save</Icon>Spara</Button>
          </div>
)}
    componentDidMount() {
        let db = new Db;
        let id = this.props.params.id;
        db.query('bilar', 'SELECT name, year FROM Cars WHERE id='+id, (cars) => {
            this.setState({cars: cars.result});
            }
      );
    }

}

export default Car
