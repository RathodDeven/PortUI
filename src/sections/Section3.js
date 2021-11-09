import React from 'react'
import nftvideo from '../assets/nft.mp4'

export default function Section3() {
    return (
        <section className="bg-black pt-3">
          <div className="title ml-10">
            Next-Gen NFTs
          </div>
          <div className="flex-container" >
            <video className="bg-video" src={nftvideo} autoPlay loop muted/>
            <video className="bg-video" src={nftvideo} autoPlay loop muted/>
            <video className="bg-video" src={nftvideo} autoPlay loop muted/>
          </div>
        </section>
    )
}
