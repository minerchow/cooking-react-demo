import React, { Component } from 'react';
import { render } from 'react-dom';
import Forms from './forms';
class Note extends Component {
    constructor(){
         super();
    }
    render(){
        return <div>
            <Forms />
        </div>
    }
}

export default Note;