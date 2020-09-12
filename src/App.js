import React from 'react';
import logo from './logo.svg';
import './App.css';
import ControlPanel from './ControlPanel/ControlPanel.jsx';
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (<div >
        <Router >
            <HashRouter >
                <Switch >
                    <Route exact path="/" component={ControlPanel} />
                    { /* <Route path="/secondpage" component={Secondcomponent} /> */}
                    { /* <Route component={Not_found} />         //error page for non-existing paths */}
                </Switch>
            </HashRouter>
        </Router>
    </div>
    );
}

export default App;