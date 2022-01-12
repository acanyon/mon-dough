import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './EventInfo.scss';

const EVENT = {
  id: 1,
  eventName: 'Tech Asks You to Bring a Friend',
  barPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bar-P1030319.jpg/1200px-Bar-P1030319.jpg',
  tags: ['Plus one welcome', '20-30 yrs old'],
  eventDate: 'Wed Jan 19 - 6:30pm',
  eventLocationName: 'Whitechapel',
  eventAddress: '600 Polk St, San Francisco, CA 94102',
  rsvpCount: 23,
}

class EventInfo extends Component {
  constructor(props) {
    super(props);

    console.log('event id', this.props.id)
    // TODO - use fetch to grab event from API server
    // https://reactjs.org/docs/faq-ajax.html
  }

  render() {
    const eventProps = EVENT;

    console.log('event id', this.props.id)

    return (
      <Link className={styles.eventPane} key={eventProps.id} to={`/event/${eventProps.id}`}>
        <div className={styles.eventContainer}>
          <div style={{backgroundImage: `url(${eventProps.barPhoto})`}} className={styles.eventPhoto}></div>
          <div className={styles.eventInfo}>
            <div className={styles.eventHeader}>
              {`${eventProps.eventName} @ ${eventProps.eventLocationName}`}
            </div>
            <div className={styles.tagContainer}>
              {eventProps.tags.map((tag) => <div className={styles.tag} key={tag}>{tag}</div>)}
            </div>
            <div className={styles.fillSpace}></div>
            <div className={styles.footer}>
              <div className={styles.rsvpCount}>
                {eventProps.waitlist ? 'SOLD OUT' : `${eventProps.rsvpCount} attending`}
              </div>
              <div className={styles.rsvpButton}>{eventProps.waitlist ? 'Waitlst' : 'RSVP'}</div>
            </div>
          </div>
          <div className={styles.chevron}><i className="fas fa-chevron-right"></i></div>
        </div>
      </Link>
    )
  }
}

export default (props) => <EventInfo {...useParams()} {...props} />
