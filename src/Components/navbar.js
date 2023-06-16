import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo192.png';

function Navbar() {
    return (
        <nav className='navbar'>
            <Link to='/'><img className='logo' src={logo} alt={"logo-react"}/></Link>
        <ul>
            <li><Link to='/about' className='navlink'>About</Link></li>
            <li><Link to='/contact' className='navlink'>Contact</Link></li>
            <li><Link to='/projects' className='navlink'>Projects</Link></li>
        </ul>
        </nav> 

    );
}

export default Navbar;