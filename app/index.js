//引入的插件
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link ,IndexRoute} from 'react-router-dom'
//自己写的组件
import Home from './components/home/index'
import Login from './components/login/index';
import Register from './components/register/index';
import TutorAbutment from './components/tutordocking/index';
import TutorTeachersDetails from './components/tutorTeachersDetails/index'
import CourseIntroduction from './components/courseIntroduction/index';
class App extends Component{
    render(){
        return(
            <Router>
                <div>
                   <Route exact path="/" component={Home}/>
                    <Route  path="/login" component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/tutor' component={TutorAbutment} >
                    </Route>
                    <Route path="/teacher" component={TutorTeachersDetails} />
                    <Route path='/courseIntroduction' component={CourseIntroduction}/>
                </div>
            </Router>
        )
    }
}




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
