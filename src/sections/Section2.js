import React from 'react'
import portrait from '../assets/portrait.jpg';
import landscape from '../assets/landscape.jpg';

const Section2 = () => {
    return (
        <section id="section2">
          <div className="flex-container">
              <div className="p-rel">
              <img src={portrait} alt="portrait" className="portrait"/>
            <div className="portrait-text">Spatial Voice Chat</div>
              </div>

              <div className="p-rel">
              <img src={portrait} alt="portrait" className="portrait"/>
          <div className="portrait-text">Shows & Events</div>

              </div>
              <div className="p-rel">
              <img src={portrait} alt="portrait" className="portrait"/>
                <div className="portrait-text">Play Games</div>
              </div>
          </div>


          <div className="pt-3">
          <div className="title ml-10 mb-5">
            Explore Spaces
          </div>
              <div className="flex-container">
              <div className="p-rel">
              <img src={landscape} alt="portrait" className="landscape"/>
            <div className="portrait-text">PortCity Base</div>
              </div>

              <div className="p-rel">
              <img src={landscape} alt="portrait" className="landscape"/>
          <div className="portrait-text">Mcdonalds</div>

              </div>
              <div className="p-rel">
              <img src={landscape} alt="portrait" className="landscape"/>
                <div className="portrait-text">Theatre</div>
              </div>
                  </div>
          </div>
        </section>
    )
}

export default Section2
