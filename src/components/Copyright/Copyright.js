import React from 'react';
import './Copyright.scss'

const Copyright = () => {

  const FullYear = new Date();
  let year = FullYear.getFullYear();

  return (
    <section className='sectionCopyright'>
        <div className="container">
            <p>&copy; {year} - All Rights Reserved </p>
        </div>
    </section>
  )
}

export default Copyright
