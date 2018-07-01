import React, { Component } from 'react';
import { render } from 'react-dom';
export const baseCom = (WrappedComponent,obj) => {
    return class extends Component {
        render(){
            return (
                <section>
                    <div>我的包裹组件 {obj.title}</div>
                    <WrappedComponent />
                </section>
            )
        }
    }
}

