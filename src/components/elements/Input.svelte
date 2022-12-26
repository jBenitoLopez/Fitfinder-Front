<script>
  export let type = "text";
  export let value = type === "text" ? "" : type === "number" ? 0 : null;
  export let error = "";
  export let label = "";
  export let placeholder = "";

  function handleInput({ target: t }) {
    if (type === "number") {
      value = t.value === "" ? null : t.valueAsNumber;
    } else {
      value = t.value;
    }
  }
</script>

<label class="block">
  {#if label}
    <span class="label block">{label}</span>
  {/if}
  <input
    class="
    block input text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    class:border-error={error}
    {type}
    {placeholder}
    {value}
    on:input={handleInput}
    on:input
    on:blur
    {...$$restProps}
  />
  {#if error}
    <span class="block error-text">{error}</span>
  {/if}
</label>
