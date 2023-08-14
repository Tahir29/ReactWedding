import React from 'react';
import Iframe from 'react-iframe';

const MapContainer = () => {

  return (
    <Iframe 
    width="100%" 
    height="100%" 
    title="Vasai Virar" 
    frameBorder="0"
    allowFullScreen 
    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120441.34274964438!2d72.7569339477801!3d19.37815870025948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae956bc1587b%3A0x864f53a94baa5145!2sVasai-Virar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1684410783889!5m2!1sen!2sin" 
    style={{border:0}}></Iframe>
  ) 
}

export default MapContainer;
