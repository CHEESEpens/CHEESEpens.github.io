import * as React from "react"
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import productsModule from "../styles/products.module.scss";
const SuperRainBow = () => {
  const data = useStaticQuery(
    graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              description
              features
              price
              title
            }
            fileAbsolutePath
          }
        }
        totalCount
      }
    }
    `
  );

 
  return (
    <Layout boxShadow={true} marginTop={"150px"}>
      
     
      <div className="container">
          
          
          <h1 className={`text-center`} style={{margin:"300px 0px",fontSize:"60px"}}>Product is coming soon....</h1>
         
        
       
      </div>
          
         
    
    </Layout>
  )
}

export default SuperRainBow;
    