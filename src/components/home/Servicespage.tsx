
import React from 'react'
import Serviceitem from './Serviceitem'
import gift from './gift.jpg'
import food from './food.webp'
import cleaning from './cleaning.jpg'
import laundry from './laundry.jpg'


export type Iservice ={
    title : string
    description : string
    image : string
    color : string
    btndiv : string
    icon : string
    
}

const services : Iservice[] = [
    {
        title : 'Food',
        description : "Your chef-cooked meals, delivered to you. Daily or weekly.",
        image : "image",
        color : "rgb(196, 235, 189)",
        btndiv : 'rgb(166, 243, 152)',
        icon : food
        
        
       
    },
    {
        title : 'Laundry',
        description : "Your clothes, picked up, laundered and delivered to you in 48 hours or less.",
        image : "image",
        color : "rgb(180, 185, 228)",
        btndiv :'rgb(80, 96, 240)',
        icon :laundry
        
    },
    {
        title : 'Home cleaning',
        description : "Professional cleaning at your doorstep. Up to thrice a week",
        image : "image",
        color : "rgb(232, 245, 198)",
        btndiv :'rgb(194, 243, 71)',
        icon :cleaning
    },
    {
        title : 'Gifts',
        description : "Gift cards and gift boxes for every occasion, right at your fingertips.",
        image : "image",
        color : "rgb(114, 210, 240)",
        btndiv :'rgb(46, 196, 241)',
        icon :gift
    }
]

function Servicespage() {
    return (
        <div className=" service-page p-5" >
            <div className="container">
            <div className="row">
                <div className="col-md-5 pt-5">
               <h2> Services</h2>
               <p>Convenience you can depend on.</p> 
               <p> Always.</p>

                </div>
                <div className="col-md-7 ">
                   <div className="row">
                {services.map((item,index)=><Serviceitem index={index} item={item}/>) }
                  
                   </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Servicespage
