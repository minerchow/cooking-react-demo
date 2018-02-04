import React, { Component } from 'react';
import { render } from 'react-dom';
//import {BrowserRouter,Route,Link} from 'react-router-dom';
import AppComponent from "./components/testApp/app";

//import Hello from "./components/testApp/hello";
// import HelloComponent from './components/testApp/hello';
import { Router, Route, hashHistory } from 'react-router'

//配置路由

render((
  <Router history={hashHistory}>
    <Route path="/" component={AppComponent}>
      <Route path="/forms/:id" getComponent={(location, callback) => {
                System.import('./components/testApp/form').then(component => {
                    callback(null, component.default || component)
                })
            }} />
    </Route> 
    <Route path="/hello" getComponent={(location, callback) => {
                System.import('./components/testApp/hello').then(component => {
                    callback(null, component.default || component)
                })
            }} />
  </Router>
), document.getElementById('test-app'))
// render((
//   <BrowserRouter>
//     <div>
//       <ul>
//       <li><Link to='/hello'>22</Link></li>
//         <li><Link to='/hello'>22</Link></li>
//       </ul>
   
//       <Route path="/" exact component={AppComponent}></Route>
//       <Route path="/hello" exact component={Hello}></Route>
     
//     </div>
    
//   </BrowserRouter>
// ),document.getElementById('test-app'))