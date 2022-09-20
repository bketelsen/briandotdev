import slug from '../fields/slug';

const Tags = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    slug('name'),
    {
      name: 'description',
      type: 'text',
    },
  ],
  timestamps: false,
}

export default Tags;