import React, { Component } from 'react';
import { render } from 'react-dom';
class Display extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            {this.props.store.display}
        </div>
    }
}

export default Display;