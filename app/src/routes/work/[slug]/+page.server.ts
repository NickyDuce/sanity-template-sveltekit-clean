import { client } from '../../../lib/sanity/client';
import type { PageServerLoad } from './$types';
import type { Project } from '../../../lib/types/types'; // Replace with the generated Sanity types

export const load: PageServerLoad = async ({ params }) => {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    projectTitle,
    slug,
    heroImage,
    completionDate,
    sector,
    client,
    location,
    services,
    team,
    overview,
    challenges,
    imageGrid,
    outcome
  }`;

  const project: Project | null = await client.fetch(query, { slug: params.slug });

  if (!project) {
    throw new Error('Project not found');
  }

  return { project };
};
