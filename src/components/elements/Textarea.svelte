<script lang="ts">
  export let value = "";
  export let error: any = "";
  export let rows = "";
  export let label = "";
  export let placeholder = "";

  let rows2 = rows === "" ? 2 : +rows;

  // function handleInput({ target: t }) {
  //   rows = rows === 0 ? 2 : rows;
  // on:input={handleInput}
  // }
</script>

<label class="block">
  {#if label}
    <span class="label block">{label}</span>
  {/if}
  <textarea
    class="block textarea"
    class:border-error={error}
    rows={rows2}
    {placeholder}
    bind:value
    on:input
    on:blur
    {...$$restProps}
  />
  {#if error}
    <span class="block error-text">{error}</span>
  {/if}
</label>
