import * as React from "react"
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import ProductList from "../components/ProductList";
import productsModule from "../styles/products.module.scss";
const ProductPage = () => {
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

  console.log(data);
  var isInLeft = false
  return (
    <Layout boxShadow={true} marginTop={"150px"}>
      <div className="products">
     
      <div className="container">
          <h2 className={`text-center ${productsModule.__h2}`}>Our Products</h2>
          { data.allMarkdownRemark.edges.map(({node}) => {
          isInLeft = !isInLeft;
          console.log("isInLeft",isInLeft)
          let { frontmatter } = node
          return <ProductList {...frontmatter} isInLeft={isInLeft}/>
        
        }) }   
      </div>
          
         
      </div>
    </Layout>
  )
}

export default ProductPage;
