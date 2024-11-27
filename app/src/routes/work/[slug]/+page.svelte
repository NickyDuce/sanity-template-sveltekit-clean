<script lang="ts">
  import type { Project } from '../../../lib/types/types';
import { client } from '$lib/sanity/client';
  import imageUrlBuilder from '@sanity/image-url';

  export let data: { project: Project };
  const project = data.project;



  // Configure the image URL builder
  const builder = imageUrlBuilder(client);

  // Function to generate image URLs
  function urlFor(source: any) {
    return builder.image(source).url();
  }

</script>

<div class="container mx-auto p-8">
  <!-- Hero Section -->
  <h1 class="text-4xl font-bold">{project.projectTitle}</h1>
  <div class="mb-8">
    <img
      src={urlFor(project.heroImage?.asset)}
      alt="Hero"
      class="rounded-lg shadow-md w-full"
    />
  </div>

  <!-- Project Details -->
  <div class="mb-8">
    <h1 class="text-4xl font-bold">{project.sector} Project</h1>
    <p class="text-gray-600">Completed: {project.completionDate}</p>
    <p class="text-gray-600">Client: {project.client}</p>
    <p class="text-gray-600">Location: {project.location}</p>
    <ul class="text-gray-600">
      <li>Services: {project.services.join(', ')}</li>
      <li>Team: {project.team.join(', ')}</li>
    </ul>
  </div>

  <!-- Section 01: Overview -->
  <section class="mb-8">
    <h2 class="text-2xl font-bold">{project.overview.boldSummary}</h2>
    <p>{project.overview.briefContent}</p>
  </section>

  <!-- Section 02: Challenges -->
  <section class="mb-8">
    <h2 class="text-2xl font-bold">Challenges</h2>
    <p>{project.challenges.approach}</p>
    <div class="grid grid-cols-2 gap-4">
      <img
        src={urlFor(project.challenges.image1?.asset)}
        alt=""
        class="rounded-md shadow"
      />
    </div>
    <h3 class="text-xl font-bold">{project.challenges.boldSummary}</h3>
    <p>{project.challenges.briefContent}</p>
    <div class="grid grid-cols-2 gap-4">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src={urlFor(project.challenges.image3?.asset)}
        alt="Challenge Image 3"
        class="rounded-md shadow"
      />
      <img
        src={urlFor(project.challenges.image4?.asset)}
        alt="Challenge Image 4"
        class="rounded-lg shadow"
      />
    </div>
  </section>

  <!-- Image Grid -->
  <section class="mb-8 grid grid-cols-3 gap-4">
    <img
      src={urlFor(project.imageGrid.image1?.asset)}
      alt="Grid Image 1"
      class="rounded-md shadow"
    />
    <img
      src={urlFor(project.imageGrid.image2?.asset)}
      alt="Grid Image 2"
      class="rounded-md shadow"
    />
    <img
      src={urlFor(project.imageGrid.image3?.asset)}
      alt="Grid Image 3"
      class="rounded-md shadow"
    />
  </section>
  <img
    src={urlFor(project.imageGrid.largeImage?.asset)}
    alt="Large Grid Image"
    class="rounded-lg shadow w-full mb-8"
  />

  <!-- Section 03: Outcome -->
  <section>
    <h2 class="text-2xl font-bold">{project.outcome.boldSummary}</h2>
    <p>{project.outcome.briefContent}</p>
  </section>
</div>
