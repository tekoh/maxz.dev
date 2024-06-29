<script>
  import { ArrowLeft, ExternalLink } from "lucide-svelte";
</script>

<svelte:head>
  <title>stuff :: maxz.dev</title>
</svelte:head>

<div class="w-full p-2">
  <a href="/" class="btn btn-ghost">
    <ArrowLeft class="text-primary" />
  </a>
</div>

<div class="flex w-full justify-center">
  <div class="mt-18 grid grid-cols-1 gap-8 px-4 md:max-w-5xl md:grid-cols-2 md:px-0">
    <div class="card bg-base-200 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-primary">nypsi</h2>

        <p class="whitespace-normal break-words text-sm">
          discord bot featuring a unique & competitive economy, moderation and fun games
        </p>

        <div class="card-actions justify-end">
          <a href="https://nypsi.xyz" target="_blank" class="btn btn-ghost">
            <span>website</span>
            <ExternalLink size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </div>

    <div class="card bg-base-200 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-primary">animals API</h2>

        <p class="whitespace-normal break-words text-sm">
          website that allows users to upload pictures of their pets, where anyone can access using
          an API. used by <a href="https://nypsi.xyz" class="link link-primary" target="_blank"
            >nypsi</a
          >
        </p>

        <div class="card-actions justify-end">
          <a href="https://animals.maxz.dev" target="_blank" class="btn btn-ghost">
            <span>website</span>
            <ExternalLink size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </div>

    <div class="card bg-base-200 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-primary">files</h2>

        <p class="whitespace-normal break-words text-sm">
          private temporary file hosting site. requires an invite token to be allowed access, which
          only certain users can generate.
        </p>

        <div class="card-actions justify-end">
          <a href="https://files.maxz.dev" target="_blank" class="btn btn-ghost">
            <span>website</span>
            <ExternalLink size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
