<script>
  export let value;
  export let error = "";
  export let label = "";
</script>

<label class="block">
  {#if label}
    <span class="block">{label}</span>
  {/if}

  <select class="block select" class:border-error={error} bind:value on:blur>
    <slot />
  </select>

  {#if error}
    <span class="block error-text">{error}</span>
  {/if}
</label>
