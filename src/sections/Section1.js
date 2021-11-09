import React from 'react'

const Section1 = () => {
    return (
        <section className="homebg-img">
            <div className="home-container">
                <div className="home-title">Welcome to the </div>
                <div className="home-title-colored">Metaverse</div>
                <p className="home-subtitle">
                Interality's Port City is a virtual 3D world where friends,
creators & communities can connect, explore, play & create
                </p>

                <button className="home-button-container"  onClick={
                        () => {
                            window.location.href = 'https://metasp.link/2NUct9q/port-city'
                        }
                    }>
                    <div className="home-button-text">
                            ENTER PORT CITY
                    </div>
                    </button>
            </div>
            </section>
    )
}

export default Section1
