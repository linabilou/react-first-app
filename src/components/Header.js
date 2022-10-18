import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
   <div>
        <div>
            <img
                className='ui image'
                alt='logo speakers 237'
                src='/images/banner.jpg'
            />
        </div>
        <>
            <nav className='ui huge menu'>
                <div>
                    <Link to="/"  className='item'>
                        Acceuil
                    </Link>
                </div>
               <div>
                    <Link to="/message"  className='item'>
                        Laisser un message
                    </Link>
               </div>

               <div>
                    <Link to="/about"  className='item'>
                        A propos
                    </Link>
               </div>
                
                <div  className='right menu'>
                    <Link to="/donate"  className='item '>
                        Faire un don
                    </Link>
                </div>
            </nav>
        </>
        <Outlet />
   </div>
  )
}

export default Header