import React, { Component } from 'react';
import { render } from 'react-dom';
import Count from './count';
import Display from './display';
import CountStore from "../store/countStore";
const CountStores = new CountStore();
class Countapp extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <Count store={CountStores}/>
            <Display store={CountStores}/>
        </div>
    }
}

export default Countapp;