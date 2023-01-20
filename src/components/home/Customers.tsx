import React from 'react'
import avatar from "./avatar.jpg"
import pic1 from './pic1.png'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.png'
import Singlecustomer from './Singlecustomer'


export type Iprop={
    name :string
    handle :string
    review :string
    avatar :string

}

function Customers() {
    const review : Iprop[] = [{
        name : 'Tom keen',
        handle : '@tomkeen',
        avatar : avatar,
        review :' @ouredenlife helps to improve your life expectancy and reduce your stress levels.'
    },
    {
        name : 'Lyn Gakuyo',
        handle : '@lyngakuo',
        avatar : pic1,
        review :'because they know that if the Constitution is truly to constitute the nation, it must trump some majority preferences.  their reduce your stress levels.'
    },
    {
        name : 'Brenda Hanzes',
        handle : '@brendahanzes',
        avatar : pic2,
        review :'Americans  With all the chaos that is accept judicial supervision of their stress levels.'
    },
    {
        name : 'Judy Smak',
        handle : '@judysmak',
        avatar : pic3,
        review :'Popularity makes no law invulnerable to invalidation. Americans accept judicial supervision of their expectancy and reduce your stress levels.'
    },
    {
        name : 'Ryan Doe',
        handle : '@ryandoe',
        avatar : pic4,
        review :'With all the chaos reduce your stress levels.'
    },
    {
        name : 'Cate Smith',
        handle : '@catesmith',
        avatar : pic1,
        review :' democracy - judicial review of popular but possibly unconstitutional statutes - ..'
    },
]

    return (
        <div className="customer-section">
         <div className="container ">
             <div className="row p-3 d-flex">
             {review.map((item,index)=>  <Singlecustomer item={item}/>)}
             </div>
         </div>
        </div>
    )
}

export default Customers
