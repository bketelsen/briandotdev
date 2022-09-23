
const Site = {
  slug: 'site',
  access: {
    // Payload's access control functions apply to files also, meaning you can permit or deny file downloads easily
    read: () => true,
  },
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