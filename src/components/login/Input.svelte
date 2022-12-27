<script lang="ts">
  export let label: string = "";
  export let type: string = "text";
  export let value: string | number | boolean = "";
  const inputHandler = (e) => {
    value = e.target.value;
  };
</script>

<div class="flex flex-col w-full my-2 ">
  <label for="" class="text-gray">
    {label}
  </label>
  <input
    {type}
    {value}
    {...$$restProps}
    on:change
    on:input={inputHandler}
    class="rounded-lg h-10 active:outline-none outline-none p-4"
  />
</div>
