import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
  const { preview } = event.locals;

  // Fetch parent data
  const parentData = await event.parent();

  console.log('Parent Data in Layout:', parentData); // Debug data passed from child pages
  console.log('Preview Mode:', preview); // Debug preview mode

  return {
    ...parentData, // Ensure parent data (e.g., studioContent) is preserved
    preview,
  };
};
