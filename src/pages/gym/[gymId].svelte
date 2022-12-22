<script lang="ts">
  import { getGym, saveGym } from "../../services/gym";
  import FormGym from "./FormGym.svelte";

  export let gymId;

  const adminId = import.meta.env.VITE_ADMIN_ID;
  let gym;

  //https://www.koderhq.com/tutorial/svelte/http-fetch/
  async function get() {
    const result = await getGym(gymId).then((res) => res.data);
    return result;
  }
  gym = get();

  const submitFn = async () => {
    const result = await saveGym(gym).then((res) => (gym = res));
    return result;
  };

  gym = {
    gymId: gymId,
    name: "Gym 100",
    email: "gym100@fitmeup.com",
    logoUrl: "./../assets/img/map.jpg",
    phone: "123456789",
    openHours:
      "Lu-Vi 7:30h a 23:00h\nSa 9:30h a 14:30h / 16:00h. a 20:00h\nDo 10:00h- 14:00h",
    description:
      "Queremos tener un impacto real sobre la vida de millones de personas, ayudándoles a cuidar de su bienestar físico.",
    active: true,
    location: [42.23467918479185, -8.710717311486247],
    province: "Pontevedra",
    address: "Centro Comercial Barreiro",
    adminId: adminId,
  };
</script>

{#await get()}
  <span class="text-center font-extrabold text-orange-500 text-2xl"
    >Loading data...</span
  >
{:then gym}
  <FormGym title="Form Alter Gym 2" {gym} {submitFn} />
{/await}
