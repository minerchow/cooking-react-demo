import React, { Component } from 'react';
import { render } from 'react-dom';
import Count from './count';
import Display from './display';
import { Link } from 'react-router'
import CountStore from "../store/countStore";
const CountStores = new CountStore();
class Countapp extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div>
            
            <Count countstore={CountStores}/>
            <Display countstore={CountStores}/>
            <div><Link to="/hello">hello</Link></div>
            
        </div>
    }
}

export default Countapp;