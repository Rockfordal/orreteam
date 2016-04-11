import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as $ from 'jquery';

var carurl = "http://localhost:2480/documentbyclass/bilar/Cars/0";
var authdata = { user: "urkraft", password: "programmering" }

function make_base_auth(user, password) {
    var tok = user + ':' + password;
    var hash = btoa(tok);
    return "Basic " + hash;
}

$.ajax({url: carurl,
        headers: { "Authorization": make_base_auth("urkraft", "programmering") },
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        error: function() {
            alert('Naaaj!');
        },
        success: function(data) {
            console.log("Jag har hittat en " + data.name + " från år " + data.year + "!");
        }});

ReactDOM.render(<App />, document.getElementById('app'))
