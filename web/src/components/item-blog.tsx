import React, { useState,useEffect } from "react"
const BlockContent = require('@sanity/block-content-to-react')
import { ArrowRight } from "react-feather"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Button } from "../components/ui"

import { Calendar } from "react-feather"
import { BlogListQuery_allMdx_edges_node } from "../templates/__generated__/BlogListQuery"
import { IndexPageQuery_blog_edges_node } from "../pages/__generated__/IndexPageQuery"

// type ItemBlogProps = BlogListQuery_allMdx_edges_node | IndexPageQuery_blog_edges_node
// export const ItemBlog: React.FC<{ data: ItemBlogProps}> = ( data ) => {

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

export const ItemBlog: React.FC<{}> = ( {data, featured} ) => {
    const [focused, changeFocused] = useState(false);

    const [postContent, setPostContent] = useState([])

    useEffect(() => {
        const qryStr = `*[_type == "post" && slug.current == '${data.slug.current}'][0]`
        client.fetch(qryStr).then(
            post => {
                setPostContent(post)
            }
        )
    }, [])

    const buttonText = <div className="continue-text"><p className="pr-1">Continue reading</p><ArrowRight /></div>;

    return (
        <div className={`blog-item w-full ${!featured && 'md:w-1/2 lg:w-1/3'} p-4`}>
            <div className={`transition-all duration-300 hover:shadow-2xl shadow ${focused && 'focused'}`}>
                <Link to={`/blog/${data.slug.current}`} title={data.title} onFocus={() => changeFocused(true)} onBlur={() => changeFocused(false)}>
                    <div className={featured ? 'image flex flex-col lg:flex-row' : 'image'}>
                        <Img
                            fluid={data.tileImage.asset.fluid}
                            alt={data.title}
                            className={featured ? 'w-full lg:w-1/2' : 'w-full'}
                        />
                        <div className={featured ? 'w-full lg:w-1/2 p-4 py-3 w-1/2' : 'w-full p-4 py-3 w-1/2'}>
                            <h4 className="text-color-2 font-black text-4xl pt-1 mb-0">
                                {data.title}
                            </h4>
                            <div className="pt-0 flex items-center text-secondary">
                                <Calendar className="stroke-current"/>
                                <p className="pl-2 mt-3 mb-2 font-sans blog-meta-text">{data.publishedAt}</p>
                            </div>
                            {data.tags &&
                                data.tags[0] &&
                                    <div className="tags-wrapper">
                                        {data.tags.map(tag => (
                                            <div className="tag inline" key={tag.title}>{tag.title}</div>
                                        ))}
                                    </div>
                            }
                            {featured ?
                                postContent.body &&
                                    postContent.body.slice(0, 1).map(b => (
                                        <div className="pt-3" key={b}>
                                            <BlockContent blocks={b} serializers={serializers} key={b._key}/>
                                            <br />
                                            <button className="continue-reading">{buttonText}</button>
                                        </div>
                                    )
                                )
                                :
                                <p className="pt-2 text-color-default">
                                    {data.description}
                                </p>
                            }
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ItemBlog;