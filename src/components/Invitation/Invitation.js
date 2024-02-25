import React from 'react';
import './Invitation.scss';

const Invitation = (props) => {
  return (
    <section className='sectionInvitation' id='sectionInvitation'>
      <div className="container">
        <p className='sectionInvitation--heading'>Invitation</p>
        <hr width="10%" className="center-block divider" />

        <div className='sectionInvitation--content'>
          <p>
            Mrs. lorem ipsum & Mr. lorem ipsum solicit your blessings and request the pleasure of your company at the Wedding Ceremony of their youngest grandson
          </p>
          <br />
          <p className="name">{props.firstName}</p>
          <p>{props.firstParents}</p>
          <br />
          <p>with</p>
          <br />
          <p className="name">{props.secondName}</p>
          <p>{props.secondParents}</p>
          <br />
          <p>
            Come and celebrate with us amid music, dance, fun, feast, laughter, joy and lots of love. 
            Grace us with your presence and shower the new couple with wishes and blessings as they embark upon a new journey.
          </p>
          <p className="noGifts">No Gifts, No Shagun, Only your Love and Blessings</p>
        </div>
      </div>
    </section>
  )
}

export default Invitation;