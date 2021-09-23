import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom"
import Home from '@/views/home/index'
import Profile from '@/views/profile/index'
import '@/styles/common.scss'

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