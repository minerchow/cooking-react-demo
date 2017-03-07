/**
 * Created by Administrator on 2016/10/6.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
class TodoInput extends Component {
    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }
    render(){
        return (
            <div>
                <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}

export default TodoInput;