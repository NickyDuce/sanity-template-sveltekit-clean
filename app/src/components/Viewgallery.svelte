<script lang="ts">
	import { onMount } from 'svelte';
	import Card from './Card.svelte'; // Importing the Card component
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import Draggable from 'gsap/Draggable';
	import InertiaPlugin from 'gsap/InertiaPlugin';
  
	// Register GSAP plugins
	gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);
  
	let sliderContent = []; // Holds the content fetched from Sanity
  
	// Fetch data from Sanity or pass via props
	// For example purposes, sliderContent is hardcoded
	sliderContent = [
	  { title: 'Slide 1', description: 'Description for Slide 1' },
	  { title: 'Slide 2', description: 'Description for Slide 2' },
	  { title: 'Slide 3', description: 'Description for Slide 3' },
	  // Add more slides...
	];
  
	// Initialize GSAP on mount
	onMount(() => {
	  function initSlider() {
		const wrapper = document.querySelector('[data-slider="list"]');
		const slides = gsap.utils.toArray('[data-slider="slide"]');
		const nextButton = document.querySelector('[data-slider="button-next"]');
		const prevButton = document.querySelector('[data-slider="button-prev"]');
		const stepElement = document.querySelector('[data-slide-count="step"]');
		const stepsParent = stepElement.parentElement;
  
		let activeElement;
		const totalSlides = slides.length;
  
		// Update the total slides count
		const totalElement = document.querySelector('[data-slide-count="total"]');
		totalElement.textContent = totalSlides < 10 ? `0${totalSlides}` : totalSlides;
  
		// Dynamically generate step elements
		stepsParent.innerHTML = '';
		slides.forEach((_, index) => {
		  const stepClone = stepElement.cloneNode(true);
		  stepClone.textContent = index + 1 < 10 ? `0${index + 1}` : index + 1;
		  stepsParent.appendChild(stepClone);
		});
  
		const allSteps = stepsParent.querySelectorAll('[data-slide-count="step"]');
  
		// Horizontal loop setup
		const loop = horizontalLoop(slides, {
		  paused: true,
		  draggable: true,
		  center: false,
		  onChange: (element, index) => {
			activeElement && activeElement.classList.remove('active');
			const nextSibling = element.nextElementSibling || slides[0];
			nextSibling.classList.add('active');
			activeElement = nextSibling;
  
			// Animate step number
			gsap.to(allSteps, { y: `${-100 * index}%`, ease: 'power3', duration: 0.45 });
		  },
		});
  
		// Navigation buttons
		nextButton.addEventListener('click', () =>
		  loop.next({ ease: 'power3', duration: 0.725 })
		);
		prevButton.addEventListener('click', () =>
		  loop.previous({ ease: 'power3', duration: 0.725 })
		);
	  }
  
	  function horizontalLoop(items, config) {
		// Use your GSAP `horizontalLoop` implementation here
		// Make sure it is consistent with the example GSAP code provided
	  }
  
	  initSlider();
	});
  </script>
  
  <style>
	/* Tailwind CSS Classes with your custom styles */
	.slider-container {
	  @apply relative overflow-hidden w-full h-[80vh];
	}
	.slider-list {
	  @apply flex gap-4;
	}
	.slider-item {
	  @apply flex-shrink-0 w-[300px] h-[300px] rounded-lg bg-gray-800 text-white flex items-center justify-center text-lg;
	}
	.slider-nav {
	  @apply absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4;
	}
	.slider-button {
	  @apply p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition;
	}
  </style>
  
  <div class="slider-container">
	<!-- Slider Wrapper -->
	<div data-slider="list" class="slider-list">
	  {#each sliderContent as slide, index}
		<div data-slider="slide" class="slider-item">
		  <Card {slide} />
		</div>
	  {/each}
	</div>
  
	<!-- Navigation -->
	<div class="slider-nav">
	  <button data-slider="button-prev" class="slider-button">Prev</button>
	  <button data-slider="button-next" class="slider-button">Next</button>
	</div>
  
	<!-- Step Counter -->
	<div class="absolute bottom-4 left-4">
	  <div class="step-counter">
		<span data-slide-count="step" class="hidden">01</span>
		<div data-slide-count="total">00</div>
	  </div>
	</div>
  </div>
  