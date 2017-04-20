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
    
    submitClick(e){
        let value = this.refs.inputTxt.value;
        this.props.store.txt = value;
    }
    render(){
        return (
            <div>
                change:<input value={this.props.title} onChange={this.handleChange.bind(this)} />
                submit:<input defaultValue={this.props.store.txt} ref="inputTxt"/>
                <button onClick={this.submitClick.bind(this)}>提交</button>
            </div>
        )
    }
}

export default TodoInput;