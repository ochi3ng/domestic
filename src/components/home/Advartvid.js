import React from 'react'
import edenvid from './edenv.mp4'

function Advartvid() {
    return (
     <div className="advert-div">
        <div className="container">
           <div className="p-2 text-center">
           <h1>Simple Life ?</h1>
           </div>
             <div className="m-3 pt-2 pb-4">
             <video className="img-fluid max-width: 100%;" controls autostart autoPlay src={edenvid} type="video/mp4" muted />
             </div>
             <div className="advert-div advert-div-empty">

             </div>
        </div>
     </div>
    )
}

export default Advartvid


