import React from 'react'
import style from "./Home.module.css"

const Home = () => {
  return (
    <>
      <div className={style.home}>
        <h2 className={style.h2texts}>Present your business in a</h2>
        <h2 className={style.h2texts}>whole new way</h2>
        <p className={style.ptexts}>Quickly design and customize responsive mobile-first sites with</p>
        <p className={style.ptexts}>Bootstrap, the world’s most popular front-end open source toolkit!</p>
        <div className={style.buttons}>
          <button className={style.button1}>Get Started</button>
          <button className={style.button2}>Learn More</button>
        </div>
      </div>
     
    </>

  )
}

export default Home