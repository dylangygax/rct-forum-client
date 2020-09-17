import React from "react"
import { Switch, Route, Router, BrowserRouter } from "react-router-dom"
import Example from "../pages/example"
import Logout from '../pages/logout'
import newScreenshot from "../pages/newScreenshot"

export default(
    <BrowserRouter>
        <Switch>
            <Route exact path="/myrct/e" component={Example}/>
            <Route exact path="/myrct/newscreenshot" component={newScreenshot}/>
        </Switch>
    </BrowserRouter>
)