<script>
  import Discord from "$lib/components/icons/discord.svelte";
  import Telegram from "$lib/components/icons/telegram.svelte";
</script>

<svelte:head>
  <title>maxz.dev</title>
</svelte:head>

<h1 class="mt-40 w-full text-center text-6xl font-bold text-primary sm:text-8xl">maxz.dev</h1>
<p class="-mt-2 text-center text-xs text-accent">paranoid schizophrenic</p>
<div class="mt-8 flex w-full items-center justify-center gap-4">
  <a href="https://t.me/maxmeoww" target="_blank" class="tooltip block" data-tip="telegram">
    <Telegram class="w-12 fill-secondary" />
  </a>
  <a
    href="https://discord.com/users/672793821850894347"
    target="_blank"
    class="tooltip block"
    data-tip="discord"
  >
    <Discord class="w-12 fill-secondary" />
  </a>
</div>
