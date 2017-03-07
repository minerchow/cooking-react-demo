/**
 * Created by Administrator on 2016/10/5.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
class Header extends Component {
    constructor(){
        super();

    }

    render() {


        return <div>
            头部
            {this.props.title}
        </div>;
    }
};

export default Header;