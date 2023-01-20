import React from 'react'
import gplay from './gplay.svg'
import aplay from './aplay.svg'
import phonep from './phonep.svg'
import playstore from './playstore.svg'
import Projectfooter from './Projectfooter'
function Playstore() {
    return (
        <div className="playstore ">
          <div className="container ">
          <div className="row justify-content-center pt-4 play-row bg-info">
              <div className="col-md-6  text-center m-auto">
            <h1>  Get the app!</h1>
            <h4>Sign up on the Domestic app. Be happy.</h4>
            <div className="row justify-content-between ">
              <div className="col-md-6 pb-2 pt-3">
              <img  src={aplay}/>
              </div>
             <div className="col-md-6 pb-2 pt-3">
             <img  src={gplay}/>
             </div>
            </div>
              </div>
              <div className="col-md-6  ">
              <div className=" bg-success">
          <div className="play-phone "> 
           <img className="img-fluid max-width: 100%;" src={playstore} /> 
              </div>
          </div>
              </div>

          </div>
        
          </div>
        </div>
    )
}

export default Playstore
