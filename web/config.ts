const siteMetadata = {
    title: `Choose Your Lens`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    ogImage: `/images/wall.jpg`,
    twoColumnWall: true,
    cookiePolicy: false,
    introTag: `LET YOUR ADVENTURE BEGIN`,
    description: `Life is a journey, embrace the different paths that lead you back to you, celebrate the small moments. For one day you will look back and you will be amazed by the colors you created on your own journey. Be you, be the amazing you, you are what the world needs!!! Keep making a ruckus!`,
    about:
        "Cras accumsan a lectus at tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus elementum dapibus dictum. Mauris auctor quam nec est tincidunt hendrerit. Donec pulvinar lobortis mauris. Cras vulputate ullamcorper ligula a rhoncus. Nunc venenatis elementum ligula in semper. Mauris malesuada purus nunc, et ultricies leo aliquam ac. Ut sit amet nunc id magna accumsan hendrerit in eget metus.",
    author: `@_akzhy`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: false,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "COLLABS",
            url: "/portfolio",
        },
        {
            name: "SERVICES",
            url: "/services",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
    ],
    social: [
        // {
        //     name: "Facebook",
        //     icon: "/images/Facebook.svg",
        //     url: "#",
        // },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/learnwithmaria",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/m_ester2/",
        },
        // {
        //     name: "YouTube",
        //     icon: "/images/YouTube.svg",
        //     url: "#",
        // },
        {
            name: "LinkedIn",
            icon: "/images/LinkedIn.svg",
            url: "https://www.linkedin.com/in/maria-esterline-0ab58b44/",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/f227a36e-096a-4c6a-9963-9f1918a85bb3",
        mail: "mariaesterline@gmail.com",
        phone: "317-828-7087",
        address: "Gainesville, Florida ☀️",
    },
    disqus: "elemental-netlify-com",
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata }
