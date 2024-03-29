import { createFilePath } from 'gatsby-source-filesystem';
import { GatsbyNode } from 'gatsby';
import path from 'path';

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode })
        const sourceName = getNode(node.parent).sourceInstanceName
        const prefix = sourceName === "basepages" ? '' : '/'+sourceName;

        createNodeField({
            node,
            name: `slug`,
            value: `${prefix}${slug}`,
        })
        createNodeField({
            node,
            name: `sourceName`,
            value: sourceName,
        })
    }
}


export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql<any>(`
        query GatsbyNodeQuery {
            allMarkdown: allMdx {
                edges {
                node {
                    fields {
                    slug
                    sourceName
                    }
                }
                }
            }
            blog: allSanityPost {
                edges {
                node {
                    id
                    slug {
                        current
                    }
                }
                }
            }
            portfolio: allMdx(filter: {fields: {sourceName: {eq: "portfolio"}}}) {
                edges {
                node {
                    id
                }
                }
            }
            limitPost: site {
                siteMetadata {
                blogItemsPerPage
                portfolioItemsPerPage
                }
            }
            }
    `).then(result => {
        console.log('result.data.allMarkdown.edges', result.data.allMarkdown.edges)
        result.data.allMarkdown.edges.concat(result.data.blog.edges).forEach(({ node }) => {
            let template = node.fields !== null && node.fields !== undefined && node.fields.slug !== null && node.fields.slug !== undefined ? node.fields.sourceName : 'blog'
            console.log('template:', template)
            createPage({
                path: node.fields !== null && node.fields !== undefined && node.fields.slug !== null && node.fields.slug !== undefined ? node.fields.slug : `/blog/${node.slug.current}`,
                component: path.resolve("./src/templates/" + template + ".tsx"),
                context: {
                    slug: node.fields !== null && node.fields !== undefined && node.fields.slug !== null && node.fields.slug !== undefined ? node.fields.slug : node.slug.current,
                },
            })
        })

        const blogPosts = result.data.blog.edges
        console.log('blogPosts', blogPosts)
        const blogPostsPerPage =
            result.data.limitPost.siteMetadata.blogItemsPerPage
        const numBlogPages = Math.ceil(blogPosts.length / blogPostsPerPage)

        Array.from({ length: numBlogPages }).forEach((_, i) => {
            console.log('blog ix: ', i)
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: path.resolve("./src/templates/blog-list.tsx"),
                context: {
                    limit: blogPostsPerPage,
                    skip: i * blogPostsPerPage,
                    numPages: numBlogPages,
                    currentPage: i + 1,
                },
            })
        })


        const portfolioItems = result.data.portfolio.edges
        const portfolioItemsPerPage =
            result.data.limitPost.siteMetadata.portfolioItemsPerPage
        const numPortfolioItems = Math.ceil(portfolioItems.length / portfolioItemsPerPage)

        Array.from({ length: numPortfolioItems }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
                component: path.resolve("./src/templates/portfolio-list.tsx"),
                context: {
                    limit: portfolioItemsPerPage,
                    skip: i * portfolioItemsPerPage,
                    numPages: numPortfolioItems,
                    currentPage: i + 1,
                },
            })
        })
    })
}
