import React from 'react'
import ContentCSS from "./Content.module.css"
const Content = () => {
  return (
    <div className='card'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, voluptatibus? Ratione cupiditate accusantium nobis nostrum nesciunt minima quam hic fuga, odit, officia aperiam labore voluptatum beatae vero eum aliquid tempore.</p>
        <button className={ContentCSS.btn}>Read More</button>
    </div>
  )
}

export default Content