<script lang="ts">

	import { client } from '$lib/sanity/client';
	import imageUrlBuilder from '@sanity/image-url';

	
	type Project = { 
	  slug: {current:string};
	  projectTitle: string;
	  heroImage: { asset: { _id: string; url: string } };
	  completionDate: string;
	  services: string[];
	  imageGrid:{
      image1: { asset: { url: string } };
      image2: { asset: { url: string } };
      image3: { asset: { url: string } };
	};
	};

	export let data : {projects:Project[]}
	const projects = data.projects;


	  // Configure the image URL builder
	  const builder = imageUrlBuilder(client);

		// Function to generate image URLs
		function urlFor(source: any) {
		return builder.image(source).url();
		}



let isGridView =false;

//Toggle Function
function toggleView() {
	isGridView = !isGridView;
}

  </script>
  


  
  <section class="projectSection">

	<div class="header row columns"> 

		<div class="col col-title">
			<div class="col-row col-row-title">
				<h1 class="m split-lines animation-transition pxl"> 
				<div class="single-line" style="translate: none; rotate: none; scale: none; transform: rotate(0.001deg);">
					Digital story telling with a blend
				</div>
				<div class="single-line" style="translate: none; rotate: none; scale: none; transform: rotate(0.001deg);">
					of artistry and precision,
				</div>
				<div class="single-line" style="translate: none; rotate: none; scale: none; transform: rotate(0.001deg);">
					ensuring every interaction
				</div>
				<div class="single-line" style="translate: none; rotate: none; scale: none; transform: rotate(0.001deg);">
					leaves a lasting impression.
				</div>
				</h1>
			</div>
		</div>

		<div class="col col-whitespace"></div>
		
		<div class="col col-toggle"> 
		<h3 class="col p-md-accent">Case Studies </h3>

		<button class="col viewbtn" on:click={toggleView}>
			<p class="link-accent">{isGridView ? 'List View' : 'Grid View'}</p>
		  </button>
		</div>
	</div>



	{#if isGridView}
    <!-- Grid Layout -->
	 <div class="container"> 
    <ul class="row grid grid-view">
      {#each projects as project, index}
	  <li class="col"> 
        <a href={`/work/${project.slug.current}`} 
		class="grid-item"
		>
          <!-- Hero Image -->
		   <div class="row row-thumbnail">
          <img 
            src={urlFor(project.heroImage?.asset)} 
            alt={project.projectTitle} 
            class="heroImage" 
          />
		
		  <div class="row columns projectDetails">
			<div class="col col-title">
				<h2 class="pxl">{project.projectTitle}</h2>
			</div>


			<div class="col col-services">
				<h2 class="pxl">{project.projectTitle}</h2>
			</div>

			<div class="col col-number">
				<span class="project-number pxl">0{index + 1}</span>
			</div>

		  </div>
		</div>

        </a>
	</li>
      {/each}
    </ul>
</div>
  {:else}

    <!-- Project list Layout -->
	
	<div class="container"> 
		<ul class="row grid project-list">
		{#each projects as project, index}
		<li class="row project-item"> 
		<a 
		href={`/work/${project.slug.current}`}
		class="project"
		> 
			
			<!-- Project title -->
			<div class="title">
			<h2 class="size-4xl">{project.projectTitle}</h2>
			<h2 class="subheadings"> /{project.services}</h2>
			</div>

			<div class="preview">
					<img
					  src={urlFor(project.imageGrid.image1?.asset)}
					  alt="project display preview visual"
					  class="previewImg"
					/>
					<img
					  src={urlFor(project.imageGrid.image2?.asset)}
					  alt="project display preview visual"
					  class="previewImg"
					/>
					<img
					  src={urlFor(project.imageGrid.image3?.asset)}
					  alt="project display preview visual"
					  class="previewImg"
					/>
			</div>

			<div class="project-number size-4xl">0{index + 1}</div>
		</a>
	</li>
		{/each}
	</ul>
	  </div>
	  {/if}
  </section>
  