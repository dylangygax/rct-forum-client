import React from 'react'
import { Router } from 'react-router-dom'
import './App.css'
import routes from './config/routes'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
        <Header />
            {routes}
    </div>
  );
}

export default App;
