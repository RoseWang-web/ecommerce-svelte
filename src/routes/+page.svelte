<script>
    import ProductCard from "$lib/components/ProductCard.svelte";

  export let data;
  const products = data.products;
</script>

<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
{#each products as product}
  <ProductCard {product} />
{/each}
</div>
