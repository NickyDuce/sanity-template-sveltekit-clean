<script lang="ts">
	import { onMount } from "svelte";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { Draggable } from "gsap/Draggable";

	// Register GSAP plugins
	gsap.registerPlugin(ScrollTrigger, Draggable);

	onMount(() => {
		// Example GSAP animation
		gsap.to(".box", {
			x: 300,
			duration: 2,
			rotation: 360,
			scrollTrigger: {
				trigger: ".box",
				start: "top center",
				end: "bottom center",
				scrub: true
			}
		});

		// Example Draggable
		Draggable.create(".draggable-box", {
			type: "x,y",
			edgeResistance: 0.65,
			bounds: ".container",
			inertia: true
		});
	});
</script>

<style>
	.container {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		border: 2px solid #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.box, .draggable-box {
		width: 100px;
		height: 100px;
		background-color: red;
		margin: 20px;
	}

	.draggable-box {
		background-color: blue;
	}
</style>

<div class="container">
	<div class="box"></div>
	<div class="draggable-box"></div>
</div>
