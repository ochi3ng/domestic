import React from 'react'
import paystack from './paystack.png'
import flutterwave from './flutterwave.png'


function Partners() {
    return (
        <div className="partners-div">
           <div className="container">
              <div className="row p-4 ">
                  <div className="col-md-6 text-center m-auto">
                      <h1>Our Partners</h1>
                  </div>
                  <div className="col-md-6 d-flex justify-content-between">
                    
                       <div>  
                            <h2><img className="img-fluid max-width: 100%;" src={paystack}/></h2>
                            </div>
                         <div> 
                             <h2><img className="img-fluid max-width: 100%;" src={flutterwave}/></h2>
                             </div>
                    
                   
                     
                  </div>
              </div>
           </div>
        </div>
    )
}

export default Partners
