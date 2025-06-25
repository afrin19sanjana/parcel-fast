import React from 'react'
import { Link, NavLink } from 'react-router'
import ParcelFastLogo from '../shared/ParcelFastLogo'
import NavMenu from '../shared/NavMenu'
import { LuCircleArrowOutUpRight } from "react-icons/lu";
const Navbar = () => {
    const navInfo = <>
        <NavLink>Services</NavLink>
        <NavLink>Coverage</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Be a Rider</NavLink>
    </>
    return (

        <div className="container mx-auto navbar bg-base-100 shadow-sm urbanist">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2  shadow">
                        {navInfo}
                    </ul>
                </div>
                <NavLink className="btn btn-ghost text-xl">
                    <ParcelFastLogo></ParcelFastLogo>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navInfo}
                </ul>
            </div>
            <div className="navbar-end gap-4 items-center">
                <Link><button>Sign In</button></Link>
                <Link><button>Be a Rider</button></Link>
                <Link><button>
                    <LuCircleArrowOutUpRight />
                </button></Link>
            </div>

            <div className="">
                
            </div>
        </div>
    )
}

export default Navbar