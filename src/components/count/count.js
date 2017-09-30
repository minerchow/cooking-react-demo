import React, { Component } from 'react';
import { render } from 'react-dom';
class Count extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <button onClick={this.props.store.add.bind(this)}>+1</button><button onClick={this.props.store.min.bind(this)}>-1</button>
        </div>
    }
}

export default Count;