import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ReversalApp from './apps/StringReversal/ReversalApp';

/************************
*  STRING REVERSAL APP  *
*************************/
ReactDOM.render(<ReversalApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

