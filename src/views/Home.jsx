import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={styles.body}>
          <div className={styles.container}>
            Body here
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
