
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import React, { Component } from 'react';
//引入的插件
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

import Home from './components/home/index'
import Login from './components/login/index';
import Register from './components/register/index';

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="login" >Login</Link></li>
                        <li><Link to="Register" >Register</Link></li>
                    </ul>
                    <hr />
                    <Route exact path="/" component={Home}/>
                    <Route  path="/login" component={Login}/>
                    <Route path='/register' component={Register}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
