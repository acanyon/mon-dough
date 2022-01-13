import React, { Component } from 'react';
import cn from 'classnames';

import NoRoute404 from './NoRoute404';
import {
  Link
} from "react-router-dom";

import styles from './NavigationPane.scss';

class NavigationPane extends Component {
  constructor(props) {
    super(props);
  }

  onCloseNavigation(evt) {
    evt.stopPropagation();
    this.props.onClose();
  }

  preventClose(evt) {
    evt.stopPropagation();
  }

  renderLink(path, text) {
    return <Link key={path} to={path} onClick={this.props.onClose} className={styles.link}>{text}</Link>
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    return (
      <div className={styles.backdrop} onClick={this.onCloseNavigation.bind(this)}>
        <div className={cn(styles.pane)} onClick={this.preventClose.bind(this)}>
          {[
            ["/", "Home"],
            ["/login", "Login"],
            ["/signup", "Signup"],
            ["/profile", "Edit Profile"],
            ["/profile/:userId", "User Profile"],
            ["/messages", "View Messages"],
            ["/messages/:userId", "Conversation"],
            ["/event/details/:eventId", "Event Details"],
            ["/event/history", "Event History"],
          ].map((attr) => this.renderLink(attr[0], attr[1]))}
        </div>
      </div>
    );
  }
}

export default NavigationPane;


