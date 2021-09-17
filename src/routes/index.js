import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import Home from '@/views/home/index'

const routes = [
    {
        name: 'index',
        path: '/index',
        component: Home,
    },
    // 新增路由在这里
]
export default function Routes(){
    return (
        <Router>
            <Switch>
                {
                    routes.map(route => {
                        return (
                            <Route key={route.name} exact path={route.path} component={() => route.component}></Route>
                        )
                    })
                }
                <Redirect from="/" to="/index"></Redirect>
            </Switch>
        </Router>
    )
}
