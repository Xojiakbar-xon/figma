import React from 'react';
import { ButtonStyled } from './ButtonStyled';

export default function Button() {
  return (
    <ButtonStyled>
        <div className='btn--div'>
        <button type='button'>Save</button>
        <button type='button'>Cancel</button>
        </div>
    </ButtonStyled>
  )
}
