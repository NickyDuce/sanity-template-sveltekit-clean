import type { PageServerLoad } from './$types';
import {client} from '$lib/sanity/client';




export const load: PageServerLoad = async () => {
  // Fetch data for the cards from Sanity
  const query = `*[_type == "project"] | order(completionDate desc) {
    _id,
    slug,
    projectTitle,
    heroImage {
      asset -> {
      url
      }
    },
    completionDate,
    sector,
    client,
    location
    }`;

  const cards = await client.fetch(query);
  

  return { cards };
};
