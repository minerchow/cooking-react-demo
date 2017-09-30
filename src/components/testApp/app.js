import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router'
class App extends Component {
    constructor(){
         super();
    }
    render(){
        return <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/hello">hello</Link></li>
        
        </ul>
      </div>
    }
}

export default App;