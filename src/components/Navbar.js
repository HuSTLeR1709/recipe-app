import React from 'react'
import './nav.css'

const Navbar = () => {
  return (
    <>
    <div className='flex flex-row min-w-1/2 h-2/3border-[2px] m-8 items-center  gap-14 bg-white px-2' >
        <button className=' btn-grp text-sm font-semibold p-2'>Breakfast </button>
        <button className=' btn-grp text-sm font-semibold p-2'>Lunch </button>
        <button className=' btn-grp text-sm font-semibold p-2'>Evening </button>
        <button className=' btn-grp text-sm font-semibold p-2'>Dinner </button>
        <button className=' btn-grp text-sm font-semibold p-2'>All</button>
    </div>


    </>
  )
}

export default Navbar