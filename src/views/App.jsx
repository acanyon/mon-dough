import React, { Component } from 'react';

import Home from './Home';
import NoRoute404 from './NoRoute404';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.body}>
        <Router>
          <div className={styles.header}>
            <div className={styles.container}>
              <Link to="/"><i class="fas fa-kiss-wink-heart"></i></Link>
            </div>
          </div>
          <div className={styles.content}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route>
                <NoRoute404 />
              </Route>
            </Switch>
          </div>
          <div className={styles.footer}>
            <i class="fas fa-kiss-wink-heart"></i>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
