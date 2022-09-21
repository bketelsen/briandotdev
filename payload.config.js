import Categories from './collections/Categories';
import Media from './collections/Media';
import Pages from './collections/Pages';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Users from './collections/Users';
import Site from './globals/site';
import { buildConfig } from 'payload/config';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
import seo from '@payloadcms/plugin-seo';

const adapter = s3Adapter({
  config: {
    endpoint: process.env.S3_ENDPOINT,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    }
  },
  bucket: process.env.S3_BUCKET,
})

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Categories,
    Posts,
    Pages,
    Tags,
    Users,
    Media,
  ],
  globals: [
    Site
  ],
  plugins: [
    cloudStorage({
      collections: {
        'media': {
          adapter: adapter, // see docs for the adapter you want to use
          disableLocalStorage: true,
        },
      },

    }),
    seo({
      collections: [
        'posts',
        'pages',
      ],
      uploadsCollection: 'media',
      tabbedUI: true,
      generateTitle: ({ doc }) => `brian.dev — ${doc?.title?.value}`,
      generateDescription: ({ doc }) => doc?.summary?.value,
      generateImage: ({ doc }) => {
        if (doc?.layout?.value?.length > 0) {
          const media = doc?.layout?.value?.find(block => block.type === 'media')

          if (media) {
            return media?.media?.value?.[0]?.src
          }
        }

        return null
      },
      generateKeywords: ({ doc }) => {
        if (doc?.tags?.value?.length > 0) {
          return doc?.tags?.value?.map(tag => tag?.title?.value).join(', ')
        }

        return null
      },
    }),
  ],
});

