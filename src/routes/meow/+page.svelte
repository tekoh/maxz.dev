<script lang="ts">
  import { shuffle } from "$lib/utils";
  import Img from "@zerodevx/svelte-img";
  import Masonry from "./masonry.svelte";

  const modules = import.meta.glob("$lib/assets/cats/*.*", {
    import: "default",
    eager: true,
    query: { as: "run" },
  });

  const images = shuffle(Object.entries(modules).map((i) => i[1]));
</script>

<div class="flex w-full justify-center">
  <div class="px-4 md:px-24">
    <Masonry>
      {#each images as src}
        <Img {src} alt="cat" />
      {/each}
    </Masonry>
  </div>
</div>
