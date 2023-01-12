import sanityClient from '@sanity/client'
// import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = sanityClient({
  projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID,
  dataset: 'prod',
  apiVersion: '2022-01-11',
  token: import.meta.env.VITE_APP_SANITY_TOKEN,
  useCdn: 'true'
})

// const builder = ImageUrlBuilder(client)
// export const urlFor = (source) => builder.image(source)
