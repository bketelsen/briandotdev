
const Site = {
  slug: 'site',
  fields: [
    {
      name: 'primaryAuthor',
      type: 'relationship',
      relationTo: 'users'
    },
    {
        name: 'copyright',
        type: 'text',
    },
    {
        name: 'metaTitle',
        type: 'text',
    },
    {
        name: 'metaDescription',
        type: 'textarea',
    },
  ],
};

export default Site;