import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from '../components/header.js';
import TodoInput from '../components/TodoInput.js';
import Store from '../components/store/store'; 
const store = new Store();
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
            <Header title={this.state.title} store={store}/>
            <TodoInput changeTitle={this.changeTitle.bind(this)} store={store}/>
            {this.state.name}
           </div>;
    }
};

export default Example;