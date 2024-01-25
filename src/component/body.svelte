<script>
    import { items } from "$lib/items";
    import Carousel from "./carousel.svelte";

    
</script>

<main id="items">

{#each items as item}
    <div class="px-4">
        <h3 class="uppercase">{item.label}</h3>
    </div>
    <Carousel {item}/>
{/each}

</main>

<style>
 
</style>
