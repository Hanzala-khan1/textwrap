import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const nabbar = () => {
        const navbar1 = document.getElementsByClassName('navbar1')[0]
        window.addEventListener('scroll', () => {
            navbar1.classList.toggle('scroll', window.scrollY > 60)
        })
    }
    const hamtt = () => {

        const res = document.getElementsByClassName("res")[0]
        res.classList.toggle('active')


    }







    return (
        <div>


            <header>
                <nav className="navbar1" onScroll={nabbar}>
                    <div className="logo">
                       <h1 className='mainhl'>TextTutils</h1>

                    </div>
                    <div className="menubar">
                        <ul className="res">
                            <li> <Link to="/" className='lin'>Home</Link> </li>
                            <li><Link to="/About" className='lin'>About</Link> </li>
                            <li><Link to="/Contact" className='lin'>Contact Us</Link> </li>
                          
                        
                        </ul>
                    </div>
                    <div className="ham" onClick={hamtt}>
                        <i className="h"> </i>
                        <i className="h"> </i>
                        <i className="h"> </i>
                    </div>

                </nav>

            </header>

        </div>
    )
}
