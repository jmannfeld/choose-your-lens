import React, { useEffect, useRef, useState } from "react"
import { graphql, PageProps } from "gatsby"

import { ArrowRight, Disc, Eye } from "react-feather"
import ScrollIntoView from "react-scroll-into-view"

import Layout from "../components/layout"
import { Button } from "../components/ui"

import ItemPortfolio from "../components/item-portfolio"
import ItemBlog from "../components/item-blog"
import { Form, Description as ContactDescription } from "../components/contact"
import { IndexPageQuery } from "./__generated__/IndexPageQuery"

export default ({ data, location }: PageProps<IndexPageQuery>) => {
    const siteData = data.site.siteMetadata

    const portfolioList = data.portfolio.edges.map((item, _) => (
        <ItemPortfolio
            data={item.node}
            key={`p-item-index-${item.node.id}`}
            even={(_ + 1) % 2 === 0}
        />
    ))
    console.log("index page datat", data.blog)
    // const blogList = data.blog.edges.map((item, ix) => (
    //     <ItemBlog data={item.node} key={`b-item-index-${item.node.id}`} latest={ix === 0 ? true : false} />
    // ))

    const featuredBlogPost = <ItemBlog data={data.blog} key={`b-item-index-${data.blog.id}`} featured="true" />;

    return (
        <Layout
            front={true}
            seo={{
                title: "Home",
                description: siteData.description,
            }}
            navPlaceholder={false}
            location={location}
        >
            <Wall data={siteData} />
            <MissionQuote/>
            <div className="px-4 lg:px-0" id="portfolio">
                {portfolioList}
            </div>
            <Testimonies />
            <Blog>
                {featuredBlogPost}
            </Blog>
            <Contact data={siteData.contact} />
        </Layout>
    )
}

const Wall = ({ data }) => {
    const wall = useRef(null)

    const twoColumnWall = data.twoColumnWall

    const [state, changeState] = useState({
        loaded: false,
        supportsBlend: false,
    })

    useEffect(() => {
        if (window.CSS && !state.loaded) {
            if (CSS.supports("mix-blend-mode", "screen")) {
                wall.current.classList.add("supports-blend")
                changeState({
                    loaded: true,
                    supportsBlend: true,
                })
            }
        }
    }, [state.loaded])

    let spanAttrs: Partial<{ style: unknown }> = {}

    if (!twoColumnWall && data.titleImage) {
        spanAttrs.style = {
            backgroundImage: `url('${data.titleImage}')`,
        }

    }

    const innerComponents = (
        <React.Fragment>
            <div className="title bg-bg">
                <h1
                    className={`text-6xl relative lg:text-7xl ${
                        data.capitalizeTitleOnHome ? "uppercase" : ""
                    }`}
                >
                    <span {...spanAttrs}></span>
                    {data.title}
                </h1>
            </div>
            <p className="text-lg lg:text-xl text-color-2 pt-4 lg:pt-0">
                {data.introTag}
            </p>
            <p className="text-base lg:text-lg mt-4">{data.description}</p>
            <ScrollIntoView selector="#mission-quote">
                <Button
                    title="START YOUR JOURNEY"
                    type="button"
                    iconRight={<ArrowRight />}
                />
            </ScrollIntoView>
        </React.Fragment>
    )

    if (twoColumnWall) {
        return (
            <div
                className="wall h-screen flex relative justify-center items-center overflow-hidden"
                ref={wall}
            >
                <div className="flex-1 lg:block absolute lg:relative w-full h-full top-0 left-0">
                    <div
                        className="absolute left-0 top-0 w-full h-full lg:hidden"
                        style={{
                            background: "rgba(0,0,0,.75)",
                        }}
                    ></div>
                    <img
                        src={data.titleImage}
                        alt=""
                        className="h-full w-auto max-w-none lg:h-auto lg:w-full"
                    />
                </div>
                <div className="flex-1 text-center p-3 relative z-10 lg:text-left lg:pl-8 text-white lg:text-color-default">
                    {innerComponents}
                </div>
            </div>
        )
    }

    return (
        <div
            className="wall h-screen flex flex-col justify-center items-center text-center"
            ref={wall}
        >
            {innerComponents}
        </div>
    )
}

const MissionQuote = () => {
    return (
        <div className="boxed" id="mission-quote">
            <div className="px-4 py-20 text-center lg:my-40 lg:px-0 mission-border">
                <h2 className="text-color-1 font-black text-5xl lg:text-6xl">
                    Inspiring all learners to embrace their passions and create their own authentic paths in life.
                </h2>
                {/* <p className="mt-5 text-lg">{data}</p> */}
            </div>
        </div>
    )
}

