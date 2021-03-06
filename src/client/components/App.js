import React, {Component} from 'react';
import './App.css';
import './About.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Lists from './pages/Lists';
import InWork from './pages/InWork';
import Main from './pages/Main';
import GroupDetails from './pages/GroupDetails';
import About from './pages/About';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="container router-content">
          <header>
            <nav>
              <ul>

                <li>
                  <Link to="/">About</Link>
                </li>

                <li>
                  <Link to="/main">Main</Link>
                </li>

                <li>
                  <Link to="/inWork">In work</Link>
                </li>

                <li>
                  <Link to="/lists">Lists</Link>
                </li>

              </ul>
            </nav>
          </header>

          <main>

            <Route
              exact
              path="/"
              component={About}
            />

            <Route
              path="/main"
              component={Main}
            />

            <Route
              path="/inWork"
              component={InWork}
            />

            <Route
              exact
              path="/lists"
              component={Lists}
            />

            <Route
              path="/group/:id"
              component={GroupDetails}
            />

          </main>
        </div>
      </Router>
    );
  }
}

export default App;
