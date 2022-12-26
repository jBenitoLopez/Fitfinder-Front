<script lang="ts">
  let classes: string = "";
  export let color: string = "";
  export { classes as class };
  export let type;
</script>

<button
  {type}
  class="btn {classes} {color?.length > 0 ? 'bg-' + color : ''}"
  on:click
>
  <slot />
</button>
