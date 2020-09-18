import React from 'react'
import { Router } from 'react-router-dom'
import './App.css'
//import routes from './config/routes'
import Routes from './config/routes'
import Header from './components/Header'
import {UserContext, UserContextProvider} from './UserContext'

function App() {
  return (
    <div className="App">
        <UserContextProvider>
            <Header />
            {/* {routes} */}
            <Routes />
        </UserContextProvider>
    </div>
  )
}

export default App
