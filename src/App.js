import React from 'react'
import { MdRouter } from 'react-icons/md'
import './App.css'
import Sidebar from './components/Sidebar'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

function App() {

    return (
        <>
            <Router>
                <Sidebar />
                <Switch>
                    <Route path='/' />
                </Switch>
            </Router>
        </>
    )
}

export default App;