import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Main, Navbar, Api } from './layout'

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Router>
                        <Route exact path='/'>
                            <Main />
                        </Route>
                        <Route path='/api'>
                            <Api />
                        </Route>
                    </Router>
                </Fragment>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))