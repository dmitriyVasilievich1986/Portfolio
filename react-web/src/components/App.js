import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Main, Navbar, Api, Frontend, Reference, Footage } from './layout'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
    render() {
        return (
            <Router>
                <Provider store={store}>
                    <Fragment>
                        <Navbar />
                        <Router>
                            <Route exact path='/'><Main /></Route>
                            <Route path='/api'><Api /></Route>
                            <Route path='/frontend'><Frontend /></Route>
                            <Route path='/reference'><Reference /></Route>
                        </Router>
                    </Fragment>
                </Provider>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))