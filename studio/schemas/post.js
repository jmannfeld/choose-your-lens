export default {
  name: "post",
  title: "Blog Post",
  type: "document",
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
      title: "Published at",
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
