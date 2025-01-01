import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';


export const load: PageServerLoad = async ({ params }) => {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    name,
    type,
    description,
    salePrice,
    "images": images[].asset->url,
    specifications,
    creator,
    countryOfOrigin,
    productNumber
  }`;

  const product = await client.fetch(query, { slug: params.slug });

  if (!product) {
    throw new Error('Product not found');
  }

  return { product };
};
