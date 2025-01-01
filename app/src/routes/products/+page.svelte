<script lang="ts">
    import type { Product } from './+page.server';
  
    export let data: { products: Product[] };
  
    let filter: string = 'all';
    let isDropdownOpen: boolean = false;
  
        // Count the number of items per category
      $: categoryCounts = filterOptions.map(({ value }) =>
        value === 'all'
          ? data.products.length
          : data.products.filter(product => product.type.toLowerCase() === value).length
      );

    // Filtered products
    $: filteredProducts = filter === 'all'
      ? data.products
      : data.products.filter((product) => product.type.toLowerCase() === filter.toLowerCase());
  
    const filterOptions = [
      { label: 'All ', value: 'all' },
      { label: 'Seating ', value: 'seating' },
      { label: 'Tables ', value: 'tables' },
      { label: 'Lighting ', value: 'lighting' },
      { label: 'Storage ', value: 'storage' },
      { label: 'Objects ', value: 'objects' }
    ];


  </script>
  
  <div class="ProductsPage">
    <!-- Filter Container -->
    <div class="filterContainer">
      <!-- Desktop Filter -->
      <ul class="filterParent">
        {#each filterOptions as { label, value }, i}
          <li>
            <a href="#" 
            on:click|preventDefault={() => (filter = value)}
            class={filter === value ? 'header-title active' : 'header-title'}
            >
            
            {label} <span class={filter !== value ? 'count_hidden' : 'count_active'}>
              ({categoryCounts[i]})</span>
          </a>
          </li>
        {/each}
      </ul>
  
      <!-- Mobile Dropdown -->
      <div class="dropdown">
        <button
          class:open={isDropdownOpen}
          on:click={() => (isDropdownOpen = !isDropdownOpen)}
        >

          {filterOptions.find((option) => option.value === filter)?.label || 'Filter'}

        </button>
        <ul class:show={isDropdownOpen}>
          {#each filterOptions as { label, value }}
            <li>
              <a
                href="#"
                on:click|preventDefault={() => {
                  filter = value;
                  isDropdownOpen = false;
                }}
                class={filter === value ? 'link-accent active' : 'link-accent'}
              >
              {label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  
    <!-- Products Display -->
    <div class="ProductViewContainer">
      {#if filteredProducts.length > 0}
        <div class="grid">
          {#each filteredProducts as product}
          <a 
          href={`/products/${product.slug}`} 
          class="block border rounded-lg shadow hover:shadow-lg transition">
            <div class="card">
              <img src={product.images[0]} alt={product.name} />
              <div class="card-content">
                <h2>{product.name}</h2>
              </div>
            </div>
            </a>
          {/each}
        </div>
      {:else}
        <p class="empty-state">Items not found</p>
      {/if}
    </div>
  </div>