import React, { Component } from 'react';

const styles = {
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  content: {
    textAlign: 'center',
    fontSize: '100px',
    color: 'white',
  },
};

class App404 extends Component {
  render() {
    return (
      <div style={styles.body}>
        <div style={styles.content}>404</div>
      </div>
    );
  }
}

export default App404;
