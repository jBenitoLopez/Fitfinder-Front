<script lang="ts">
  import type { RequestHandler } from "@sveltejs/kit";

  export const get: RequestHandler = () => {
    return {
      body: {
        ideas: [],
      },
    };
  };
</script>
