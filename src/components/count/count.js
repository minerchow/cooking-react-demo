import React, { Component } from 'react';
import { render } from 'react-dom';
class Count extends Component{
    constructor(props){
        super(props);
        this.props.countstore.add = this.props.countstore.add.bind(this,{name:'ming'});
    }
    // add = function(){
    //     setTimeout(()=>{
    //         this.props.countstore.num++;
    //     },300)
        
        
    // }
    // min = function(){
    //     this.props.countstore.num--;
    // }
    render(){
        return <div>
            <button onClick={this.props.countstore.add}>+1</button><button onClick={this.props.countstore.min.bind(this)}>-1</button>
        </div>
    }
}

export default Count;