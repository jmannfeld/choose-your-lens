// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document schemas
import author from "./author";
import tag from "./tag";
import post from './post'

// Object schemas
import authorReference from "./authorReference";
import blockContent from './blockContent';
import bioPortableText from './bioPortableText';
import mainImage from './mainImage';
import youtube from './youtube';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    authorReference,
    tag,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    bioPortableText,
    mainImage,
    youtube
  ]),
})
