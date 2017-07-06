import React, { Component } from 'react';
import './App.css';

import Login from './login/index';
import Register from './register/index';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'


class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/" >Login</Link></li>
                        <li><Link to="Register" >Register</Link></li>
                    </ul>
                    <hr />
                    <Route exact path="/" component={Login}/>
                    <Route path='/register' component={Register}/>
                </div>
            </Router>
        )
    }

}

export default App;