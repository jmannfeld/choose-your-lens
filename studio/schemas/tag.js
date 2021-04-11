import { AiFillTags } from 'react-icons/ai'

export default {
  name: "tag",
  type: "document",
  title: "Tags",
  icon: AiFillTags,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};