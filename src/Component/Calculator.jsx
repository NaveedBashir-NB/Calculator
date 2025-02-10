import React from 'react'
import Button from './Button'
import {useState} from 'react'

const Calculator = () => {
    const [value, setValue] = useState ("")

    const display =(event)=>{
        setValue(value + event.target.innerHTML)
    }

    const equal =()=>{
        setValue(eval(value))
    }
    
    const percent =()=>{
        setValue(eval(value)/100)
    }
    
    const allclear =()=>{
        setValue("")
    }   

    const del =()=>{
        setValue(value.slice(0, -1))
    }

  return (  
    <div className='w-3xs h-[420px] bg-gray-800 mx-auto mt-24 drop-shadow-[0_0_5px_rgba(0,0,0,0.8)] rounded-xl flex flex-col'>
        <div className='flex'>
            <input type="text" placeholder='0' value={value} className='w-[230px] h-[60px] text-4xl border border-gray-500 bg-gray-700 rounded-xl mx-auto my-5 text-right text-white p-1.5 focus:outline-0 focus:caret-gray-700'/>
        </div>
        <div className='flex flex-wrap justify-center'>
        <Button press={allclear} text="AC"/>
        <Button press={del} text="DEL"/>
        <Button press={percent} text="%"/>
        <Button press={display} text="/"/>
        <Button press={display} text="7"/>
        <Button press={display} text="8"/>
        <Button press={display} text="9"/>
        <Button press={display} text="*"/>
        <Button press={display} text="4"/>
        <Button press={display} text="5"/>
        <Button press={display} text="6"/>
        <Button press={display} text="-"/>
        <Button press={display} text="1"/>
        <Button press={display} text="2"/>
        <Button press={display} text="3"/>
        <Button press={display} text="+"/>
        <Button press={display} text="00"/>
        <Button press={display} text="0"/>
        <Button press={display} text="."/>
        <Button press={equal} text="="/>
        </div>
    </div>
  )
}

export default Calculator