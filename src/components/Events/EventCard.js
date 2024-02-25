import React from 'react';
import { groomEvent, brideEvent } from '../../utils/EventData';
import './Events.scss';

const Groom = () => {
    return(
        groomEvent.map((weddingitem, index) => {
            return(
                <div className='sectionEvents__card' key={index}>
                    <p className='sectionEvents--heading'>{weddingitem.title}</p>
                    <hr width="10%" className="center-block divider" />
    
                    <div className='sectionEvents__card--details'>
                        <div className="sectionEvents__data">
                            <p className='sectionEvents__data--title'>Date</p>
                            <p className='sectionEvents__data--content'>{weddingitem.date}</p>
                        </div>
                        <div className="sectionEvents__data">
                            <p className='sectionEvents__data--title'>Time</p>
                            <p className='sectionEvents__data--content'>{weddingitem.time}</p>
                        </div>
                        <div className="sectionEvents__data">
                            <p className='sectionEvents__data--title'>Venue</p>
                            <p className='sectionEvents__data--content'>{weddingitem.venue}</p>
                        </div>
                    </div>
                </div>
            );
        })
    )
}

const Bride = () => {
    return(
        brideEvent.map((weddingitem, index) => {
            return(
                <div className='sectionEvents__card' key={index}>
                    <p className='sectionEvents--heading'>{weddingitem.title}</p>
                    <hr width="10%" className="center-block divider" />
    
                    <div className='sectionEvents__card--details'>
                        <div className="sectionEvents__data">
                            <p className='sectionEvents__data--title'>Date</p>
                            <p className='sectionEvents__data--content'>{weddingitem.date}</p>
                        </div>
                        <div className="sectionEvents__data">
                            <p className='sectionEvents__data--title'>Time</p>
                            <p className='sectionEvents__data--content'>{weddingitem.time}</p>
                        </div>
                        <div className="sectionEvents__data">
                            <p className='sectionEvents__data--title'>Venue</p>
                            <p className='sectionEvents__data--content'>{weddingitem.venue}</p>
                        </div>
                    </div>
                </div>
            );
        })
    )
}

const EventCard = (props) => {

  return (
    <>
    {
        props.pageInfo === 'groom' ?  <Groom /> : <Bride />
    }
    </>
    
  )
}

export default EventCard;
