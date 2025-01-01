import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export type Product = {
  name: string;
  slug: string;
  type: string;
  description: string;
  maintenance: string;
  salePrice: number;
  quantity: number;
  images: { asset: { url: string } }[];
  specifications: {
    width: string;
    height: string;
    length: string;
    material: string;
    colour: string;

  };
  creator: string;
  countryOfOrigin: string;
  productNumber: number;
};

export const load: PageServerLoad = async () => {
  const query = `*[_type == "product"]{
    name,
    "slug": slug.current,
    type,
    description,
    maintenance,
    salePrice,
    quantity,
    "images": images[].asset->url,
    specifications,
    creator,
    countryOfOrigin,
    productNumber
  }`;

  const products: Product[] = await client.fetch(query);
  return { products };
};
