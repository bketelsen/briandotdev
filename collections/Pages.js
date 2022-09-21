import {
  Admonition,
  Bookmark,
  CallToAction,
  CodeBlock,
  ContentBlock,
  Gallery,
  Header,
  Media,
  QuoteBlock
} from './Blocks';

import slug from '../fields/slug';

const Pages = {
  slug: 'pages',
  admin: {
    defaultColumns: ['title', 'author', 'status'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'summary',
      type: 'text',
    },
    slug('title'),
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },

    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 0,
      blocks: [ // required
       QuoteBlock,
       ContentBlock,
       CallToAction,
       Bookmark,
       Media,
       CodeBlock,
       Header,
       Admonition,
       Gallery
      ]
    },
  ],
}

export default Pages;