import React from "react"

import Header from "./header"
import Footer from "./footer"
const Layout = ({ children,boxShadow,marginTop,padding }) => {
  return (
    <div>
      <Header boxShadow={boxShadow?boxShadow:false}/>
      {children}
      <Footer marginTop={marginTop?marginTop:false} padding={padding?padding:false} />
    </div>
  )
}

export default Layout;