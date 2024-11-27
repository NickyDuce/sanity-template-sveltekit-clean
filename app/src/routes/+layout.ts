import { setPreviewing } from '@sanity/visual-editing/svelte';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = (event) => {
  const { preview, ...rest } = event.data;

  //console.log('Layout Load Data:', event.data); // Debug client-side data

  setPreviewing(preview);

  return { ...rest, preview };
};
