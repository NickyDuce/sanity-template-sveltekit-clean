<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	// import { ScrollTrigger, Draggable } from 'gsap/all';
	export let data: PageData; // Cards data from +page.server.ts
	
	
	onMount(() => {
	// gsap.registerPlugin(ScrollTrigger, Draggable);

	gsap.utils.toArray('.cardTitle').forEach((line, i) => {
	const links = line.querySelectorAll("a"),
			tl = horizontalLoop(links, {
			repeat: -1, 
			speed: 1 + i * .2,
			reversed: i ? true : false,
			paddingRight: parseFloat(gsap.getProperty(links[0], "marginRight", "px")) // otherwise first element would be right up against the last when it loops. In this layout, the spacing is done with marginRight.
			});
	links.forEach(link => {
		link.addEventListener("mouseenter", () => gsap.to(tl, {timeScale: 0, overwrite: true}));
		link.addEventListener("mouseleave", () => gsap.to(tl, {timeScale: i ? -1 : 1, overwrite: true}));
	});

	// console.log("List of items within cardTitle: ", links)
	});

	// This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.
	function horizontalLoop(items:any, config:any) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), 
	totalWidth, curX, distanceToStart, distanceToLoop, item, i;

	gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
      xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
      return xPercents[i];
    }
  });
  gsap.set(items, {x: 0});
  totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = xPercents[i] / 100 * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
      .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = vars => toIndex(curIndex+1, vars);
  tl.previous = vars => toIndex(curIndex-1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}
});
</script>

<div class="viewParent mx-auto grid grid-row lg:grid-col md:grid-col">
	
		<!-- Big Box -->
		<div class="bigBox">
			<img 
				src={"https://studioblackburn.com/media/pages/archive/coif-1/edbe76129a-1632249252/1804-studioblackburn-138-557572edd5666-3000x-q85.jpg"} 
				alt={"Big img"} 
				class="object-cover" 
			/>
			<div class="cardTitle container-full">
				<a href="#" class="stb-item">
				<p> Project {data.cards[0]?.projectTitle}</p>
				</a>

				<a href="#" class="stb-item">
					<p> Client {data.cards[0]?.client}</p>
				</a>

				<a href="#" class="stb-item">
					<p> Sector {data.cards[0]?.sector}</p>
				</a>

				<a href="#" class="stb-item">
					<p> Date {data.cards[0]?.completionDate}</p>
				</a>
			</div>
		</div>
		
	
	<!-- Small Box -->
	<div class="smallBox">
		<img 
			src={data.cards[0]?.heroImage.asset.url} 
			alt={data.cards[0]?.projectTitle} 
			class="object-cover" 
		/>
			<div class="cardTitle container-full">
				<a href="#" class="stb-item">
				<p> Project {data.cards[1]?.projectTitle}</p>
				</a>

				<a href="#" class="stb-item">
					<p> Client {data.cards[1]?.client}</p>
				</a>

				<a href="#" class="stb-item">
					<p> Sector {data.cards[1]?.sector}</p>
				</a>

				<a href="#" class="stb-item">
					<p> Date {data.cards[1]?.completionDate}</p>
				</a>
			</div>
	</div>



	<!-- Content Section -->
	<div class="viewContent mx-auto grid grid-col lg:grid-row md:grid-row gap-1">
		<div class="viewContent_container">
			<div class="welcomeContainer viewContent_child">
				<h5>(HEY, NICE TO MEET YOU)</h5>
				<p>
					Together we can provide a tailored care that enhances the quality of life for your elderly residents.
				</p>
			</div>

			<div class="viewContent_child">
				<h5>(HEY, NICE TO MEET YOU)</h5>
				<p>
					Together we can provide a tailored care that enhances the quality of life for your elderly residents.
				</p>
			</div>
		</div>
	</div>
</div>
