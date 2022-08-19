import React from 'react'
import { NavbarStyle } from './NavbarStyle'

export default function Navbar() {
  return (
    <NavbarStyle>
        <section className='navbar'>
            <div className='text--div'>
                <h1>Users</h1>
            </div>
            <div className='icon--div'>
                <div className='icon icon-msg'></div>
                <div className='back--icon'>
                <div className='icon icon-notify'></div>
                </div>
                <div className='icon icon-full'></div>
            </div>
        </section>
    </NavbarStyle>
  )
}
