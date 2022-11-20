<script>
  import Header from "../layout/header.svelte";
</script>

<main>
  <Header />
  <div class="remaning">
    <slot />
  </div>
</main>

<style>
  .remaning {
    height: calc(100vh - var(--header-height));
  }
</style>
