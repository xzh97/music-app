import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from '@/components/app.js'
import '@/styles/common.scss'

import { HashRouter as Router} from "react-router-dom"

ReactDOM.render(
<React.StrictMode>
    <Router>
        <AppContainer />
    </Router>
</React.StrictMode>,
document.getElementById('app'))
