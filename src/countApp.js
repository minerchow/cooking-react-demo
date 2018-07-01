import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Countapp from '../src/components/count/app.js';
render((
    <Router history={hashHistory}>
        <Route path="/" component={Countapp} />
        <Route path="/hello" getComponent={(location, callback) => {
                System.import('./components/testApp/hello.js').then(component => {
                    callback(null, component.default || component)
                })
            }} />
    </Router>
), document.getElementById('count-app'))