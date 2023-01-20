import React,{useState,useEffect} from 'react'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import MaximizeOutlinedIcon from '@material-ui/icons/MaximizeOutlined';

function Quizanswers({item ,id,p,count}) {
    const [more,setMore]= useState(true)


    const Tooglediv =()=>{
        if(p==id ){
            setMore(!more)
        }
        else{
            setMore(true)
          
        }
    }
   useEffect(()=>{
    Tooglediv()
   },[count])
    return (
        <div>
        <div className="d-flex justify-content-between">
            <h4>Who We Are ?</h4>
           <div className="tooglebtn" onClick={()=>item(id)}> {more ? <CloseOutlinedIcon /> :  < MaximizeOutlinedIcon />}</div>
           
        </div>
        <div style={{display:`${more ? 'none' : 'inline'}`}}>
            <p>
            Don't focus on the failures of yesterday, start today with positive thoughts and
            expectations.r home. The app takes
            Remember, today is the tomorrow you worried about yesterday. DALE CARNEGIE. 
            Work for that feeling that you have accomplished something…
            Don't focus on the failures of yesterday, start today with positive thoughts and
            expectations.r home. The app takes
            </p>
        </div>
    </div>
    )
}

export default Quizanswers
