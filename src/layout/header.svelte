<script>
  let src = "src/assets/FitFinderColor.svg";
</script>

<div class="header flex justify-between items-center">
  
  <a href="/" class="pt-2"><img class="h-52" src={src} alt="Fitfinder"/></a>
  <div class="mr-5">
    <a href="/about" class="bg-teal-100 p-2 rounded text-emerald-900 hover:bg-sky-800 hover:text-emerald-100">About</a>
    <a href="/contact" class="bg-teal-100 p-2 rounded text-emerald-900 hover:bg-sky-800 hover:text-emerald-100">Contact</a>
    <a href="/gyms" class="bg-teal-100 p-2 rounded text-emerald-900 hover:bg-sky-800 hover:text-emerald-100">Gyms</a>
    <a href="/login" class="bg-teal-100 p-2 ml-4 rounded text-emerald-900 hover:bg-sky-800 hover:text-emerald-100">Login</a>
  </div>
</div>

<style>
  .header {
    height: var(--header-height);
    background-color:#003399;
  }
</style>
