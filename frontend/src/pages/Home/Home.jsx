import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import style from './Home.module.css'
import Category from '../../components/Category/Category'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <div className={style.popularBlogs}>
                <h2>Let's take a read with your drink...</h2>
                <div className={style.blogSlider}>
                    <div className={style.blogBox}>
                        <img src="images/header.jpg" alt="" />
                        <h3>jbfljsbf</h3>
                    </div>
                    <div className={style.blogBox}>
                        <img src="images/header.jpg" alt="" />
                        <h3>jbfljsbf</h3>
                    </div>
                    <div className={style.blogBox}>
                        <img src="images/header.jpg" alt="" />
                        <h3>jbfljsbf</h3>
                    </div>
                    <div className={style.blogBox}>
                        <img src="images/header.jpg" alt="" />
                        <h3>jbfljsbf</h3>
                    </div>
                </div>
                <div className={style.readMore}>
                    <span>Read More..</span>
                </div>
            </div>
            <div className={style.section3}>
                <Category />
                <About />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home