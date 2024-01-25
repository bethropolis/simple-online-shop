<script>
    import Card from "./card.svelte";

    /**
     * @type {{ label: string, items: Array<{id: number}> }}
     */
     export let item = [];
</script>
<div class="carousel p-2 w-screen">
    <div class="carousel-item">
        {#each item.items as card}
            <Card item={card}/>
        {/each}
    </div> 
  </div>