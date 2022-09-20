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

const Posts = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
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
      name: 'publishedDate',
      type: 'date',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories'
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      blocks: [ // required
       QuoteBlock,
       ContentBlock,
       CallToAction,
       Bookmark,
       Media,
       CodeBlock,
       Admonition,
       Header,
       Gallery
      ]
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      }
    }
  ],
}

export default Posts;