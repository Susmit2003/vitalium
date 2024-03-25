import React from 'react'
import style from  './Navbar.module.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.logo}>LOGO</div>
        <div className={style.left}>
            <input className={style.searchBox} type='text' placeholder='Search...'/>
        </div>
        <div className={style.center}>
            <ul className={style.list}>
                    <li className={style.topListItem}><Link className={style.link} to="/">Home</Link> </li>
                    <li className={style.topListItem}><Link className={style.link} to="/">Blogs</Link></li>
                    <li className={style.topListItem}><Link className={style.link} to="/contact">Product</Link></li>
                    <li className={style.topListItem}><Link className={style.link} to="/write">About</Link></li>
            </ul>
        </div>
        <div className={style.right}>
            <ul className={style.list}>
                <li className={style.topListItem}><Link className={style.link} to="/login">Login</Link></li>
                <li className={style.topListItem}><Link className={style.link} to="/register">Register</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar