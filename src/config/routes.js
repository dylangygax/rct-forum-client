import React from "react"
import { Switch, Route, Router, BrowserRouter } from "react-router-dom"
import Home from "../pages/home"
import User from "../pages/user"

export default(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/parks" component={Parks}/>
            <Route path="/parks/:id" component={Park}/>
            <Route path="/screenshots" component={Screenshots}/>
            <Route path="/screenshots/:id" component={Screenshot}/> */}
            <Route path="/user/:id" component={User}/> 
        </Switch>
    </BrowserRouter>
)