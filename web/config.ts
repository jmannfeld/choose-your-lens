const siteMetadata = {
    title: `Choose Your Lens`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.png`,
    ogImage: `/images/wall.png`,
    twoColumnWall: true,
    cookiePolicy: false,
    introTag: `LIFE CONSULTING BY MARIA`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
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
            url: "#",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "#",
        },
        {
            name: "YouTube",
            icon: "/images/YouTube.svg",
            url: "#",
        },
        {
            name: "TikTok",
            icon: "/images/TikTok.svg",
            url: "#",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/f227a36e-096a-4c6a-9963-9f1918a85bb3",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "mariaesterline@gmail.com",
        phone: "317-828-7087",
        address: "1234 Sunshine Lane \nFlorida \nUnited States",
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
