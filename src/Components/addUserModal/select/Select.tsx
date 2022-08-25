import React from 'react'

import styled from 'styled-components'
export default function 
() {
  return (
    <SelectStyled>
    <section className='select_heder' >
   <p>Field</p>
   <i className='ccc'></i>
    </section>
    </SelectStyled>
  )
}
const SelectStyled = styled.div`
.select_heder{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    background: #f6f6f6;
    height: 17px;
    border-radius: 8px;
    max-width: 422px;
    i{
        padding-right: 25px;
    }
}
`
