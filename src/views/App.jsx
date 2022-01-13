import React, { Component } from 'react';
import cn from 'classnames';

import Home from './Home';
import Events from './Events';
import EventInfo from './EventInfo';
import NavigationPane from './NavigationPane';
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
    this.state = {
      isNavOpen: false,
    };
  }

  onNavOpen() {
    this.setState({isNavOpen: true});
  }

  onNavClose() {
    this.setState({isNavOpen: false});
  }

  render() {
    return (
      <div className={styles.body}>
        <Router>
          <div className={styles.header}>
            <div className={styles.container}>
              <div className={styles.navBarButton} onClick={this.onNavOpen.bind(this)}>
                <i className="fas fa-bars"></i>
              </div>
              <Link to="/"><i className={cn("fas fa-kiss-wink-heart", styles.logo)}></i></Link>
              <div>Dough for Monroe</div>
            </div>
          </div>
          <div className={styles.content}>
            <NavigationPane isOpen={this.state.isNavOpen} onClose={this.onNavClose.bind(this)}/>
            <Routes>
              <Route exact path="/" element={<Events />}/>
              <Route exact path="/event/details/:eventId" element={<EventInfo />}/>
              <Route element={<NoRoute404 />}/>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
