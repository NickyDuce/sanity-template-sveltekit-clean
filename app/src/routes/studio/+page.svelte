<script lang="ts">
  import type { studioContent } from '$lib/types/types';
  import { urlFor } from '$lib/sanity/image';

  // Declare studioContent as a prop
  export let studioContent: studioContent | null;

  // Debugging the received prop
  console.log('Received Studio Content in Svelte:', studioContent);

  // Fallback for missing image
  function getImageUrl(image: any) {
    return image ? urlFor(image).url() : '';
  }
</script>

{#if studioContent}
  <div class="studio-page">
    <!-- Studio Image -->
    {#if studioContent.studioImage}
      <img
        src={getImageUrl(studioContent.studioImage.asset)}
        alt="Studio Image"
        class="studio-image"
      />
    {/if}

    <!-- Welcome Section -->
    {#if studioContent.welcome}
      <div class="welcome">
        <p>{studioContent.welcome}</p>
      </div>
    {/if}

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

    <!-- Faces Section -->
    {#if studioContent.faces}
      <section>
        <h2>Faces</h2>
        <video src={studioContent.faces.footage.asset.url} controls></video>
        <p>{studioContent.faces.theTeam}</p>
        <div>
          {#each studioContent.faces.partnerList as partner}
            <div>
              <img src={getImageUrl(partner.partner.image.asset)} alt={partner.partner.name} />
              <p>{partner.partner.name}</p>
              <p>{partner.partner.role}</p>
              <a href={partner.partner.linkedIn}>LinkedIn</a>
            </div>
          {/each}
        </div>
      </section>
    {/if}
  </div>
{:else}
  <p>No content available.</p>
{/if}
