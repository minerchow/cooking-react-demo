import React, { Component } from 'react';
import { render } from 'react-dom';
import { observer } from 'mobx-react';
@observer
class Display extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
       
        return <div>
           <div>  {this.props.countstore.displayResult} </div>
           <ul>
               {this.props.countstore.list.map((result)=>{
                   return (
                       <li key={result.id}>{result.title}</li>
                   )
               })} 
           </ul>
           <div>{this.props.countstore.person.name}</div>
           <div>{this.props.countstore.person.age}</div>
        </div>
    }
}

export default Display;