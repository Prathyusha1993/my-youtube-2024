import React from 'react'

const Button = ({name}) => {
  return (
    <div className='m-2 mt-5'>
        <button className='px-5 py-2 bg-gray-200 w-full rounded-lg'>{name}</button>
    </div>
  )
}

export default Button;