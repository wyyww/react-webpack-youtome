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


// ////////////////////////////////////////////////////////////
// // then our route config
// const routes = [
//     { path: '/',
//         component: Home
//     },
//     { path: '/login',
//         component: Login,
//     },
//     { path: '/register',
//         component: Register,
//     },
//     { path: '/tutor',
//         component: TutorAbutment,
//         routes: [
//             { path: '/tutor/teacher',
//                 component: TutorTeachersDetails
//             },
//             { path: '/tutor/RouteConfigExample',
//                 component: RouteConfigExample
//             }
//         ]
//     }
// ]
//
// // wrap <Route> and use this everywhere instead, then when
// // sub routes are added to any route it'll work
// const RouteWithSubRoutes = (route) => (
//     <Route path={route.path} render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes}/>
//     )}/>
// )
//
// const App = () => (
//     <Router>
//         <div>
//             {/*<ul>*/}
//                 {/*<li><Link to="/tacos">Tacos</Link></li>*/}
//                 {/*<li><Link to="/sandwiches">Sandwiches</Link></li>*/}
//             {/*</ul>*/}
//             <Route exact path="/" component={Home}/>
//             <Route  path="/login" component={Login}/>
//             <Route path='/register' component={Register}/>
//             <Route path='/tutor' component={TutorAbutment} />
//             <Route path="/tutor/teacher" component={TutorTeachersDetails} />
//
//             <Route path='/tutor/RouteConfigExample' component={RouteConfigExample}/>
//             {/*{routes.map((route, i) => (*/}
//                 {/*<RouteWithSubRoutes key={i} {...route}/>*/}
//             {/*))}*/}
//         </div>
//     </Router>
// )
//

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
