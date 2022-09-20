import slug from '../fields/slug';

const Categories = {
  slug: 'categories',
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

export default Categories;