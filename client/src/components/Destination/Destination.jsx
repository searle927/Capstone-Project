import React from 'react'
import './Destination.css'


function Destination() {
    return (
        <>
        <div className='destinationcontainer'>
            <h1 className="destination">The Destination</h1>
            <h2 className='destinationloc'>The Royalton, Atigua and Barbuda</h2>
            <h3 className="destinationmessage">As you all know very well, Ryan and I love to travel. So we thought it would be very fitting that our wedding be in one of the most beautiful places we traveled to. We suggest getting here a couple days early because we'd love to hang out and spend time with everyone before the wedding day. Please <a className="link" href="https://www.royaltonresorts.com/royalton-antigua/accommodations/chairman-overwater-bungalows">click here</a> to book your hotels if you'll be staying at the Royalton as well. <br /><br /> We are super excited to see everyone at the wedding!</h3><br />
        
        <div className="pic-container">
        <img src="https://i.imgur.com/PUW62JA.png?1" className="destpics" alt="" />

        <img src="https://i.imgur.com/0qjU7pE.png" className="destpics" alt="" />

        <img src="https://i.imgur.com/bVd9JqU.png?1" className="destpics" alt="" />
        </div>
        </div>
        </>
    )
}

export default Destination
