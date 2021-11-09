import React from 'react'
import "./topnav.css";
const TopNav = () => {
    return (
        <div className="topnav-container">
            <div className="topnav-left">
                interality
            </div>
            <div className="topnav-right" onClick={()=>{window.location.href = "https://metasp.link/2NUct9q/port-city";}}>
                    <div className="sign-text"> Sign In</div>
            </div>
        </div>
    )
}

export default TopNav
