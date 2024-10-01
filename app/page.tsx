import React from 'react'
import Card from './components/card'

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2 text-center mt-10">Student Identification Card</h1>

      <div className='grid grid-cols-3 divide-x'>

        <div className='flex flex-col justify-center bg-blue-300 transition-transform duration-300 transform hover:scale-105 cursor-pointer hover:bg-slate-500 hover:text-slate-100 p-6 w-50 h-45 my-10 mx-5 rounded-xl drop-shadow-md' >
          <Card name='Sheza'
            age={ 19 }
            rollnumber='00298640'
            class='Monday 2 to 5' />
        </div>

        <div className='flex flex-col justify-center bg-blue-300 transition-transform duration-300 transform hover:scale-105 cursor-pointer hover:bg-slate-500 hover:text-slate-100 p-6 w-50 h-45 my-10 mx-5 rounded-xl drop-shadow-md'>
          <Card name='Sahil'
            age={ 21 }
            rollnumber='0040789'
            class='Monday 2 to 5' />
        </div>

        <div className='flex flex-col justify-center bg-blue-300 transition-transform duration-300 transform hover:scale-105 cursor-pointer hover:bg-slate-500 hover:text-slate-100 p-6 w-50 h-45 my-10 mx-5 rounded-xl drop-shadow-md'>
          <Card name='Sameer'
            age={ 22 }
            rollnumber='0056389'
            class='Monday 2 to 5' />
        </div>
      </div>
    </>
  )
}

export default Home

