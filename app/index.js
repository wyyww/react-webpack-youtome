//引入的插件
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
//自己写的组件
import Home from './components/home/index'
import Login from './components/login/index';
import Register from './components/register/index';
import TutorAbutment from './components/tutordocking/index';
import TutorTeachersDetails from './components/tutorTeachersDetails/index'
class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    {/*<ul>*/}
                        {/*<li><Link to="/" >Home</Link></li>*/}
                        {/*<li><Link to="login" >Login</Link></li>*/}
                        {/*<li><Link to="Register" >Register</Link></li>*/}
                    {/*</ul>*/}
                    {/*<hr />*/}
                    <Route exact path="/" component={Home}/>
                    <Route  path="/login" component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path="/teacher" component={TutorTeachersDetails} />
                    <Route path='/tutor' component={TutorAbutment} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
