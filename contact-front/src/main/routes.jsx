import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Contact from '../contact/contact'
import About from '../about/about'


export default props => (
    <Router history={hashHistory}>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Redirect from='*' to='/contact' />
    </Router>
)