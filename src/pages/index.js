import React, { useEffect } from "react"
import { Link, graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Identity from "../components/identity"

import image from '../images/songhi-studio2.png'

const extractIdentities = data => data.main.edges[0].node.childMarkdownRemark.frontmatter.identities


const HomePage = ({ data, path }) => {
  const identities = extractIdentities(data)
  
  return (<Layout path={path}>
    <SEO title="Home" />
    {identities.map(identity => <Identity {...identity} />)}
  </Layout>)
  // return <img src={image} style={{width: '100%', margin: '40px 0px'}}/>
/*)*/
}

export default HomePage

export const query = graphql`
    {
  main: allFile(filter: {sourceInstanceName: {eq: "content"}, name: {eq: "home"}}) {
    edges {
      node {
        childMarkdownRemark {
          id
          fields {
            slug
          }
          frontmatter {
			identities {
				identity
              	intro
              	profileimage {
              		childImageSharp {
	                    fixed(width: 250, height: 250, quality: 100) {
	                      ...GatsbyImageSharpFixed
	                    }
	                }
              	}
              	images {
              		id
	                childImageSharp {
	                    fixed(height: 250) {
	                      ...GatsbyImageSharpFixed
	                    }
	                }
              	}
            }
          }
        }
      }
    }
  }
}`