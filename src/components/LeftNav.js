import React from 'react'
import "./leftnav.css"
import { ReactComponent as HomeIcon } from '../assets/home.svg';
const LeftNav = () => {
    return (
        <>
        <div className="leftnav-container">
            <div className="icon-container">
                <HomeIcon className="leftnav-icon" />
                <div className="leftnav-text">Home</div>
            </div>
            <div className="icon-container">
                <HomeIcon className="leftnav-icon" />
                <div className="leftnav-text">Me</div>
            </div>
            <div className="icon-container">
                <HomeIcon className="leftnav-icon" />
                <div className="leftnav-text">Events</div>
            </div>
            <div className="icon-container">
                <HomeIcon className="leftnav-icon" />
                <div className="leftnav-text">Market</div>
            </div>

            <div className="icon-container-last">
                <HomeIcon className="leftnav-icon" />
                <div className="leftnav-text">Create with us</div>
            </div>
        </div>
        </>
    )
}

export default LeftNav
