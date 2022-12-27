<script>
  import Header from "../layout/header.svelte";
</script>

<main class="bg-gray-100">
  <Header />
  <div class="remaning overflow-y-auto">
    <slot />
  </div>
</main>

<style>
  .remaning {
    height: calc(100vh - var(--header-height));
  }
</style>
