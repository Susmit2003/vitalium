import React from 'react'

function Sidebar() {
  return (
    <div>
      <div className='w-72 p-4 shadow-lg shadow-slate-400 m-2 bg-[#e0dfdf]'>
        <h1 className='text-xl font-bold mb-5 border-b-2 border-black p-2'>Catagory</h1>
        <ul>
            <li className='font-semibold text-lg flex pl-2 items-center h-[50px] w-full hover:bg-white cursor-pointer rounded-md'>
                All
            </li>

            <li className='font-semibold text-lg flex pl-2 items-center h-[50px] w-full hover:bg-white cursor-pointer rounded-md'>
                Black Tea
            </li>

            <li className='font-semibold text-lg flex pl-2 items-center h-[50px] w-full hover:bg-white cursor-pointer rounded-md'>
                Black Tea
            </li>

            <li className='font-semibold text-lg flex pl-2 items-center h-[50px] w-full hover:bg-white cursor-pointer rounded-md'>
                Black Tea
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
