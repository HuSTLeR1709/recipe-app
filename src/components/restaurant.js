import React, { useState } from 'react'
import Card from './card'
import Menu from './menuApi.js'

const Restaurant = () => {
    const[data, setData] = useState(Menu);
    const filterItem = (category)=>{
        const updatedlist = Menu.filter((currElem)=>{
            return currElem.category === category;
        });
        setData(updatedlist);

    };
  return (
    <>
    <div className='flex flex-row min-w-1/2 h-2/3border-[2px] m-8 items-center  gap-14 bg-white px-2' >
        <button className=' btn-grp text-sm font-semibold p-2' onClick={() =>filterItem("breakfast")}>Breakfast </button>
        <button className=' btn-grp text-sm font-semibold p-2'onClick={() =>filterItem("lunch")}>Lunch </button>
        <button className=' btn-grp text-sm font-semibold p-2'onClick={() =>filterItem("evening")}>Evening </button>
        <button className=' btn-grp text-sm font-semibold p-2'onClick={() =>filterItem("dinner")}>Dinner </button>
        <button className=' btn-grp text-sm font-semibold p-2' onClick={()=> setData(Menu)}>All</button>
    </div>
    <Card data={data}/>
    </>
  )
}

export default Restaurant;