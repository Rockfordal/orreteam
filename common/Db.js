import {authheaders} from './auth';

class Db {
    constructor() {
      this.baseurl = 'http://localhost:2480';
    }
    error() {
        console.log('Naaaj!  Hittade ingen data . Är OrientDB igång?');
    }
    query(database, query, success) {
        const url = '/' + database + '/sql/' + query;

        $.ajax({url: this.baseurl + '/query' + url,
                headers: authheaders,
                type: 'GET',
                crossDomain: true,
                error: this.error,
                success: success
               });
    }
}

export default Db;
