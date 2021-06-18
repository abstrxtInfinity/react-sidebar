import React from 'react'
import { MdRouter } from 'react-icons/md'
import './App.css'
import Sidebar from './components/Sidebar'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Reports from './pages/Reports'


function App() {

    return (
        <>
            <Router>
                <Sidebar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/reports' >
                        <Reports />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;