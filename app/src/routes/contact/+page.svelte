<script lang="ts">
  
    // Declare the prop to receive data
    export let mockData;
  
    // Debug to check if the prop is received
    console.log('Received studioContent from contact:', mockData);
  </script>
  
  {#if mockData}
    <div>
      <h1>{mockData.welcome}</h1>
    </div>
  {:else}
    <p>No content available frmmc.</p>
  {/if}
x  