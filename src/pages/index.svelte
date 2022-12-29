<script lang="ts">
  import CardTopTen from "../components/elements/CardTopTen.svelte";
  let count: number = 0;
</script>

<main
  class="bg-heroFit bg-cover w-full h-full flex items-center flex-col gap-3 text-4xl">
  
  <div class="bg-transparent h-screen m-auto mt-5 text-center">
    <p class="text-emerald-100 font-mono">SE TU MEJOR</p>
    <div class="grid grid-cols-3 gap-3">
        <!-- Card topTen-->
        <div class="">
          <CardTopTen/>
        </div>
        <!-- Card review-->
        <div class="">
          <spam class="text-emerald-100 text-2xl">The best Gym reviews</spam>
          <div class="flex justify-center m-3">
            <div class="block p-4 rounded-lg shadow-lg bg-teal-100 max-w-sm">
              <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Gimnasio Fitup</h5>
              <p class="text-gray-700 text-base mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="flex justify-center m-3">
            <div class="block p-4 rounded-lg shadow-lg bg-teal-100 max-w-sm">
              <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Gimnasio Fitup</h5>
              <p class="text-gray-700 text-base mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="flex justify-center m-3">
            <div class="block p-4 rounded-lg shadow-lg bg-teal-100 max-w-sm">
              <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Gimnasio Fitup</h5>
              <p class="text-gray-700 text-base mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <!-- Card comment -->
        <div class="">
          <spam class="text-emerald-100 text-2xl">Latest Gym Comments</spam>
          <div class="flex justify-center m-3">
            <div class="block p-4 rounded-lg shadow-lg bg-teal-100 max-w-sm">
              <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Gimnasio Fitup</h5>
              <p class="text-gray-700 text-base mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</main>
