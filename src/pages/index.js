import * as React from "react"
import Layout from "../components/layout";
import mainModule from "../styles/main.module.scss";
import { Link,useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  

    
    const data = useStaticQuery(
      graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              
            }
          }
          totalCount
        }
      }
      `
    );
    const [Image,setImage] = React.useState("/baby doll.png");
    React.useEffect(() => {

          const Interval = setInterval(() => {

              let randomIndex = Math.floor(Math.random() * ( data.allMarkdownRemark.totalCount-1 ))
              let i = data.allMarkdownRemark.edges[randomIndex];
              setImage(`/${i.node.frontmatter.title}.png`)

          },3000)
          

          
          return () => clearInterval(Interval);

    },[Image])

  return (
    <Layout>
      <div className="main">
      <div className="container">
      <div class="">
          <div className={`row align-items-center ${mainModule.__row}`} style={{padding:"70px 0px"}}>
            <div className="col-md-7	col-lg-7	col-xl-7	col-xxl-7" >
              <h1 className={mainModule.__h1}>
                
                <span className={mainModule.__border}>Learn</span>, 
                <span className={mainModule.__border}> embrace</span> 
                <span className={mainModule.__border}> and</span> 
                <span className={mainModule.__border}> provide</span> 
                <span className={mainModule.__border}> what’s best.</span>
                
                </h1>
              <p>
               <Link className={`btn ${mainModule.buttons}`} to="/products">Our Products</Link>
              <Link className={`btn ${mainModule.buttons}`} to="/contact">Contact Us</Link>
              </p>
            </div>
            <div className="col-md-5 col-lg-5	col-xl-5 col-xxl-5">
              <img src={Image} className={mainModule.__mainImg} />
            </div>
            
          </div>
      </div>

     
      
    </div>
      </div>
    
     
    </Layout>
  )
}

export default IndexPage
