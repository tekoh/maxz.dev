<script lang="ts">
  import dayjs from "dayjs";

  export let data;
</script>

<div class="flex w-full justify-center">
  <div class="w-full max-w-5xl">
    {#if data.authenticated}
      <h1 class="text-center text-3xl text-primary">{data.user?.id}</h1>
      <p>created on {dayjs(data.user?.createdAt).format("YYYY-MM-DD")}</p>
    {:else}
      <button>log in</button>
    {/if}
  </div>
</div>
