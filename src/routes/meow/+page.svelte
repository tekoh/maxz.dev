<script lang="ts">
  import { shuffle } from "$lib/utils";
  import Img from "@zerodevx/svelte-img";

  const modules = import.meta.glob("$lib/assets/cats/*.*", {
    import: "default",
    eager: true,
    query: { as: "run" },
  });

  const images = shuffle(Object.entries(modules).map((i) => i[1]));
</script>

<svelte:head>
  <title>meow / maxz.dev</title>
</svelte:head>

<h1 class="mb-8 mt-14 w-full text-center text-3xl font-semibold text-primary">animals :D</h1>

<div class="flex w-full justify-center">
  <div class="columns-3 gap-4 px-4 md:max-w-5xl">
    {#each images as src}
      <div class="break-inside-avoid-column pb-[1.5em]">
        <Img {src} class="rounded " />
      </div>
    {/each}
  </div>
</div>
