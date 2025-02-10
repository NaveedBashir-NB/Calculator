import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.press} className='font-bold w-[50px] h-[50px] bg-gray-800 drop-shadow-[0_0_5px_rgba(0,0,0,0.8)] rounded-full text-white flex justify-center py-3 m-1.5'>{props.text}</button>
  )
}

export default Button