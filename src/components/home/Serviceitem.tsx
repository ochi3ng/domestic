import React, { useState } from 'react'
import { Iservice } from './Servicespage'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { SettingsBrightness } from '@material-ui/icons';

 type Iprop ={
    item : Iservice
    index : number
}

const Serviceitem =({item,index }:Iprop) =>{
    const emojis = [`🥘`,`🧺`,`🏠`,`🎁`]
    const [bgcolor,setBgColor] = useState<string | null>(null)
   
    const handleEvent =() : void=>{
        setBgColor(item.btndiv)
    }
    const handlemouseleave = () :void =>{
        setBgColor('')
    }
    return (
        <div className={`col-md-5  mt-3 m-2 p-2 service-item-d`} style={{backgroundColor:`${item.color}`}} 
        onMouseEnter={()=> handleEvent() }
        onMouseLeave={()=>handlemouseleave()}>
          <div  className="p-4 service-item">
          <h2>{emojis[index]}</h2>
            <h3>{item.title}</h3>
            <h5>{item.description}</h5>

            <div className="item-btn-div m-2" style={{backgroundColor:`${bgcolor}`}}  >
            <button className="item-btn">explore </button><ArrowForwardIcon />
            </div>
          <div>
          <img className="img-fluid max-width: 100%;" src={item.icon} />
          </div>
          </div>
        </div>
    )
}

export default Serviceitem
