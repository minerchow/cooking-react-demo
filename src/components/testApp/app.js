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
        <ul>
          <li><Link to="/hello">hello</Link></li>
          <li><Link to="/forms/1">form</Link></li>
        </ul>
        {this.props.children}
      </div>
    }
}

export default App;