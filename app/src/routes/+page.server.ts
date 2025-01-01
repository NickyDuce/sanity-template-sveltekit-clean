import { client } from '$lib/sanity/client';
import type { HomeContent } from '$lib/types/types';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {
  // Query the "home" document
  const homeQuery = `
    *[_type == "home"] | order(_createdAt desc)[0]{
      version,
      "slug": slug.current,
      header,
      body {
        subHeading,
        body1,
        body2
      }
    }
  `;
  
  const productsQuery = `
  *[_type == "product"] | order(_createdAt desc)[0..3]{
    name,
    "slug": slug.current,
    images[]{
      asset->{url}
    },
    salePrice
  }
`;

  const homeContent: HomeContent = await client.fetch(homeQuery);
  const products = await client.fetch(productsQuery);

  // Map products to ensure proper structure
  const featuredProducts = products.map((product: any) => ({
    name: product.name,
    slug: product.slug,
    images: product.images.map((image: any) => image.asset.url),
    salePrice: product.salePrice
  }));

  return { homeContent, products: featuredProducts };
};
