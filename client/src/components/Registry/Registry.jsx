import React from 'react'
import './Registry.css'

function Registry() {
    return (
        <div className="registry">
            <h4 className="tygifts">We thank you for any gifts you decide to give us. Here is a list of places we enjoy...</h4>
                <div className="registrylist">
            <a href="https://www.amazon.com/">
                    <img src="https://i.imgur.com/XPsQ2AV.png" 
                    alt="amazon" className="amazon"></img>
                </a><br />
                <a href="https://www.potterybarn.com/">
                    <img src="https://i.imgur.com/e1jxIus.png" alt="potterybarn" className="potterybarn"></img>
                </a><br />
                <a href="https://www.williams-sonoma.com/">
                    <img src="https://i.imgur.com/P4Sbktc.png" 
                    alt="williamssonoma" className="williamssonoma"></img>
                </a><br />
                <a href="https://www.crateandbarrel.com/">
                    <img src="https://i.imgur.com/hqgflRC.png" 
                    alt="crateandbarrel" className="crateandbarrel"></img>
                </a><br />
                <a href="https://www.target.com/">
                    <img src="https://i.imgur.com/5zm0swf.png" 
                    alt="target" className="target"></img>
                </a><br />
                <a href="https://www.nordstrom.com/">
                    <img src="https://i.imgur.com/KxePbVc.png" 
                    alt="nordstrom" className="nordstrom"></img>
                </a>
                </div>
        </div>
    )
}

export default Registry
