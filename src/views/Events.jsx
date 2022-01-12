import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './Events.scss';

const EVENTS = [
  {
    id: 1,
    eventName: 'Tech Professionals Bring a Friend',
    barPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bar-P1030319.jpg/1200px-Bar-P1030319.jpg',
    tags: ['Plus one welcome', '20-30 yrs old'],
    eventDate: 'Wed Jan 19 - 6:30pm',
    eventLocationName: 'Whitechapel',
    eventAddress: '600 Polk St, San Francisco, CA 94102',
    rsvpCount: 23,
  }, {
    id: 2,
    eventName: 'Single Marketing Professionals',
    barPhoto: 'https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2019/08/14/97f04adefa11426fa88d78611b9e1133_web-Harvard_and_Stone-14_lax_credit_harvardandstone_INLINE.jpg',
    tags: ['Singles only', 'Marketing professionals'],
    waitlist: true,
    eventDate: 'Thurs Jan 20 - 6:30pm',
    eventLocationName: 'Hi-Lo Club',
    eventAddress: '1423 Polk St, San Francisco, CA 94109',
    rsvpCount: 16,
  }, {
    id: 3,
    eventName: 'Group Gathering',
    barPhoto: 'https://cdn.cnn.com/cnnnext/dam/assets/200622142705-suspended-texas-bars-restricted-super-tease.jpg',
    tags: ["Bring ya' crew"],
    eventDate: 'Thurs Jan 20 - 6:30pm',
    eventLocationName: 'Hi-Lo Club',
    eventAddress: '1423 Polk St, San Francisco, CA 94109',
    rsvpCount: 16,
  }, {
    id: 4,
    eventName: 'Group Gathering',
    waitlist: true,
    barPhoto: 'https://cdn.cnn.com/cnnnext/dam/assets/200622142705-suspended-texas-bars-restricted-super-tease.jpg',
    tags: ["Bring ya' crew"],
    eventDate: 'Thurs Jan 20 - 6:30pm',
    eventLocationName: 'Hi-Lo Club',
    eventAddress: '1423 Polk St, San Francisco, CA 94109',
    rsvpCount: 16,
  }
]

class Events extends Component {
  constructor(props) {
    super(props);

    // TODO - use fetch to grab events from API server
    // https://reactjs.org/docs/faq-ajax.html
  }

  renderEvent(props) {
    return (
      <div className={styles.eventPane} key={props.id}>
        <Link to={`/event/${props.id}`}>
          <div className={styles.eventContainer}>
            <div style={{backgroundImage: `url(${props.barPhoto})`}} className={styles.eventPhoto}></div>
            <div className={styles.eventInfo}>
              <div className={styles.eventHeader}>
                {`${props.eventName} @ ${props.eventLocationName}`}
              </div>
              <div className={styles.tagContainer}>
                {props.tags.map((tag) => <div className={styles.tag} key={tag}>{tag}</div>)}
              </div>
              <div className={styles.fillSpace}></div>
              <div className={styles.footer}>
                <div className={styles.rsvpCount}>
                  {props.waitlist ? 'SOLD OUT' : `${props.rsvpCount} attending`}
                </div>
                <div className={cn(styles.rsvpButton, props.waitlist && styles.waitlist)}>{props.waitlist ? 'Waitlst' : 'RSVP'}</div>
              </div>
            </div>
            <div className={styles.chevron}><i className="fas fa-chevron-right"></i></div>
          </div>
        </Link>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className={styles.body}>
          <div className={styles.container}>
            {EVENTS.map((eventProps) => this.renderEvent(eventProps))}
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
