<script lang="ts">
	// Import useQuery for real-time updates and the Project type
	import { writable } from 'svelte/store';
	import { useQuery } from '@sanity/client';
	import Card from '../../components/Card.svelte';
	import Welcome from '../../components/Welcome.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const projectsStore = writable([]);

	useQuery({
		fetch: true,
	}).then(data => {
	let projects = [];
	projectsStore.subscribe(value => {
		projects = value;
	});
	});
	});

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
</section>
