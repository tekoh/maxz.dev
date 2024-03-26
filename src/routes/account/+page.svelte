<script lang="ts">
  import dayjs from "dayjs";
  import { fade } from "svelte/transition";

  export let data;

  let enterLoginToken = false;
</script>

<svelte:head>
  <title>account / maxz.dev</title>
</svelte:head>

<div class="mt-28 flex w-full justify-center">
  <div class="w-full max-w-xs">
    {#if data.authenticated}
      <h1 class="text-center text-3xl text-primary">{data.user?.id}</h1>
      <p>created on {dayjs(data.user?.createdAt).format("YYYY-MM-DD")}</p>
    {:else}
      <div class="max-h-[42px]">
        {#if enterLoginToken}
          <form action="?/login" method="post" in:fade={{ delay: 100, duration: 100 }}>
            <input
              type="password"
              autofocus
              placeholder="access token"
              class="w-full rounded-lg border border-primary border-opacity-25 bg-background p-2 font-medium duration-300 placeholder:text-text placeholder:opacity-50 focus:border-opacity-100 focus:outline-none"
            />
          </form>
        {:else}
          <button
            out:fade={{ duration: 100 }}
            on:click={() => (enterLoginToken = true)}
            class="w-full rounded-lg border border-background border-opacity-0 bg-primary p-2 font-medium text-black duration-300 hover:opacity-75"
          >
            log in
          </button>
        {/if}
      </div>

      <form action="?/register" method="post">
        <button
          class="mt-4 w-full rounded-lg bg-secondary p-2 font-medium text-text duration-300 hover:opacity-75"
        >
          create account
        </button>
      </form>
    {/if}
  </div>
</div>
