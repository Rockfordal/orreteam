import * as $ from 'jquery';

const username = 'urkraft';
const password = 'programmering';

const make_base_auth = (user, password) => {
    var tok = user + ':' + password;
    var hash = btoa(tok);
    return "Basic " + hash;
};

const auth = make_base_auth(username, password);
export const authheaders = { Authorization: auth };
