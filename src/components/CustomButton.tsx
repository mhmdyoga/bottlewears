import Link from 'next/link'
import React from 'react'

const CustomButton = ({onClick, title, type, style, onKeyDown}:CustomButtonProps ) => {
  return (
    <div>
        <div>
            <button onClick={onClick} type={type} onKeyDown={onKeyDown} className={style}>{title}</button>
        </div>
    </div>
  )
}

export default CustomButton