import React from 'react';
import FamilyCard from './FamilyCard';
import ExtendedCard from './ExtendedCard';
import './Family.scss';

const Family = () => {
  return (
    <section className='sectionFamily' id='sectionFamily'>
        <div className="container">
            <div className='sectionFamily__heading'>
                <p className='sectionFamily--heading'>The Family</p>
                <hr width="10%" className="center-block divider" />
            </div>
            <div className='sectionFamily__wrapper'>
                <FamilyCard />
            </div>
        </div>
        <div className="container">
            <div className='sectionFamily__extended'>
                <p className='sectionFamily--heading'>The Extended Family</p>
                <hr width="10%" className="center-block divider" />
            </div>
            <div className='extended__wrapper'>
                <ExtendedCard />
            </div>
        </div>
    </section>
  )
}

export default Family
