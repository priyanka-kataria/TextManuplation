import React from 'react'
import './navbar.css'
// import {PropTypes} from 'react'

import { Link } from 'react-router-dom'
export default function Navbar ( props ) {

  return (
    <>
      <div className={ `spotify-nav bg-${ props.mode }` }>
        <li className="img-text" ><a href="#"  className={`text-${ props.mode=='light'?'dark':'light' }`}>{ props.title }</a></li>
        <li><a href="#" className={`text-${ props.mode=='light'?'dark':'light' }`}>Home</a></li>
        <li><a href="#"  className={`text-${props.mode=='light'?'dark':'light' }`}>About</a> </li>
        <div class="form-check form-switch">
          <input className="form-check-input" type="checkbox"onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked" checked />
        <label className={`form-check-label text-${props.mode=='light'?'dark':'light'}`} htmlFor="flexSwitchCheckChecked">{props.text}</label>
        </div>
      </div>

      {/* <li>  <button className='btn'> <i class="fa-solid fa-right-from-bracket"></i>Sign Out</button></li>  */ }

    </>
  )
}
