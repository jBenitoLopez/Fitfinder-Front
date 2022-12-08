<script lang="ts">
  let count: number = 0;
</script>

<main
  class="bg-heroFit bg-cover w-full h-full flex items-center justify-center flex-col gap-3 text-4xl"
>
  <p>SE TU MEJOR</p>
  <section class="">
    <div class="p-5 screen bg-gray-100">
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

      <div class="bk-slate-400 p-7 m-1 rounded border-black ">
        <p>The best Gym reviews</p>
      </div>

      <div class="p-7 m-1">
        <p>Latest Gym Comments</p>
      </div>
  
      
    </div>
  </section>


</main>
