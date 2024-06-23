<script>
  import Discord from "$lib/components/icons/discord.svelte";
  import Telegram from "$lib/components/icons/telegram.svelte";
</script>

<svelte:head>
  <title>maxz.dev</title>
</svelte:head>

<div class="hero min-h-screen">
  <div class="hero-content text-center">
    <div class="-mt-32 flex flex-col">
      <p class="-mb-6 text-sm md:-mb-8 md:text-base">hello i'm</p>
      <h1
        class="bg-gradient-to-r from-primary to-info bg-clip-text text-8xl font-bold text-transparent md:text-9xl"
      >
        max
      </h1>
      <p
        class="tooltip tooltip-bottom text-sm md:-mt-2 md:text-base"
        data-tip="not really (i'm not sure)"
      >
        paranoid schizophrenic
      </p>

      <a href="/stuff" class="btn btn-info mt-14">my stuff</a>

      <div class="mt-4 rounded-lg bg-base-200 p-4 shadow">
        <h2 class="text-lg font-semibold text-primary">contact</h2>
        <div class="divider -mt-1" />
        <div class="flex w-full items-center justify-center gap-4 fill-secondary">
          <a
            href="https://discord.com/users/672793821850894347"
            target="_blank"
            class="btn btn-ghost"
          >
            <Discord class="h-8 w-8" />
          </a>
          <a href="https://t.me/maxmeoww" target="_blank" class="btn btn-ghost">
            <Telegram class="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
