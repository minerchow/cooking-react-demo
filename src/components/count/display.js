import React, { Component } from 'react';
import { render } from 'react-dom';
import {observer} from 'mobx-react';
@observer
class Display extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            {this.props.store.displayResult}
        </div>
    }
}

export default Display;