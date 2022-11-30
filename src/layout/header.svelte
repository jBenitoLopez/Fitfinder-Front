<script>
  let src = "src/assets/FitFinderLogo.png";
</script>

<div class="bg-slate-200 header flex justify-between items-center">
  
  <a href="/" class="p-2"><img class="h-13 w-20" src={src} alt="Fitfinder"/></a>
  <div class="mr-5">
    <a href="/about" class="bg-blue-400 p-3 rounded text-white">About</a>
    <a href="/contact" class="bg-blue-400 p-3 rounded text-white">Contact</a>
    <a href="/gyms" class="bg-blue-400 p-3 rounded text-white">Gyms</a>
    <a href="/login" class="bg-blue-400 p-3 ml-4 rounded text-white">Login</a>
  </div>
</div>

<style>
  .header {
    height: var(--header-height);
  }
</style>
