var React = require('react');
var ReactDOM = require('react-dom');
var shows = require('./shows.json')//other file not js must be specified extension eg. json else wont be recognised
var Show = require('./Show');

//render Component using JSX form
ReactDOM.render(
  //change to start the show in given index:
<Show shows={shows} showIndex={1}/>,
  //properties in Component in JSX
  document.getElementById('root')
);
