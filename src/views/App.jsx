import React, { Component } from 'react';
import cn from 'classnames';

import Home from './Home';
import Events from './Events';
import EventInfo from './EventInfo';
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
              <Link to="/"><i className={cn("fas fa-kiss-wink-heart", styles.logo)}></i></Link>
              Dough for Monroe
            </div>
          </div>
          <div className={styles.content}>
            <Routes>
              <Route exact path="/" element={<Events />}/>
              <Route exact path="/event/:id" element={<EventInfo />}/>
              <Route element={<NoRoute404 />}/>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
