import React from 'react'
import logo from '../assets/instagram-icon.jpg';

const Section5 = () => {
    return (
        <section className="section5">
        <div className="flex-container">
            <a href="https://metasp.link" target="_blank"><img src={logo} alt="logo" className="social-icon" /></a>
            <a href="https://metasp.link" target="_blank"><img src={logo} alt="logo" className="social-icon" /></a>
            <a href="https://metasp.link" target="_blank"><img src={logo} alt="logo" className="social-icon" /></a>

        </div>
        <div className="footer">
            <div className="footer-page-list">
                <div><a href="https://metasp.link" target="_blank" style={{color: 'white'}}>CAREERS</a></div>
                <div><a href="https://metasp.link" target="_blank" style={{color: 'white'}}>CREATORS</a></div>
                <div><a href="https://metasp.link" target="_blank" style={{color: 'white'}}>PRESS</a></div>
                <div><a href="https://metasp.link" target="_blank" style={{color: 'white'}}>COMPANY</a></div>
                <div><a href="https://metasp.link" target="_blank" style={{color: 'white'}}>BLOGS</a></div>
                <div><a href="https://metasp.link" target="_blank" style={{color: 'white'}}>SUPPORT</a></div>
                </div>

            <div className="footer-text-container">
                <h1>FUTURE CULTURE HAPPENS HERE. </h1>
                <p>Interality is a metaverse platform and virtual world for friends, communities, creators, 
                    and brands to connect, grow, play, and share culture together within a beautiful and immersive 3D experience.
                </p>
                </div>
        </div>
        </section>
    )
}

export default Section5
