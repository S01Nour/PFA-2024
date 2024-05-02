import React, { useState } from "react"
import { Link } from "react-router-dom"

import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Search from "./Search";

const Navbar = ({CartItem}) => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <div className="gadget" >
              <Link to="/">Gadget Defender</Link>
              </div>
              <li></li><li></li><li></li><li></li><li></li>
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/shop'>shop</Link>
              </li>
              <li>
                <Link to='/products'>product</Link>
              </li>
              <li>
                <Link to='/repair'>repair workshop</Link>
              </li>
              <li>
                <Link to='/insurance'>insurance</Link>
              </li>
              <Link className="recherche"><SearchIcon/></Link> 
              <Link to='/favorite' className="Favorite"><FavoriteIcon/></Link>
              <Link  className="profile" to='/login'><AccountCircleIcon/></Link>
              <Search CartItem={CartItem} />
            </ul>
            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar

/*<a className="Favorite"><FavoriteIcon/></a>
              <a className="profile"><AccountCircleIcon/></a>
              <a className="shopping"><ShoppingCartIcon/></a>
              
              
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown link</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#">Action</Link></li>
                  <li><Link className="dropdown-item" href="#">Another action</Link></li>
                  <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                </ul>
              </li>*/