import React, { useEffect } from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import PortfolioItem from "../components/item-portfolio"
import Pagination from "../components/pagination"
import { PortfolioListQuery } from "./__generated__/PortfolioListQuery"

export default function portfolioList({ data, pageContext, location }: PageProps<PortfolioListQuery, {}>) {


    // useEffect(() => {
    //     window.dispatchEvent(new CustomEvent('scroll'))
    // }, [])

    // const portfolioItems = data.allMdx.edges.map((item, i) => (
    //     <PortfolioItem data={item.node} key={item.node.id} even={(i + 1) % 2 === 0}/>
    // ))

    return (
        <Layout
            seo={{
                title: "Services",
            }}
        >
        </Layout>
    )
}

// export const query = graphql`
//     query PortfolioListQuery($skip: Int!, $limit: Int!) {
//         allMdx(
//             filter: { fields: { sourceName: { eq: "portfolio" } } }
//             sort: { fields: [frontmatter___date], order: DESC }
//             limit: $limit
//             skip: $skip
//         ) {
//             edges {
//                 node {
//                     id
//                     frontmatter {
//                         title
//                         description
//                         image {
//                             publicURL
//                             childImageSharp {
//                                 fluid(maxWidth: 1920) {
//                                     srcSet
//                                     ...GatsbyImageSharpFluid
//                                 }
//                                 id
//                             }
//                         }
//                     }
//                     fields {
//                         slug
//                     }
//                 }
//             }
//         }
//     }
// `
