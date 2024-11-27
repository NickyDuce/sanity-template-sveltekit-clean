import { projectsQuery as query} from '$lib/sanity/projectQueries'; // Import your query and Project type
import type { Project } from '$lib/types/types'; // Import your Project type
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;

	// Fetch the list of projects using the query
	const initial = await loadQuery<Project[]>(query);

	// Return the query and initial data for use by the page
	return {
		query,
		options: { initial }
	};
};
