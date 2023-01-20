import ViewHeadlineRoundedIcon from '@material-ui/icons/ViewHeadlineRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useState } from 'react';
import {Link} from 'react-router-dom'


function Mainnavbar() : JSX.Element {
    const [dropicon,setDropicon] = useState<boolean>(false)

    const handleclose =()=>{
        setDropicon(!dropicon)
    }


    return (
   <div className="d-flex nav-bar sticky-top justify-content-between p-2 pt-0 pb-0 m-auto">
  <div className=" pt-2 col-md-6 p-4 pt-0 pb-0"><h1>Domestic</h1></div>
 
  <div className="col-md-6">
      {/* Desktop  view  nav */}
      <ul className="our-product   justify-content-around pt-2 ">
          <li className="services"><h3>Services</h3> 
          <div className="pop-up  ">
           <div className="pop-item d-flex more-div">
        
               <div className="text-center justify-content-center m-auto p-2 ">
                   <h5>
                       Get to know more about us
                   </h5>
               </div>
               <div className="list-div p-2">
                  <div className="m-2 p-2 list-style" >
                   <Link to="/services/loundry"> <h5>Loundry</h5></Link>
                   <Link to="/services/cleaning"> <h5>Cleaning</h5></Link>
                   <Link to="/services/gift"> <h5>Gift</h5></Link>
                   <Link to="/services/food"> <h5>Food</h5></Link>
                    </div >
               </div>
            
           </div>
           
       </div>
          </li>
         <Link to="/"> <h3><li>Companies</li></h3></Link>
          <h3><li>Pricing</li></h3>
          <button className="btn-start p-1 get-started">Get Started</button>
      </ul>

      {/* mobile view nav */}
      {/* " mob-nav  leftp" */}
      <div className={dropicon ? 'leftp': 'mob-nav'}>
      <ul className="bg-info  pt-2 mob " >
          <li className=""><h3>Services</h3> 

           <div className=" ">
               <div className=" p-2">
                  <div className="m-2 p-2 list-style"  >
                  <Link to="/services/loundry" onClick={handleclose}> <h5>Loundry</h5></Link>
                    <Link to="/services/cleaning" onClick={handleclose}> <h5>Cleaning</h5></Link>
                    <Link to="/services/gift" onClick={handleclose}> <h5>Gift</h5></Link>
                    <Link to="/services/food" onClick={handleclose}> <h5>Food</h5></Link>
                    </div >

            
           </div>
           
       </div>
          </li>
          <Link to="/" onClick={handleclose}> <h3><li>Companies</li></h3></Link>
          <h3><li>Pricing</li></h3>
          <button className="btn-start p-1 get-started">Get Started</button>
      </ul>
      </div>
  </div>
  <div className="nav-icon d-flex-end pt-4 "><button onClick={()=>setDropicon(!dropicon)}>
     {dropicon ?  <CloseRoundedIcon /> : <ViewHeadlineRoundedIcon />}
      </button></div>
    </div>
    )
}

export default Mainnavbar
