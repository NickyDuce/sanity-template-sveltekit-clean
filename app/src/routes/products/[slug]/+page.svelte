<script lang="ts">
    export let data: { product: import('./+page.server').Product };
  </script>
  
  <div class="container mx-auto p-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Product Images -->
      <div>
        <img 
          src={data.product.images[0]} 
          alt={data.product.name} 
          class="w-full h-auto object-cover rounded-lg mb-4"
        />
        <div class="grid grid-cols-2 gap-2">
          {#each data.product.images.slice(1) as image}
            <img 
              src={image} 
              alt={data.product.name} 
              class="w-full h-24 object-cover rounded-lg"
            />
          {/each}
        </div>
      </div>
  
      <!-- Product Details -->
      <div>
        <h1 class="text-2xl font-bold mb-2">{data.product.name}</h1>
        <p class="text-gray-700 mb-4">Type: {data.product.type}</p>
        <p class="text-gray-500 mb-6">{data.product.description}</p>
        <p class="text-lg font-semibold mb-4">Price: ${data.product.salePrice.toFixed(2)}</p>
  
        <div class="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 class="text-lg font-medium mb-2">Specifications</h2>
          <p>Width: {data.product.specifications.width}</p>
          <p>Height: {data.product.specifications.height}</p>
          <p>Dimension: {data.product.specifications.dimension}</p>
          <p>Colour: {data.product.specifications.colour}</p>
        </div>
  
        <p class="text-gray-700 mb-2">Created by: {data.product.creator}</p>
        <p class="text-gray-700">Country of Origin: {data.product.countryOfOrigin}</p>
      </div>
    </div>
  </div>
  