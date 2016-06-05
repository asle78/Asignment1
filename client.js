
import React from 'react'
import { render } from 'react-dom'
var App = require('./Components/app');

fetch('/albums')
    .then(res => res.json())
    .then(array => {
        render(<App array = {array}/>, document.getElementById('container'));
    })



