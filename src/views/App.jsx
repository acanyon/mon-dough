import React, { Component } from 'react';

import Home from './Home';
import NoRoute404 from './NoRoute404';
import {
  BrowserRouter as Router,
  Routes,
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
              <Link to="/"><i className="fas fa-kiss-wink-heart"></i></Link>
            </div>
          </div>
          <div className={styles.content}>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route element={<NoRoute404 />}/>
            </Routes>
          </div>
          <div className={styles.footer}>
            <i className="fas fa-kiss-wink-heart"></i>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
