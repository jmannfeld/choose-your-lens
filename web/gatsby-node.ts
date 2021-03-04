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

    })
}
