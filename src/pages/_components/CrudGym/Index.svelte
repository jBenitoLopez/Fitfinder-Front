<script>
  import { leftover } from "@roxi/routify";
  import create from "./_create.svelte";
  import update from "./_update.svelte";

  export let data;
  const components = { create, update };

  $: [id, action = "update"] = $leftover.split("/");
  $: component = (id && components[action]) || create;
</script>

<!-- More info
  https://example.routify.dev/example
  https://github.com/roxiness/routify-starter
 -->

<svelte:component this={component} {data} {id} />
