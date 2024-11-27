<script lang="ts">
	export let project: {
		projectTitle: string;
		slug: { current: string };
		heroImage: { asset: { url: string } };
		completionDate: string;
		sector: string;
		client: string;
		location: string;
	};
</script>

<a href={`/work/${project.slug.current}`} class="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
	<img
		src={project.heroImage.asset.url}
		alt={project.projectTitle}
		class="w-full h-48 object-cover"
	/>
	<div class="p-4">
		<h2 class="text-lg font-bold mb-2">{project.projectTitle}</h2>
		<p class="text-gray-600 text-sm">Completed: {project.completionDate}</p>
		<p class="text-gray-600 text-sm">Sector: {project.sector}</p>
		<p class="text-gray-600 text-sm">Client: {project.client}</p>
		<p class="text-gray-600 text-sm">Location: {project.location}</p>
	</div>
</a>
