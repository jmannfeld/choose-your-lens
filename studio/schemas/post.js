import { IoNewspaperOutline } from 'react-icons/io5'

export default {
  name: "post",
  title: "Blog Posts",
  type: "document",
  icon: IoNewspaperOutline,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "authors",
      title: "Authors",
      type: "array",
      of: [
        {
          type: "authorReference",
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "This will be used for the blog post's URL",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "tileImage",
      title: "Tile image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bannerImage",
      title: "Banner image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published on",
      type: "date",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [
        {
          type: "reference",
          to: {
            type: "tag",
          },
        },
      ],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "featuredBlog",
      title: "Featured Blog",
      type: "boolean",
      description: "Display this blog post on the homepage"
    }
  ],

  preview: {
    select: {
      title: "title",
      media: "tileImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
