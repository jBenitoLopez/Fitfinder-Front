<script lang="ts">
  import { saveGym } from "../../services/gym";
  import FormGym from "./FormGym.svelte";
  let newGym;

  const adminId = import.meta.env.VITE_ADMIN_ID;

  // let gym;
  let gym = {
    name: "Gym 100",
    email: "gym100@fitmeup.com",
    logoUrl: "./../assets/img/map.jpg",
    phone: "123456789",
    openHours:
      "Lu-Vi 7:30h a 23:00h\nSa 9:30h a 14:30h / 16:00h. a 20:00h\nDo 10:00h- 14:00h",
    description:
      "Queremos tener un impacto real sobre la vida de millones de personas, ayudándoles a cuidar de su bienestar físico.",
    active: true,
    location: [42, 18],
    province: "Pontevedra",
    address: "Centro Comercial Barreiro",
    adminId: adminId,
  };

  const submitFn = async () => {
    const result = await saveGym(gym).then((res) => (newGym = res));
    return result;
  };
</script>

<FormGym title="Form New Gym 1" {gym} {submitFn} />
