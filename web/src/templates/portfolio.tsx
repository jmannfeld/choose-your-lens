import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Calendar } from "react-feather"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Row, Col } from "../components/shortcodes/index"
import { PortfolioQuery } from "./__generated__/PortfolioQuery"

export default function porfolio ({ }: PageProps<PortfolioQuery, {}>) {
    return (
        <Layout>
            <div className="md:px-4 mt-12 py-6 md:w-11/12 mx-auto">
                <div className="mx-auto relative">
                </div>
            </div>
        </Layout>
    )
}
