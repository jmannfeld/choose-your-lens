import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { BasePagesQuery } from "./__generated__/BasePagesQuery";

export default function basePages({ data, location }: PageProps<BasePagesQuery, {}>) {
    return (
        <Layout location={location}>
            <div className="boxed">
            </div>
        </Layout>
    );
}