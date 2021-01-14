import React from "react"
const BlockContent = require('@sanity/block-content-to-react')
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Calendar } from "react-feather"
import { useEffect, useState } from 'react'

import { Row, Col } from "../components/shortcodes/index"

const client = require('@sanity/client')({
    projectId: '11zrr2lr',
    dataset: 'production',
    useCdn: true
})

const serializers = {
    types: {
        code: props => (
        <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
        </pre>
        )
    }
}

export default function blog({ location, data, pageContext }: PageProps<{}>) {
    console.log('blog.tsx file data', data)
    const { node: blog } = data.allSanityPost.edges[0]
    

    const [postContent, setPostContent] = useState([])

    useEffect(() => {
        client.fetch('*[_type == "post"][0]').then(
            post => {
                setPostContent(post)
            }
        )
    }, [])

    return (
        <Layout
            seo={{
                title: blog.title,
                description: blog.description,
                // image: data.bannerImage.asset.url
            }}
            location={location}
        >
            <div className="md:px-4 mt-12 py-6 md:w-11/12 mx-auto">
                <div className="mx-auto relative">
                    <Img
                        fluid={blog.bannerImage.asset.fluid}
                        alt={blog.title}
                        className="w-full"
                    />
                    <div className="relative w-full lg:w-3/4 md:w-11/12 sm:w-full p-6 box-border lg:box-content mx-auto bg-bg text-color-default blog-wall-content shadow-xl md:-mt-16 ">
                        <div className="p-3">
                            <h1 className="text-5xl font-bold text-primary">
                                {blog.title}
                            </h1>
                            <p className="mt-1 flex">
                                <Calendar />{" "}
                                <span className="ml-2">
                                    {blog.publishedAt}
                                </span>
                            </p>
                            <p className="mt-3">
                                {blog.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/4 md:w-11/12 sm:w-full p-3 mx-auto mt-12 post-content">
                    { postContent.body &&
                            postContent.body.map(b => (
                                <BlockContent blocks={b} serializers={serializers} key={b._key}/>
                            )
                        )
                    }
                </div>
                <div className="comments mt-8">
                    {/* <Comments title={data.title} location={location} /> */}
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    # query BlogQuery($slug: String!) {
    #     mdx(fields: { slug: { eq: $slug } }) {
    #         body
    #         frontmatter {
    #             title
    #             date(formatString: "DD MMMM YYYY")
    #             description
    #             banner {
    #                 publicURL
    #                 childImageSharp {
    #                     fluid(maxWidth: 1920) {
    #                         srcSet
    #                         ...GatsbyImageSharpFluid
    #                     }
    #                     id
    #                 }
    #             }
    #         }
    #     }
    # }
    query BlogQuery($slug: String!) {
    allSanityPost(filter: {slug: {current: {eq: $slug}}}) {
        edges {
        node {
            id
            title
            slug {
            current
            }
            description
            publishedAt
            body {
            children {
                text
            }
            }
                    bannerImage {
            asset {
                fluid(maxWidth: 700) {
                    ...GatsbySanityImageFluid
                }
            }
        }
        }
        }
    }
    }

`