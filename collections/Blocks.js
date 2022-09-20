export const QuoteBlock = {
  slug: 'quote', // required
  fields: [ // required
    {
      name: 'quoteHeader',
      type: 'text',
      admin: {
        description: 'The quote header',
      }
    },
    {
      name: 'quoteText',
      type: 'text',
      required: true,
      admin: {
        description: 'The quote text',
      }
    },
    {
      name: 'referenceName',
      type: 'text',
      admin: {
        description: 'The name of the person or entity being referenced',
      }
    },
    {
      name: 'referenceURL',
      type: 'text',
      admin: {
        description: 'The URL of reference',
      }
    },
  ]
};

export const Admonition = {
  slug: 'admonition', // required
  fields: [ // required
    {
      name: 'title',
      type: 'text',
      admin: {
        description: 'The title of the admonition',
      }
    },
    {
      name: 'admonitionText',
      type: 'text',
      required: true,
      admin: {
        description: 'The text of the admonition',
      }
    },
    {
      name: 'icon', // required
      type: 'select', // required
      admin: {
        description: 'The suggested icon to use for the admonition',
      },
      hasMany: false,
      options: [
        {
          label: 'Info',
          value: 'info',
        },
        {
          label: 'Warning',
          value: 'warning',
        },
        {
          label: 'Danger',
          value: 'danger',
        },
        {
          label: 'Note',
          value: 'note',
        },
        {
          label: 'Hint',
          value: 'hint',
        },
        {
          label: 'Idea',
          value: 'idea',
        },
      ],
    },
  ]
};

export const CodeBlock = {
  slug: 'code', // required
  fields: [ // required
    {
      name: 'fileName',
      type: 'text',
      admin: {
        description: 'Optional name of the file',
      }
    },
    {
      name: 'language',
      type: 'select',
      hasMany: false,
      options: [
        {
          label: 'Go',
          value: 'go',
        },
        {
          label: 'Rust',
          value: 'rust',
        },
        {
          label: 'Javascript',
          value: 'js',
        },
        {
          label: 'Shell',
          value: 'bash',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'HTML',
          value: 'html',
        },
        {
          label: 'CSS',
          value: 'css',
        },
        {
          label: 'Markdown',
          value: 'md',
        },
        {
          label: 'JSON',
          value: 'json',
        },
        {
          label: 'YAML',
          value: 'yaml',
        },
        {
          label: 'GraphQL',
          value: 'graphql',
        },
        {
          label: 'Docker',
          value: 'docker',
        },
        {
          label: 'Typescript',
          value: 'ts',
        },
        {
          label: 'Nix',
          value: 'nix',
        },
      ],
    },
    {
      name: 'highlight',
      type: 'text',
      admin: {
        description: '1,3,[5-7]',
      },
    },
    {
      name: 'code',
      type: 'code',
      required: true,
    },
  ]
};

export const ContentBlock = {
  slug: 'content', // required
  fields: [ // required
    {
      name: 'content', // required
      type: 'richText', // required
      required: true
    }
  ]
};
export const Header = {
  slug: 'header', // required
  fields: [ // required
    {
      name: 'category', // required
      type: 'text', // required
      admin: {
        description: 'The category of the header',
      }
    },
    {
      name: 'title', // required
      type: 'text', // required
      required: true,
      admin: {
        description: 'The title of the header',
      }
    },
    {
      name: 'body', // required
      type: 'text', // required
      admin: {
        description: 'The body of the header',
      }
    },
    {
      name: 'media',
      label: 'Optional Background Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
      },
    },

  ]
};

export const CallToAction = {
  slug: 'cta', // required
  fields: [ // required
    {
      name: 'question', // required
      type: 'text', // required
      admin: {
        description: 'CTA question e.g. "Want to learn more?"',
      },
    },
    {
      name: 'action', // required
      type: 'text', // required
      required: true,
      admin: {
        description: 'CTA action e.g. "Subscribe to our newsletter"',
      },
    },

    {
      name: 'content', // required
      type: 'textarea', // required
      admin: {
        description: 'Description of the cta.',
      },
    },
    {
      name: 'actionLink', // required
      type: 'text', // required

      admin: {
        description: 'Link URL for the action link',
      },
    },
    {
      name: 'actionText', // required
      type: 'text', // required

      admin: {
        description: 'Link text for the action link e.g. "Subscribe Now"',
      },
    },
    {
      name: 'infoLink', // required
      type: 'text', // required

      admin: {
        description: 'Link url for the info link',
      },
    },
    {
      name: 'infoText', // required
      type: 'text', // required
      admin: {
        description: 'Link text for the info link e.g. "Learn More"',
      },
    },
    {
      name: 'media',
      label: 'Optional Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
      },
    },
  ]
};
export const Bookmark = {
  slug: 'bookmark', // required
  fields: [ // required
    {
      name: 'title', // required
      type: 'text', // required
    },
    {
      name: 'content', // required
      type: 'text', // required
    },
    {
      name: 'link', // required
      type: 'text', // required
      required: true
    },
    {
      name: 'media',
      label: 'Optional Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Add an optional image for use in cards and lists.',
      },
    },
  ]
};
export const Media = {
  slug: 'media',
  labels: {
    singular: 'Media Block',
    plural: 'Media Blocks',
  },
  fields: [
    {
      name: 'media',
      label: 'Media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
      },
    },

    {
      name: 'size',
      label: 'Size',
      type: 'radio',
      defaultValue: 'normal',
      options: [
        {
          label: 'Normal',
          value: 'normal',
        },
        {
          label: 'Wide',
          value: 'wide',
        },
        {
          label: 'Fullscreen',
          value: 'fullscreen',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'caption',
      label: 'Caption',
      type: 'richText',
      admin: {
        elements: [
          'link',
        ],
      },
    },
  ],
};

export const Gallery = {
  slug: 'gallery',
  labels: {
    singular: 'Gallery Block',
    plural: 'Gallery Blocks',
  },
fields: [
    {
      name: 'gallery', // required
      type: 'array', // required
      label: 'Image Gallery',
      minRows: 2,
      maxRows: 10,
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      fields: [ // required
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        }
      ]
    }
  ]
};
