// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'


const UserList = () => {
    return <div>
        <Link to="/1">1</Link><br/>
        <Link to="/2">2</Link><br/>
        <Link to="/3">3</Link><br/>
        <Link to="/4">4</Link><br/>
        <Link to="/5">5</Link><br/>
        <Link to="/6">6</Link><br/>
        <Link to="/7">7</Link><br/>
        <Link to="/8">8</Link><br/>
    </div>
}
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={UserList} />
        </Route>
        <Route path='/:id' component={App} user>
            <IndexRoute component={UserList} />
        </Route>
    </Router>
), document.getElementById('react-root')
);
