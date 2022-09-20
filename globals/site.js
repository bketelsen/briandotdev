
const Site = {
  slug: 'site',
  fields: [
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

export default Site;