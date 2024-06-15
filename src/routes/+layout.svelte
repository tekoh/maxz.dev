<script>
  import Navbar from "$lib/components/navbar.svelte";
  import "../app.css";
</script>

<svelte:head>
  <script src="/meow/js/script.js" data-api="/meow/api/event" data-domain="maxz.dev"></script>
</svelte:head>

<Navbar></Navbar>

<slot />
