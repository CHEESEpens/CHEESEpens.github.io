import React from "react"
import footerModule from "../styles/footer.module.scss";

const Footer = ({ siteTitle, header,marginTop,padding }) => {
  
  return (

  <div className={`${footerModule.__footer__container } text-center`} style={{marginTop:marginTop?marginTop:"350px",
    padding:padding?padding:"100px 0px"}}>
    <p><span className={footerModule.__footer__parentCompany}>nikita writing instruments</span></p>
    <span className={footerModule.__footer__span}>presents</span>
    <p><img src={`/logo.png`} className={`img-fluid ${footerModule.__footer__logo}`}/></p>
    <p style={{fontSize:"23px"}}>&copy; cheesepens.com { new Date().getFullYear() }</p>
  </div>


  )
}

export default Footer;