import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as $ from 'jquery';

const make_base_auth = (user, password) => {
    var tok = user + ':' + password;
    var hash = btoa(tok);
    return "Basic " + hash;
};

const carurl = 'http://localhost:2480/documentbyclass/bilar/Cars/0';
const authheaders = { "Authorization": make_base_auth('urkraft', 'programmering') };

$.ajax({url: carurl,
        headers: authheaders,
        type: 'GET',
        crossDomain: true,
        error: function() {
            console.log('Naaaj!  Hittade ingen bil. Är OrientDB verkligen igång?');
        },
        success: function(bil) {
            console.log("Jag har hittat en " + bil.name + " från år " + bil.year + "!");
        }});

ReactDOM.render(<App />, document.getElementById('app'));
