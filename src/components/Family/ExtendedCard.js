import React from 'react';
import { groomExtendedFamily } from '../../utils/FamilyData';
import './Family.scss';

const ExtendedCard = () => {
  return (
    <>
    {groomExtendedFamily.map((extendfamItem, index) => {
        return(
          <p className='extended__wrapper--list' key={index}>
            <strong>{extendfamItem.name}</strong>
            <span>{extendfamItem.relation}</span>
          </p>
        );
    })}
    </>
  )
}

export default ExtendedCard