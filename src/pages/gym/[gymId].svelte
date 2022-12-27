<script lang="ts">
  import { getGym, saveGym } from "../../services/gym";
  import FormGym from "./FormGym.svelte";

  export let gymId;

  const adminId = import.meta.env.VITE_ADMIN_ID;
  let gym; // = get(gymId);

  //https://www.koderhq.com/tutorial/svelte/http-fetch/
  async function get() {
    const result = await getGym(gymId).then((res) => res.data);
    return result;
  }

  const submitFn = async (gymMod) => {
    const result = await saveGym(gymMod).then((res) => (gym = res));
    return result;
  };
</script>

{#await get()}
  <span class="text-center font-extrabold text-orange-500 text-2xl"
    >Loading data...</span
  >
{:then gym}
  <FormGym title="Form Alter Gym 2" {gym} {submitFn} />
{/await}

<h2>Json</h2>
