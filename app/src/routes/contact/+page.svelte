<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger, Draggable } from 'gsap/all';
	import type { PageData } from './$types';

  
	export let data: PageData; // Cards data from +page.server.ts

  </script>
  

  <div class="viewParent mx-auto grid grid-row lg:grid-col md:grid-col"> 

  <div class="sliderParent  mx-auto flex flex-col lg:flex-row md:flex-row gap-2 flex-col-reverse">
		<!-- Slider Wrapper -->
		<div class="slider-wrapper  mx-auto grid grid-row lg:grid-col md:grid-col gap-2" data-slider="list" >
			{#each data.cards as card (card.slug.current)}
			  <div class="slideContainer" data-slider="slide">
				<img 
				src={card.heroImage.asset.url}
				alt={card.projectTitle}
				class="w-full h-48 object-cover"
				/>
			  </div>
			{/each}
		  </div> 

	<!-- Selected Slide -->
	<div class="selected-slide" data-slider="selected">
	<img 
	src={"https://studioblackburn.com/media/pages/archive/coif-1/edbe76129a-1632249252/1804-studioblackburn-138-557572edd5666-3000x-q85.jpg"}
	alt={"Big img"}
	class="w-full h-48 object-cover"
	/>
	</div>





</div>

<div class="viewContent mx-auto grid grid-col lg:grid-row md:grid-row gap-1">
	<div class="viewContent_container"> 
	<div class="welcomeContainer viewContent_child">
		<h5>(HEY, NICE TO MEET YOU)</h5>
		<p>
			Together we can provide a tailored care that enhances the quality of life for your elderly residents.
		</p>
	</div>

	<div class="expertContainer viewContent_child">
		<h5>(OUR EXPERTISE)</h5>
		<p>
			Experts in
articulating desire with impact, sensuality with
efficacy, and emotion with function.
		</p>
	</div>
</div>
	<div class="btmTag viewContent_child"> <h5>@2024 + Forma Elementa™ </h5> </div>



</div>
</div>
  