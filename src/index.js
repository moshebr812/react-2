// FOLDER:    react-2   FILE:   index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(

    // option 1: render directly local content
    // <div> <fieldset> ...This is my base page 1.0.99</fieldset></div>,

    // option 2: render a componenet

    // in either case --> render it into this class defined in index.html
    <App></App>,
    document.querySelector('#root-users-app'),
);


