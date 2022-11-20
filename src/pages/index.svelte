<script lang="ts">
  let count: number = 0;
</script>

<main
  class="flex items-center justify-center flex-col gap-3 text-xl h-screen w-screen"
>
  <div>
    <a href="https://svelte.dev/" class="text-orange-600"> Svelte </a>
    <a href="https://tailwindcss.com/" class="text-blue-600"> TailwindCSS </a>
    <a href="https://www.typescriptlang.org/" class="text-blue-300">
      TypeScript
    </a>
    <a href="https://www.routify.dev/" class="text-violet-600"> Routify </a>
    <a href="https://vitejs.dev/" class="text-orange-600"> Vite </a>
  </div>
  <button
    class="button shadow-lg p-3 bg-blue-300 rounded-xl text-white"
    on:click={() => count++}
  >
    Counter {count}
  </button>
</main>
