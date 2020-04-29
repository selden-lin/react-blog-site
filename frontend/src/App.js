import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './pages/Login.js';
import Home from './pages/Home.js';
import ViewBlog from './pages/ViewBlog.js';
import Signup from './pages/Signup.js';

import PageNav from './components/PageNav';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: ["login", "new blog", "sign up", "home"]
        }
    }
    render() {
        return (
            <div className="App">
                {this.context.router}
                <Router>
                    <div>
                        <PageNav items={this.state.navItems} />

                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/signup">
                                <Signup />
                            </Route>
                            <Route path="/home">
                                <Home />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/newblog">
                                <ViewBlog title="" content="" summary="" />
                            </Route>
                            <Route path="/blog/:id" render={(props) => {
                                return <ViewBlog id={props.match.params.id} title="" content="" summary="" />
                            }} />
                            <Route exact path="/">
                                <Login />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
