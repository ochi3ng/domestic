import React,{useEffect, useState} from 'react'
import phonep from './phonep.svg'

function Landingbanner():JSX.Element {
    
    const services : string[] =['Home Cleaning','Laundry day',' Cooking ','Market runs']
    const [count,setCount]= useState<number>(0)
    const scolors :string[] = ['blue','green','orange','purple']
  


    const Elements=()=>{
        setTimeout(()=>{
            if(count == services.length-1){
                setCount( 0)   
            }
            else{
                setCount(count +1)
            }
           
        },2000)
    }
 useEffect(()=>{
     Elements()
 },[count])
    return (
        <div className="container ">
            <div className=" landing-banner row ">
            <div className="landind-left col-md-6 justify-content-center m-auto ">
                <h1> Say goodbye to</h1>
                <div className="services-d" style={{color:scolors[count]}}>
                <h1 >{services[count]}</h1>
            
                </div>
                <h1>forever</h1>

               <div className="p-div">
               <h4>We take care of your chores, so you can get more </h4>
                 <h4> out of life. It's what you've always dreamed of.</h4>
               </div>
                 <div>
                     <button className="btn-start p-3 text-center">Start Your new Life</button>

                 </div>
            </div>
            <div className="landind-right col-md-6 pb-4 mb-4">
              <div className="outer">
                  <div className="inner">
                     <img src={phonep} />
                  </div>
              </div>
            </div>
        </div>
        </div>
    )
}

export default Landingbanner
