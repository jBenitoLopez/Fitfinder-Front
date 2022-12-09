<script>
  export let value = "";
  export let error = "";
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
    class:error
    {placeholder}
    {value}
    rows={rows2}
    on:input
    on:blur
  />
  {#if error}
    <span class="block error-text">{error}</span>
  {/if}
</label>

<style>
  .error {
    border-color: #f55;
  }

  .error-text {
    color: #f55;
  }
</style>
