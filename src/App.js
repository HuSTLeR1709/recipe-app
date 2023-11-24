import React from 'react'
import Navbar from './components/Navbar';
import Card from './components/card'; 
import Restaurant from './components/restaurant';

const App = () => {
  return (
    <>
   <div className='wrapper w-full min-h-screen bg-yellow-100 flex flex-col justify-start items-center'>
  
   <Restaurant/>
    </div>
    </>
  )
}

export default App;