import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom"
import Home from '@/views/home/index'
import Profile from '@/views/profile/index'
// class App extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             text: 'app container'
//         }
//     }
//     render(){
//         return (
//             <div className='app-container'>
//                 <p>{this.state.text}</p>
//                 <Link to="/index">Home</Link>
//                 <Link to="/profile">Profile</Link>

//                 <Switch>
//                     <Route exact path={'/index'} component={Home}></Route>
//                     <Route exact path={'/profile'} component={Profile}></Route>
//                     <Redirect from='/' to='/index'></Redirect>

//                 </Switch>
//             </div>
//         )
//     }
// }

export default function App (){
    return (
        <div className='app-container'>
            <p>首页</p>
            <Link to="/index">Home</Link>
            <Link to="/profile">Profile</Link>

            <Switch>
                <Route exact path={'/index'} component={Home}></Route>
                <Route exact path={'/profile'} component={Profile}></Route>
                <Redirect from='/' to='/index'></Redirect>

            </Switch>
        </div>
    )
}