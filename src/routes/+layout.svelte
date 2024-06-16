<script>
  import Navbar from "$lib/components/navbar.svelte";
  import "../app.css";
</script>

<svelte:head>
  <script
    defer
    data-domain="animals.maxz.dev"
    src="https://analytics.maxz.dev/js/script.js"
  ></script>
</svelte:head>

<Navbar></Navbar>

<slot />
