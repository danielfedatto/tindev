import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login'
import Main from './pages/Main'

export default function Routes() {
    return (
        <BrowserRouter>
            {/* Component call the component i have created and the exact is the rule for exact path in the route */}
            <Route path="/" exact component={Login} />
            <Route path="/dev/:id" component={Main} />
        </BrowserRouter>
    );
}