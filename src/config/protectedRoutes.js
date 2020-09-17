import React from "react"
import { Switch, Route, Router, BrowserRouter } from "react-router-dom"
import Example from "../pages/example"
import Logout from '../pages/logout'
import NewPark from "../pages/newPark"
import NewScreenshot from "../pages/newScreenshot"
import Profile from "../pages/profile"

export default(
    <BrowserRouter>
        <Switch>
            <Route exact path="/myrct/e" component={Example}/>
            <Route exact path="/myrct/newscreenshot" component={NewScreenshot}/>
            <Route exact path="/myrct/newpark" component={NewPark}/>
            <Route exact path="/myrct/profile" component={Profile}/>
        </Switch>
    </BrowserRouter>
)