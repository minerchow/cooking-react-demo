import React, { Component } from 'react';
import { render } from 'react-dom';
import Note from "../components/note/note";
import {BrowserRouter,Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from "react-router-dom";
class Links extends Component{
    constructor(props){
        super(props);
    }
    render(){
        <div>
            <Link to="/note">note</Link>
        </div>
    }
}
//配置路由
render.render(
    <HashRouter history={hashHistory}>
        <Links>
            <Route path="/note" component={Note}></Route>
        </Links>
    </HashRouter>
)

export default Links;