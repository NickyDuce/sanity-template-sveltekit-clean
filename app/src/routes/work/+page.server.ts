import type { Project } from '$lib/types/types';
import { client } from '$lib/sanity/client';

export async function load() {
  const query = `
    *[_type == "project"]{
      slug,
      projectTitle,
      heroImage {
        asset -> {
          _id,
          url
        }
      },
      completionDate,
      services,
      imageGrid
    }
  `;

  try {
    const projects: Project[] = await client.fetch(query);

    // Handle empty results
    if (!projects || projects.length === 0) {
      console.warn('No projects found');
      return { projects: [] }; // Return an empty array to prevent UI errors
    }

    return { projects };
  } catch (error) {
    console.error('Error fetching projects:', error.message, error.stack);
    throw new Error('Failed to load projects');
  }
}
