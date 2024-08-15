import React from 'react'
import Button from './Button';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const buttonList = ['All', 'Music', 'Game Show', 'Tamil', 'Live', 'Audition', 'Web Series', 'Theatre', 'Telugu Cinema', 'Dance', 'Trending', 'Cokking', 'Comedy'];

const ButtonList = () => {
  return (
    <div className='flex'>
      <div className='m-5 cursor-pointer rounded-full bg-gray-300 p-3'><GrFormPrevious /></div>
      {buttonList.map(button => (
          <Button name={button} />
      ))}
      <div className='m-5 cursor-pointer rounded-full bg-gray-300 p-3'><GrFormNext /> </div>
    </div>
  )
}

export default ButtonList;