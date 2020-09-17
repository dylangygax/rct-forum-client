import React from "react"
import { Switch, Route, Router, BrowserRouter } from "react-router-dom"
import Example from "../pages/example"
import Logout from '../pages/logout'

export default(
    <BrowserRouter>
        <Switch>
            <Route exact path="/myrct/e" component={Example}/>
        </Switch>
    </BrowserRouter>
)