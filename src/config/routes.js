import React from "react"
import { Switch, Route, Router, BrowserRouter } from "react-router-dom"
import Home from "../pages/home"
import User from "../pages/user"
import Screenshot from "../pages/screenshot"
import Screenshots from "../pages/screenshots"
import Park from '../pages/park'
import Parks from '../pages/parks'
import Lost from '../pages/lost'

export default(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/parks" component={Parks}/>
            <Route path="/parks/:id" component={Park}/>
            <Route exact path="/screenshots" component={Screenshots}/>
            <Route path="/screenshots/:id" component={Screenshot}/> 
            <Route path="/users/:id" component={User}/> 
            <Route path="/:id" component={Lost}/>
        </Switch>
    </BrowserRouter>
)