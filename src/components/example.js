import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from '../components/header.js';
import TodoInput from '../components/TodoInput.js';
class Example extends Component {
    constructor(){
        super();
        this.state = {
            name :"mingmingming",
            title:"标题"
        }
    }

    changeTitle(title){
        this.setState({title})
    }

    render() {
        var that = this;
        setTimeout(function(){
            that.setState({
                name:"xiaoming"
            })
        },2000)

        return <div>
            <Header title={this.state.title}/>
            <TodoInput changeTitle={this.changeTitle.bind(this)}/>
            {this.state.name}
           </div>;
    }
};

export default Example;