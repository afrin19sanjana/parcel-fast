import React from 'react'
import { NavLink } from 'react-router'

const NavMenu = () => {
    const navItems =
        <>
          <ul className='flex space-x-6'>
            <li><NavLink>Services</NavLink></li>
            <li><NavLink>Coverage</NavLink></li>
            <li><NavLink>About Us</NavLink></li>
            <li><NavLink>Pricing</NavLink></li>
            <li><NavLink>Be a Rider</NavLink></li>
          </ul>

        </>
    return (
        <>
        {navItems}
        </>
    )
}

export default NavMenu


