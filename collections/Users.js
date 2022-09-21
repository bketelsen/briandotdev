const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'avatar',
      label: 'Avatar Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
      },
    },
    {
      name: 'portrait',
      label: 'Portrait Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
      },
    },
    {
      name: 'socials',
      label: 'Social Links',
      type: 'group',
      fields: [
        {
          name: 'twitter',
          label: 'Twitter Link',
          type: 'text',
        },
        {
          name: 'github',
          label: 'GitHub Link',
          type: 'text',
        },
        {
          name: 'linkedin',
          label: 'LinkedIn Link',
          type: 'text',
        },
        {
          name: 'twitch',
          label: 'Twitch Link',
          type: 'text',
        },
        {
          name: 'youtube',
          label: 'YouTube Link',
          type: 'text',
        },
      ],
    },
  ],
};

export default Users;