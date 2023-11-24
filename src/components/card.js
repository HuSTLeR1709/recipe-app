import React, { useState } from 'react'


const Card = ({data}) => {
    // console.log(data);
  return (
    <>
    <div className='card-container w-10/12 flex flex-row gap-8 flex-wrap pr-6 pl-6 pb-7  items-center justify-center'>
    {data.map((currElem)=>{
        return(
            <>
     <div className=' min-h-[400px] w-[250px] bg-red-300 border-black border-[2px] flex flex-col p-4 gap-2' key={currElem.id}>
    <span className=' border-2 w-8 p-2 border-black rounded-r-lg'>{currElem.id}</span>
    <p className='font-semibold text-3xl text-red-500'>{currElem.name} </p>
    <p className='font-semibold text-xl'>{currElem.price}</p>
    <img src={currElem.image} alt='' className='h-[200px] w-11/12 pl-5 object-cover'></img>
    <p className=' font-medium'> {currElem.description}</p>

     </div>
            </>
            
        )
     
    })}
    

    </div>


    </>
  )
}

export default Card;