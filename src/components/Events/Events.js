import React from 'react';
import EventCard from './EventCard';
import './Events.scss';

const Events = (props) => {

  const pageInfo = props.pageType;

  return (
    <section className='sectionEvents' id='sectionEvents'>
      <div className="container">
        <EventCard pageInfo={pageInfo}/>
      </div>
    </section>
  )
}

export default Events
