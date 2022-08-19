import React from 'react'

//
import { InputStyled } from './InputStyled'

export default function Input() {
  return (
    <InputStyled>
        <input type="text" className='input' placeholder='Full name *'/>
        <div className='icon icon-clear'></div>
    </InputStyled>
  )
}
