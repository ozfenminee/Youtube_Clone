import React from 'react'
import dataFilter from '../assets/data/dataFilter'

export const Filter = ({setLetter}) => {
  return (
    <div className='flex items-center overflow-x-auto'>
      {
        dataFilter.map((data, i) => (
          <div onClick={()=>setLetter(data.name)}
            key={i} 
            className='bg-gray-100 text-sm cursor-pointer hover:bg-gray-200 px-3 py-1 mx-2 rounded-lg'
          >
            {data.name}  {/* Buraya data'nın ilgili özelliğini ekleyin */}
          </div>
        ))
      }
    </div>
  )
}

export default Filter
