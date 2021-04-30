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
        const qryStr = `*[_type == "post" && slug.current == '${blog.slug.current}'][0]`
        client.fetch(qryStr).then(
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
                            <div className="flex flex-col md:flex-row justify-between">
                                <div>    
                                    <p className="mt-1 mb-3 flex blog-meta-text">
                                        <Calendar />{" "}
                                        <span className="ml-2 mt-1">
                                            {blog.publishedAt}
                                        </span>
                                    </p>
                                    {blog.tags[0] &&
                                        <div className="tags-wrapper">
                                            {/* Tags:&nbsp; */}
                                            {blog.tags.map(tag => (
                                                <a href="#" className="tag">{tag.title}</a>
                                                ))}
                                        </div>
                                    }
                                </div>
                                {blog.authors[0] &&
                                    <div className="author-block">
                                        <div className="image-cropper">
                                            <img src={blog.authors[0].author.image.asset.url} alt="Blog post author icon" width="50" height="50"></img>
                                        </div>
                                        <p className="blog-meta-text" id="author-block-name">{blog.authors[0].author.name}</p>
                                    </div>
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/4 md:w-11/12 sm:w-full p-3 mx-auto mt-2 post-content">
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
    allSanityPost(
        filter: {slug: {current: {eq: $slug}}}
    ) {
        edges {
        node {
            id
            title
            slug {
            current
            }
            description
            authors {
                author {
                    name
                    image {
                        asset {
                            url
                        }
                    }
                }
            }
            publishedAt(formatString: "MMMM Do, YYYY")
            featuredBlog
            tags {
                title
            }
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
