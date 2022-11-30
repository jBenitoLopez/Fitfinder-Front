<script lang="ts">
  let count: number = 0;
</script>

<main
  class="bg-heroFit bg-cover w-full h-full flex items-center justify-center flex-col gap-3 text-xl"
>
  <!--
  <div class="bg-black max-w-md">
    <a href="/login" class="mx-10 bg-blue-400 p-3 rounded text-white"> Login</a>
    <a href="/register" class="bg-red-400 p-3 rounded text-white"> Register</a>
  </div>
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
-->
  <template>
    <div class="p-5 h-screen bg-gray-100">
      <h1 class="text-xl mb-2">Top Ten Gym</h1>
  
      <div class="overflow-auto rounded-lg shadow hidden md:block">
        <table class="w-full">
          <thead class="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">Name Gym</th>
            <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Direction</th>
           
          </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
          <tr class="bg-white">
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <a href="#" class="font-bold text-blue-500 hover:underline">1</a>
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              Name Gym 1
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <span
              class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Direccion Gym 1</span>
            </td>
            
          </tr>
          <tr class="bg-gray-50">
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <a href="#" class="font-bold text-blue-500 hover:underline">2</a>
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Name Gym 2</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <span
              class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Direccion Gym 2</span>
            </td>
            
          </tr>
          <tr class="bg-white">
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <a href="#" class="font-bold text-blue-500 hover:underline">3</a>
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Name Gym 3</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <span
              class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Direccion Gym 3</span>
            </td>
            
          </tr>
          </tbody>
        </table>
      </div>
  
      
    </div>
  </template>


</main>
