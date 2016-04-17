import {authheaders} from './auth';

class Db {
    constructor() {
    }
    error() {
        console.log('Naaaj!  Hittade ingen data . Är OrientDB igång?');
    }
    get(url, success) {
        $.ajax({url: url,
                headers: authheaders,
                type: 'GET',
                crossDomain: true,
                error: this.error,
                success: success
               });
    }
}

export default Db;
