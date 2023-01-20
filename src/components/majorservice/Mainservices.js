import React from 'react'
import Core from './Core.svg'
import Promo from './Promo.mp4'

function Mainservices() {
    return (
        <div>
            <div className="container   ">
                <div className="row core">
                <div className="left-core col-md-7 justify-content-center">
               <h1>  Save your energy</h1>
               <h1>clean clothes on repeat</h1>
           <div className="p-2">
           <h3>
               Getting an Eden laundry plan means we'll pick up your dirty laundry 
               and bring back your clean clothes, folded or ironed, within 48 hours.
               </h3>
           </div>
           <button className="btn btn-success pt-2 pb-2 p-5 "><h2>Get Started</h2></button>
            </div>
            <div className="right-core col-md-5 m-auto text-center">
                <img src={Core} />
            </div>
                </div>
            </div>

            <div className="core-core ">
                <div className="container">
                    <h1 className="pb-3 pt-3 mb-3">How it works</h1>
                    <div className="row">
                        <div className="col-md-5">
                        <div className="choose-service m-2 p-2 m-auto">
                       <h3> Choose your plan</h3>
                       <h5>Sign-up on the Eden Life app. Then choose the meals you want from 
                           our menu forthe week, select how often you'd like your meals, and pay.</h5>
                        </div>
                        <div className="choose-service m-2 p-2">
                       <h3> Choose your plan</h3>
                       <h5>Sign-up on the Eden Life app. Then choose the meals you want from 
                           our menu forthe week, select how often you'd like your meals, and pay.</h5>
                        </div>
                        <div className="choose-service m-2 p-2">
                       <h3> Choose your plan</h3>
                       <h5>Sign-up on the Eden Life app. Then choose the meals you want from 
                           our menu forthe week, select how often you'd like your meals, and pay.</h5>
                        </div>
                        </div>

                        <div className="col-md-7 text-center">
                            <video className="img-fluid max-width: 100%" src={Promo} />
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Mainservices
