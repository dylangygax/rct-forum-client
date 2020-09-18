import React from "react"
import { Switch, Route, Router, BrowserRouter } from "react-router-dom"
import DeletePark from "../pages/deletePark"
import DeleteScreenshot from "../pages/deleteScreenshot"
import DeleteUser from "../pages/deleteUser"
import EditPark from "../pages/editPark"
import EditScreenshot from "../pages/editScreenshot"
import EditUser from "../pages/editUser"
import Logout from '../pages/logout'
import NewPark from "../pages/newPark"
import NewScreenshot from "../pages/newScreenshot"
import Profile from "../pages/profile"

export default(
    <BrowserRouter>
        <Switch>
            <Route exact path="/myrct" component={EditUser}/>
            <Route exact path="/myrct/deleteaccount" component={DeleteUser}/>
            <Route exact path="/myrct/newscreenshot" component={NewScreenshot}/>
            <Route exact path="/myrct/newpark" component={NewPark}/>
            <Route exact path="/myrct/profile" component={Profile}/>
            <Route path="/myrct/screenshots/:id/edit" component={EditScreenshot}/>
            <Route path="/myrct/screenshots/:id/delete" component={DeleteScreenshot}/>
            <Route path="/myrct/parks/:id/edit" component={EditPark}/>
            <Route path="/myrct/parks/:id/delete" component={DeletePark}/>
        </Switch>
    </BrowserRouter>
)