import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.headerTitles}>
                <span className={style.headersm}>Break Time .....</span>
                <span className={style.headerTitleLg}>Take Your Drink</span>
            </div>
            <img className={style.headerImg} src="images/header.jpg" alt="" />
        </div>
    )
}

export default Header