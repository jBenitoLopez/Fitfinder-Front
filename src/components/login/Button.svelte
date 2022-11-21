<script lang="ts">
  export let type: string = "button";
</script>

<button
  on:click
  class="
    m-2
    py-2
    px-4
    bg-blue-700
    bg-opacity-25
    rounded-lg
    "
  {type}
>
  <slot />
</button>
