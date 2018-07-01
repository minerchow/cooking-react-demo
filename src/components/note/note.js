import React, { Component } from 'react';
import { render } from 'react-dom';
import Forms from './forms';
import {baseCom} from './basecom';
class Note extends Component {
    constructor(){
         super();
    }
    render(){
        return <div>
            <Forms />
        </div>
    }
}

// const baseCom = (WrappedComponent,obj) => {
//     return class extends Component {
//         render(){
//             return (
//                 <section>
//                     <div>我的包裹组件 {obj.title}</div>
//                     <WrappedComponent />
//                 </section>
//             )
//         }
//     }
// }

export default baseCom(Note,{title:"标题"});