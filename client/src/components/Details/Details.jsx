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
            <img src="https://i.imgur.com/MGBWo2t.png" 
                    alt="icons" className="icons"></img>
            <h1 className="ws">Where</h1>
            <h3 className="description">The Royalton, Antigua and Barbuda</h3>
        </div>
      
        <div className="gridthree">
            <img src="https://i.imgur.com/qRn4tTm.png" 
            alt="icons" className="icons"></img>
            <h1 className="ws">When</h1>
            <h3 className="description">October 23rd, 2021</h3>
        </div>
            </div>
        </>
       
    )
}

export default Details
