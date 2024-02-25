import React from 'react';
import MapContainer from './MapContainer';
import { Link } from 'react-router-dom';
import './Reach.scss';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} 

const Reach = () => {
  return (
    <section className='sectionReach' id='sectionReach'>
        <div className="sectionReach__wrapper">
            <div className="sectionReach__wrapper--left">
                <div className='sectionReach__address'>
                  <div className="sectionRech__place">
                    <p className="heading">Wood Castle Spa & Resort</p>
                    <hr width="10%" className="divider" />
                    <p className='para'>Near Corbett National Park, Dhikuli <br />
                      Ramnagar (Distt. Nainital), Uttarakhand <br />
                      +91(5947) 284 307, 9917 470 033, 9917 470 036 <br />
                      <Link to="https://www.woodcastle.com" title='www.woodcastle.com' target="_blank" className='_link'>www.woodcastle.com</Link>
                    </p>
                  </div>
                  <br /><br /><br />
                  <div className='sectionReach__direction'>
                    <p className="heading">How to Reach</p>
                    <hr width="10%" className="divider" />

                    <br /><br />
                    
                    {/* by Road */}
                    <div className='sectionReach__direction--road'>
                      <p className="subHeading">By Road</p>
                      <p className="para">
                        Wood Castle Spa & Resort is 260 kms from Delhi and 8 kms from Ramnagar. The preferred route to take is: 
                      </p>
                    </div>
                    {/* by Road */}

                    <br /><br />

                    {/* by Rail */}
                    <div className='sectionReach__direction--rail'>
                      <p className="subHeading">By Rail</p>
                      <p className="para">
                        Ramnagar is on the broad gauge track from where the road transport options have to be availed to reach the park.
                      </p>
                      <br />
                      <p className='para'>
                        <strong>Corbett Link Express</strong>: 
                        Departs from Old Delhi Railway Station at 2245 hrs and arrives at Ramnagar at 0530 hrs. It is another 10 Kms by taxi to Wood Castle.
                      </p>
                      <br />
                      <p className='para'>
                        <strong>Kathgodam Express</strong>: 
                        Departs from Old Delhi Railway Station at 2245 hrs, arriving Kathgodam at 0715 hrs. It is another 66 Kms by taxi to Wood Castle.
                      </p>
                      <br />
                      <p className='para'>
                        <strong>Sampark Kranti Express</strong>: 
                        Depart from old Delhi Railway Station at 16 hrs , arriving Kathgodam at 2210 hrs. It is another 66 Kms by taxi to Wood Castle.
                      </p>
                    </div>
                    {/* by Rail */}

                    <br /><br />

                    {/* by Air */}
                    <div className='sectionReach__direction--air'>
                      <p className="subHeading">By Air</p>
                      <p className='para'>
                        Pantnagar at a distance of 70 kms is the nearest airport. Delhi at a distance of 300 kms is the nearest International airport.
                      </p>
                    </div>
                    {/* by Air */}
                  </div>
                </div>
            </div>
            <div className="sectionReach__wrapper--right">
              <MapContainer location={location} zoomLevel={17} />
            </div>
        </div>
    </section>
  )
}

export default Reach