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
            limitPost: site {
                siteMetadata {
                blogItemsPerPage
                portfolioItemsPerPage
                }
            }
            }
    `)
}
