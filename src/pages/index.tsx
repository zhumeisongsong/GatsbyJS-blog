import React from "react"
import { Link, PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <p>The text if from browser query</p>
    <p>{data.site.siteMetadata.description}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query =graphql`
query HomePageQuery {
  site {
    siteMetadata {
      description
    }
  }
}
`

// export const query = graphql`
// query {
//   projects {
//     name
//   }
// }
// `

export default IndexPage

