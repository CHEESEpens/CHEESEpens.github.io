import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby";
import headerModule from "../styles/layout.module.scss"


const Header = ({ siteTitle, header,boxShadow }) => {


  return (
<nav className={`navbar navbar-expand-lg navbar-light bg-light ${headerModule.header__module} `} style={{boxShadow:boxShadow?"3px 3px 3px lightgrey":''}}>
  <div className="container">
    <Link className="navbar-brand" to="/">
      <img src={`/logo.png`} className={`img-fluid ${headerModule.logo}`}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
         
           <Link className={`nav-link ${headerModule.navLink}`} to="/products">Products</Link>

        </li>
        <li className="nav-item">
          <Link className={`nav-link ${headerModule.navLink}`} to="/superrainbow">Superrainbow</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${headerModule.navLink}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${headerModule.navLink}`} to="/contact">Contact</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header;