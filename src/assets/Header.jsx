import React from 'react'
import HeaderCSS from "./Header.module.css"
const Header = () => {
  return (
    <header>
          <h1>Main Title</h1>
          <button className={HeaderCSS.btn}>Buy Now</button>  

    </header>
  )
}

export default Header