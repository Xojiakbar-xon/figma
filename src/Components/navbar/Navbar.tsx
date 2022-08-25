import React from 'react'
import { NavbarStyle } from './NavbarStyle'
import EmailIcon from '../../assets/icon/EmailIcon'
import MSG from "../../assets/icon/Msgicon"
import Full from "../../assets/icon/Fullscreenicon"

export default function Navbar() {
  return (
    <NavbarStyle>
        <section className='navbar'>
            <div className='text--div'>
                <h1>Users</h1>
            </div>
            <div className='icon--div'>
                <div className='icon icon-msg'>
                  <EmailIcon/>
                </div>
                <div className='back--icon'>
                  <MSG/>          
                </div>
                <div className='icon icon-full'>
                  <Full/>
                </div>
            </div>
        </section>
    </NavbarStyle>
  )
}
