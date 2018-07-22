import React, { Component } from 'react';
import { render } from 'react-dom';
import { extendObservable } from 'mobx';
class Count extends Component{
    constructor(props){
        console.log(props)
        super(props);
        this.props.countstore.add = this.props.countstore.add.bind(this,{name:'ming'});
        this.props.countstore.getData = this.props.countstore.getData.bind(this);
        this.props.countstore.changeName=this.props.countstore.changeName.bind(this);
        this.props.countstore.changeAge = this.props.countstore.changeAge.bind(this)
        this.state ={
            a:this.props.countstore.num
        }
    }
    // add = function(){
    //     setTimeout(()=>{
    //         this.props.countstore.num++;
    //     },300)
        
        
    // }
    // min = function(){
    //     this.props.countstore.num--;
    // }
    changeState=()=>{
        this.setState({
            a:1
        })
    }
    
    render(){
        return <div>
            {this.state.a}
            <button onClick={this.props.countstore.add}>+1</button><button onClick={this.props.countstore.min.bind(this)}>-1</button>
            <button onClick={this.props.countstore.getData}>异步获取数据</button>
            <button onClick={this.props.countstore.changeName}>改变姓名</button>
            <button onClick={this.props.countstore.changeAge}>新增年龄</button>
            <button onClick={this.changeState}>setState</button>
        </div>
    }
}

export default Count;