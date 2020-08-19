import React from 'react'
import './Details.css'



function Details() {
    return (
        <>
        <div className="wcontainer">
        <div className="gridone">
            <img src="https://i.imgur.com/eT2Dilj.png" 
            alt="icons" className="icons"></img>
            <h1 className="ws">Who</h1><br />
            <h3 className="description">Our dearest friends & family from near and far </h3>
        </div>
            
        <div className="gridtwo">
            <img src="https://i.imgur.com/esP2j3j.png" 
                    alt="icons" className="icons"></img>
            <h1 className="ws">Where</h1><br />
            <h3 className="description">The <a className="royalton" href="https://www.royaltonresorts.com/royalton-antigua/accommodations/chairman-overwater-bungalows">Royalton</a>, Antigua and Barbuda</h3>
        </div>
      
        <div className="gridthree">
            <img src="https://i.imgur.com/qRn4tTm.png" 
            alt="icons" className="icons"></img>
            <h1 className="ws">When</h1><br />
            <h3 className="description">October 23rd, 2021</h3>
        </div>
            </div>
        </>
       
    )
}

export default Details
