import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

function Nav() {
 
 return (
<nav className='flex justify-between px-8 text-white items-center py-1 bg-transparent' >
    <h2 className="text-2xl capitalaize  font-semibold">ASHH</h2>
    <ul className='flex gap-8 font-semibold text-xl capitalize'>
          <li>
            <Link to="/" className="text-gray-100 hover:text-customColor transition-all capitalize">Home</Link>
          </li>
          <li >
            <Link to="/About" className="text-gray-100 hover:text-customColor transition-all capitalize">It'z_Me</Link>
          </li>
          <li>
            <Link to="/Projects" className="text-gray-100 hover:text-customColor transition-all capitalize">Projects</Link>
          </li>
          <li>
            <Link to="/Skills" className="text-gray-100 hover:text-customColor transition-all capitalize">Skills</Link>
          </li>
          <li>
            <Link to="/Contact" className="text-gray-100 hover:text-customColor transition-all capitalize">Contact Us</Link>
          </li>
        </ul>
</nav>
)
}
export default Nav