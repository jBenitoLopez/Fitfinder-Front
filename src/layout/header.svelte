<script>
  let src = "src/assets/FitFinderLogo.png";
</script>

<div class="header flex justify-between items-center">
  <!-- svelte-ignore a11y-missing-attribute -->
  <a href="/" class="p-2"><img class="h-13 w-20" src={src}/></a>
  <div class="mr-5">
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    <a href="/gyms">Gyms</a>
  </div>
</div>

<style>
  .header {
    height: var(--header-height);
  }
</style>
