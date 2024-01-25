<script>
    import "../app.css";
    import Footer from "../component/footer.svelte";
    import Nav from "../component/nav.svelte";
</script>

<svelte:head>
<title>Dresslagance fashions— Retro Redefined</title>
<meta name="title" content="Dresslagance fashions— Retro Redefined" />
<meta name="description" content="Embrace the charm of retro with Dresslagance. Our vintage-inspired designs help you make a bold statement. Discover your perfect piece today.
" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://dresslagancefashions.com/" />
<meta property="og:title" content="Dresslagance fashions— Retro Redefined" />
<meta property="og:description" content="Embrace the charm of retro with Dresslagance. Our vintage-inspired designs help you make a bold statement. Discover your perfect piece today.
" />
<meta property="og:image" content="./dresslagance.png" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://dresslagancefashions.com/" />
<meta property="twitter:title" content="Dresslagance fashions— Retro Redefined" />
<meta property="twitter:description" content="Embrace the charm of retro with Dresslagance. Our vintage-inspired designs help you make a bold statement. Discover your perfect piece today.
" />
<meta property="twitter:image" content="./dresslagance.png" />

<!-- Meta Tags Generated with https://metatags.io -->
</svelte:head>
<main class="bg-primary-content h-full w-full">
  <Nav />
    <slot />
    <Footer />
</main>

<!-- markup (zero or more items) goes here -->

<style>
    /* your styles go here */
</style>
