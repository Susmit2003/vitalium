import React from 'react'
import style from './Category.module.css'
const Category = () => {
    return (
        <div className={style.categoryWrapper}>
            <div className={style.catitem}>
                <div className={style.cat}>
                </div>
                <span>All products</span>
            </div>
            <div className={style.catitem}>
                <div className={style.cat}>
                </div>
                <span>Cat-1</span>
            </div>
            <div className={style.catitem}>
                <div className={style.cat}>
                </div>
                <span>Cat-2</span>
            </div>
            <div className={style.catitem}>
                <div className={style.cat}>
                </div>
                <span>Cat-3</span>
            </div>
        </div>
    )
}

export default Category