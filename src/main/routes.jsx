import React from 'react'
import {HashRouter, Route, Redirect, hashHistory} from 'react-router-dom'

import Projeto from '../projeto/projeto'
import About from '../about/about'

export default props => (
    <HashRouter>
        <Route path="/projeto" component={Projeto}/>
        <Route path="/about" component={About}/>
        <Route from="*" to='/projeto'/>

    </HashRouter>
)