const Testimonies = () => {
    return (
        <div className="boxed" id="testimonies">
            <div className="px-4 py-20 text-center lg:py-40 lg:px-0">
                <h2 className="text-color-1 font-black text-5xl lg:text-6xl">Testimonials</h2>
                <h4 className="py-3 text-color-1 font-black text-5xl">
                   "Maria is a very passionate about helping others to grow and develop. Maria's communication is always of service to the people that she works with. Maria understands the way your lenses color your perception of the world. Just as importantly, Maria engages with you in a way that changes your lenses and opens you to greater possibilities for growth in your life. I am grateful to know Maria as a friend and to work with her as an educational consultant." <br /> ~Aaron Garner, <br />Tetra Prime Consulting Co-Founder~
                </h4>
                <div className="py-6 testimony-dot">
                    <Eye /><Eye />
                </div>
                <h4 className="py-3 text-color-1 font-black text-5xl">
                   "She is a professor that wants her students to succeed. You can tell she loves what she does and has a passion for her students education."
                </h4>
                <div className="py-6 testimony-dot">
                    <Eye /><Eye />
                </div>
                <h4 className="py-3 text-color-1 font-black text-5xl">
                    "SO GREAT! Professor Esterline is so passionate, kind, decicated, and thoughtful! I enjoyed her SO much and am so grateful for her. She truly listens and cares about her students."
                </h4>
                <div className="py-6 testimony-dot">
                    <Eye /><Eye />
                </div>
                <h4 className="py-3 text-color-1 font-black text-5xl">
                    "She is a great professor to have, especially during stressful times like this."
                </h4>
                <div className="py-6 testimony-dot">
                    <Eye /><Eye />
                </div>
                <h4 className="py-3 text-color-1 font-black text-5xl">
                    "Professor Esterline did a great job in engaging students by praising their success and giving contructive criticism when necessary."
                </h4>
                <div className="py-6 testimony-dot">
                    <Eye /><Eye />
                </div>
                <h4 className="py-3 text-color-1 font-black text-5xl">
                    "Great instructor! She cares a lot about students succeeding."
                </h4>
            </div>
        </div>

    )
}

const Blog = ({ children }) => {
    return (
        <div className="container mx-auto px-0">
            <div className="pt-20 pb-10 text-center lg:pt-40 lg:pb-20">
                <h2 className="text-color-1 font-black text-5xl lg:text-6xl">
                    Featured Blog
                </h2>
            </div>
            <div className="flex flex-wrap">{children}</div>
        </div>
    )
}

const Contact = ({ data }) => {
    const hasContactForm = data.api_url
    return (
        <div className="container mx-auto">
            <div className="pt-20 pb-10 lg:pt-40 lg:pb-20 text-center">
                <h2 className="text-color-1 font-black text-5xl lg:text-6xl">
                    Contact Me!
                </h2>
            </div>
            <div className="flex flex-wrap pb-40">
                {hasContactForm && (
                    <div className="w-full lg:w-1/2 px-4 lg:pl-2 lg:pr-6">
                        <Form api={data.api_url} />
                    </div>
                )}
                <div
                    className={`w-full ${
                        hasContactForm ? "lg:w-1/2" : "lg:w-2/3 mx-auto"
                    } px-6 pt-8`}
                >
                    <ContactDescription data={data} />
                </div>
            </div>
        </div>
    )
}

export const query = graphql`
    query IndexPageQuery {
        site: site {
            siteMetadata {
                title
                description
                capitalizeTitleOnHome
                titleImage
                ogImage
                twoColumnWall
                introTag
                description
                about
                contact {
                    api_url
                    mail
                    phone
                    address
                }
                social {
                    name
                    url
                    icon
                }
            }
        }
        portfolio: allMdx(
            filter: { fields: { sourceName: { eq: "portfolio" } } },
            sort: {fields: frontmatter___title, order: ASC},
            limit: 6
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
        blog: sanityPost(slug: {current: {eq: "choosing-your-lens"}}) {
            id
            title
            description
            slug {
                current
            }
            tileImage {
                asset {
                    fluid(maxWidth: 700) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            bannerImage {
                asset {
                    fluid(maxWidth: 700) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            publishedAt(formatString: "MMMM Do, YYYY")
            body {
                children {
                    text
                }
            }
        }
    }
`
