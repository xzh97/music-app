import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom"
import Home from '@/views/home/index'
import Profile from '@/views/profile/index'
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: 'app container'
        }
    }
    render(){
        return (
            <div className='app-container'>
                {this.state.text}
                <Router>
                    <Link to="/index">Home</Link>
                    <Link to="/profile">Profile</Link>

                    <Switch>
                        <Route exact path={'/index'} component={Home}></Route>
                        <Route exact path={'/profile'} component={Profile}></Route>
                        <Redirect from='/' to='/index'></Redirect>

                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App

