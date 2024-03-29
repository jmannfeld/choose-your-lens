import React from "react"
import Layout from "../components/layout"
import { PageProps } from "gatsby";

export default ({ location }: PageProps<{}, {}>) => {
    return (
        <Layout
            seo={{
                title: "Admin",
            }}
            location={location}
        >
            <div className="container mx-auto py-12">
                <div className="title py-12 text-center">
                    <h2 className="font-black text-7xl text-color-1">
                        ADMIN
                    </h2>
                </div>
            </div>
        </Layout>
    )
}
