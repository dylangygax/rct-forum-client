import React, {useContext} from "react"
import { Switch, Route, Router, BrowserRouter} from "react-router-dom"
import Home from "../pages/home"
import User from "../pages/user"
import Screenshot from "../pages/screenshot"
import Screenshots from "../pages/screenshots"
import Park from '../pages/park'
import Parks from '../pages/parks'
import Lost from '../pages/lost'
import About from "../pages/about"
import Login from "../pages/login"
import Logout from "../pages/logout"
import Protected from "../pages/protected"
import Register from "../pages/register"

// export default(
//     <BrowserRouter>
//         <Switch>
//             <Route exact path="/" component={Home}/>
//             <Route exact path="/register" component={Register}/>
//             <Route exact path="/parks" component={Parks}/>
//             <Route path="/parks/:id" component={Park}/>
//             <Route exact path="/screenshots" component={Screenshots}/>
//             <Route path="/screenshots/:id" component={Screenshot}/> 
//             <Route path="/users/:id" component={User}/> 
//             <Route exact path="/about" component={About}/>
//             <Route exact path="/login" component={Login}/>
//             <Route exact path="/logout" component={Logout}/>
//             <Route path="/myrct" component={Protected}/>
//             <Route path="/:id" component={Lost}/>
//         </Switch>
//     </BrowserRouter>
// )

import DeletePark from "../pages/deletePark"
import DeleteScreenshot from "../pages/deleteScreenshot"
import DeleteUser from "../pages/deleteUser"
import EditPark from "../pages/editPark"
import EditScreenshot from "../pages/editScreenshot"
import EditUser from "../pages/editUser"
import NewPark from "../pages/newPark"
import NewScreenshot from "../pages/newScreenshot"
import Profile from "../pages/profile"
import Welcome from "../pages/welcome"

import {UserContext} from "../UserContext"

const Routes = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    if (loggedInUser) {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/myrct" component={EditUser}/>
                    <Route exact path="/myrct/welcome" component={Welcome}/>
                    <Route exact path="/myrct/deleteaccount" component={DeleteUser}/>
                    <Route exact path="/myrct/newscreenshot" component={NewScreenshot}/>
                    <Route exact path="/myrct/newpark" component={NewPark}/>
                    <Route exact path="/myrct/profile" component={Profile}/>
                    <Route path="/myrct/screenshots/:id/edit" component={EditScreenshot}/>
                    <Route path="/myrct/screenshots/:id/delete" component={DeleteScreenshot}/>
                    <Route path="/myrct/parks/:id/edit" component={EditPark}/>
                    <Route path="/myrct/parks/:id/delete" component={DeletePark}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/parks" component={Parks}/>
                    <Route path="/parks/:id" component={Park}/>
                    <Route exact path="/screenshots" component={Screenshots}/>
                    <Route path="/screenshots/:id" component={Screenshot}/> 
                    <Route path="/users/:id" component={User}/> 
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/logout" component={Logout}/>
                    {/* <Route path="/myrct" component={Protected}/> */}
                    <Route path="/:id" component={Lost}/>
                </Switch>
            </BrowserRouter>
        )
    } else {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/parks" component={Parks}/>
                    <Route path="/parks/:id" component={Park}/>
                    <Route exact path="/screenshots" component={Screenshots}/>
                    <Route path="/screenshots/:id" component={Screenshot}/> 
                    <Route path="/users/:id" component={User}/> 
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/logout" component={Logout}/>
                    {/* <Route path="/myrct" component={Protected}/> */}
                    <Route path="/:id" component={Lost}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes