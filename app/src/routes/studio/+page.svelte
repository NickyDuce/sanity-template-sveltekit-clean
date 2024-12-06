<script lang="ts">
  import type { Studio } from '$lib/types/types';
  import { urlFor } from '$lib/sanity/image';


 // export let studioContent: any;
 export let data: { studioContent: Studio };
 const studioContent = data.studioContent;

  // Debugging the received prop
  //console.log('Received Studio Content in Svelte:', studioContent.welcome);

  // Fallback for missing image
  function getImageUrl(image: any) {
    return image ? urlFor(image).url() : '';
  }
</script>

  <div class="studio-page">
    <!-- Studio Image -->
     {#if studioContent.studioImage}
      <img
        src={getImageUrl(studioContent.studioImage.asset)}
        class="studio-image"
      />
    {/if}

    <!-- Welcome Section -->
      <div class="welcome">
        <p>{studioContent?.welcome}</p>
      </div>

    <!-- Section 01 -->
    {#if studioContent.section01}
      <section>
        <h2>{studioContent.section01.title}</h2>
        <p>{studioContent.section01.part1}</p>
        <p>{studioContent.section01.part2}</p>
      </section>
    {/if}

    <!-- Section 02 -->
    {#if studioContent.section02}
      <section>
        <h2>{studioContent.section02.title}</h2>
        <p>{studioContent.section02.description}</p>
        <h3>{studioContent.section02.subHeading1}</h3>
        <h3>{studioContent.section02.subHeading2}</h3>
        <p>{studioContent.section02.part1}</p>
        <p>{studioContent.section02.part2}</p>
      </section>
    {/if}

<!-- Section 06 -->
{#if studioContent.faces}
  <section>
    {#if studioContent.faces}
      <!-- svelte-ignore a11y-media-has-caption -->
      <video controls>
        <source src={studioContent.faces.footage.asset.url} type="video/mp4" />
      </video>
    {/if}
    <p>{studioContent.faces.theTeam}</p>
    <div class="partner-list grid grid-cols-3 gap-4">
      {#each Array.isArray(studioContent.faces.partnerList) ? studioContent.faces.partnerList : [] as partner}
        {#if partner.partner}
          <div class="partner">
            <img src={getImageUrl(partner.partner.image.asset)} alt={partner.partner.name} />
            <h4>{partner.partner.name}</h4>
            <p>{partner.partner.role}</p>
            <a href={partner.partner.linkedIn} target="_blank">LinkedIn</a>
          </div>
        {/if}
      {/each}
    </div>
  </section>
{/if}
</div>
