import React, { Component } from 'react';
import { render } from 'react-dom';

import AppComponent from "./components/testApp/app";
// import HelloComponent from './components/testApp/hello';
import { Router, Route, hashHistory } from 'react-router'

//配置路由

render((
  <Router history={hashHistory}>
    <Route path="/" component={AppComponent}/>
    <Route path="/hello" getComponent={(location, callback) => {
                System.import('./components/testApp/hello').then(component => {
                    callback(null, component.default || component)
                })
            }} />
  </Router>
), document.getElementById('test-app'))