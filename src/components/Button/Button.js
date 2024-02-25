import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = (props) => {
  return (
    <div className='mainButton'>
      <Link to={props.to} title={props.title} className='mainButton--link'> {props.children} <span>Click Here</span> </Link>
    </div>
  )
}

export default Button;
