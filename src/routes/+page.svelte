<script>
  import telegram from "$lib/assets/telegram.png?as=run:0";
  import discord from "$lib/assets/discord.png?as=run:0";
  import Img from "@zerodevx/svelte-img";
</script>

<svelte:head>
  <title>maxz.dev</title>
</svelte:head>

<h1 class="mt-40 w-full text-center text-6xl font-bold text-primary sm:text-8xl">maxz.dev</h1>
<p class="-mt-2 text-center text-xs text-secondary">paranoid schizophrenic</p>
<div class="mt-8 flex w-full items-center justify-center gap-4">
  <a href="https://t.me/maxmeoww" target="_blank">
    <Img src={telegram} class="w-8" />
  </a>
  <a href="https://discord.com/users/672793821850894347" target="_blank">
    <Img src={discord} class="w-8" />
  </a>
</div>
