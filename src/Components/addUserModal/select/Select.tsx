import React from 'react'
import styled from 'styled-components'
export default function Select() {
  return (
    <SelectStyled>
    <section className='select_heder' >
   <p>Field</p>
   <i className='icon ccc'></i>
    </section>
    </SelectStyled>
  )
}
const SelectStyled = styled.div`
.select_heder{
  
  position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    background: #f6f6f6;
    border-radius: 8px;
    max-width: 422px;
    p{
      margin: 0;
    }
    i{
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      display: inline-block;
      width: 12px;
      height: 6px;

    }
}
`

