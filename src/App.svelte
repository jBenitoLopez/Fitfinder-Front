<script lang="ts">
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import { SvelteToast } from "@zerodevx/svelte-toast";
</script>

<Router {routes} />
<SvelteToast />
