<script lang="ts">
	// Import useQuery for real-time updates and the Project type
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '../components/Card.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	// Initialize the query with the data from the server
	const q = useQuery(data);

	// Reactively update the posts variable whenever the query resolves
	$: ({ data: projects } = $q);
</script>


<section class="container mx-auto p-8">
	{#if projects?.length}
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each projects as project}
				<Card project={project} />
			{/each}
		</div>
	{:else}
		<Welcome />
	{/if}

<!-- Using a CDN for GSAP -->

</section>

