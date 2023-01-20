import React,{useState} from 'react'
import Quizanswers from './Quizanswers'


function Quetions() {
    const pp = [1,2,3,4]
  
    const [p,setP]= useState<undefined|number>()
    const [count,setCount]=useState<number>(1)


    const productid =(id :number) =>{
   setP(id)
   setCount(count +1)
       
    }
    return (
        <div className="quiz">
           <div className="container">
               <div className="row">
                   <div className="col-md-6 text-center m-auto pb-4 pt-4">
                       <h2>You Have Quetions ?</h2>
                       <h2>We have Answers.</h2>
                   </div>
                   <div className="col-md-6 pt-4">
                     {pp.map((item,index)=> <Quizanswers item={productid} id={index}  p={p} count={count}/>)}
                     
                      
                       </div>

               </div>
           </div>
        </div>
    )
}

export default Quetions
