import React, { Component } from 'react';
import { render } from 'react-dom';
class Count extends Component{
    constructor(props){
        super(props);
    }
    add = function(){
        setTimeout(()=>{
            this.props.store.num++;
        },300)
        
        
    }
    min = function(){
        this.props.store.num--;
    }
    render(){
        return <div>
            <button onClick={this.add.bind(this)}>+1</button><button onClick={this.min.bind(this)}>-1</button>
        </div>
    }
}

export default Count;