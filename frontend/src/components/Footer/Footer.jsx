import React from 'react'
import style from './Footer.module.css'
const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.left}>
                    <h1 >
                        LOGO
                    </h1>
                    <p className={style.desc}>
                        There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don’t look even slightly believable.
                    </p>
                    <div className={style.socialIcon}>
                        <div className={style.icon}>facebook</div>
                        <div className={style.icon}>Instagram</div>
                        <div className={style.icon}>Twitter</div>
                        <div className={style.icon}>Pinterest</div>
                    </div>
                </div>

                <div className={style.center}>
                    <h3 style={{ marginBottom: '30px' }}>Useful Links</h3>
                    <ul className={style.list}>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Blogs</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={style.right}>
                    <h3>Contact</h3>
                    <div className={style.contact}></div>
                </div>
            </div>
        </div>
    )
}

export default Footer