import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


const Header = () => {
  return (

      <nav>
        <div className="headerTop">
          <div className="headerTop-left">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='Search' />
          </div>
          <Link to={"/"} >Shoppers</Link>
          <div className="headerTop-right">
          <i class="fa-solid fa-user"></i>
          <i class="fa-regular fa-heart"></i>
          <Link to={'/basket'}><i class="fa-solid fa-cart-shopping"></i> (0)</Link>
          </div>
        </div>

        <div className="headerBottom">
          <ul>
          <li><Link to={'/'}>HOME</Link></li>
        <li><Link to={'/admin'}>ADMIN</Link></li>
            <li><a href="#">Catalogie</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Contact</a></li>
      
          </ul>
        </div>

        

      </nav>
  
  )
}

export default Header