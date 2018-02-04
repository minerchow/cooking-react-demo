import React, { Component } from 'react';
import { render } from 'react-dom';
class Forms extends Component {
    constructor(props){
         super(props);
    }
    render(){
        return <div>
            Form
        </div>
    }
    componentDidMount(){
        console.log(this.props.params.id)
    }
}

export default Forms;