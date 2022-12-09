<script lang="ts">
  import Button from "../elements/Button.svelte";
  import Input from "../elements/Input.svelte";
  import {
    InitGymRecord,
    InitGymTouchedForm,
    InitGymValidForm,
  } from "../interfaces/gym";

  import { saveGym } from "../services/gym";
  import { provinces_es as provinces } from "../store/address";

  let touchedFields = InitGymTouchedForm();
  let gym = InitGymRecord();

  $: gym = {
    name: "Gym 100",
    email: "gym100@fitmeup.com",
    logoUrl: "./../assets/img/map.jpg",
    phone: "12345678",
    openHours:
      "Lu-Vi 7:30h a 23:00h\nSa 9:30h a 14:30h / 16:00h. a 20:00h\nDo 10:00h- 14:00h",
    description:
      "Queremos tener un impacto real sobre la vida de millones de personas, ayudándoles a cuidar de su bienestar físico.",
    active: true,
    location: [42.23467918479185, -8.710717311486247],
    province: "Pontevedra",
    address: "Centro Comercial Barreiro",
    adminId: "6390ecc94953ade53a394b6e",
  };

  let errors = InitGymValidForm();
  $: errors = formValidate(touchedFields, gym);

  const formValidate = () => {
    const errors = InitGymValidForm();
    console.log("errors", errors);
    if (touchedFields.name && gym.name === "") {
      errors.name = "Name is required";
    }
    // if (touchedFields.email && gym.email.length < 5) {
    //   errors.email = "Length should be at least 5";
    // }
    // if (touchedFields.phone) {
    //   errors.phone = "Phone should be at least 5";
    // }
    return errors;
  };

  async function validateAndSubmit(e: SubmitEvent) {
    touchedFields = InitGymTouchedForm();
    debugger;
    // if (!Object.keys(errors).length) {
    let result = await saveGym(gym).then((data) => data);
    console.log("result: ", result);
    if (!result.status) {
      console.log("Problem", result.message);
    } else {
      console.log("Redirect to Admin Home");
    }
    // }
  }
</script>

<!-- https://tailwinduikit.com/components/webapp/form/form_layout -->
<div class="px-5 py-20 mx-auto prose prose-blue md:px-0 lg:prose-lg lg:mt-24">
  <h1 class="text-5xl font-bold mt-0 mb-6">Form New/Alter Gym</h1>

  <!-- <form action="/createGym" on:submit|preventDefault={validateAndSubmit}> -->
  <form action="/createGym">
    <div class="mb-6">
      <label for="description" class="label">Logo</label>
      <img src="../assets/img/logogym2.png" alt="Red dot" />
    </div>
    <div class="mb-6">
      <Input
        type="text"
        label="Name"
        placeholder="Hello Gym"
        bind:value={gym.name}
        on:blur={() => (touchedFields.name = true)}
        error={errors.name}
      />
    </div>
    <div class="mb-6">
      <Input
        type="email"
        label="Email"
        placeholder="hello.gym@mail.loc"
        bind:value={gym.email}
        on:blur={() => (touchedFields.email = true)}
        error={errors.email}
      />
    </div>
    <div class="mb-6">
      <Input
        type="tel"
        label="Phone"
        placeholder="+34 654 32 32 32"
        bind:value={gym.phone}
        on:blur={() => (touchedFields.phone = true)}
        error={errors.phone}
      />
    </div>

    <div class="mb-6">
      <label for="open-hours" class="label">Open Hours</label>
      <textarea
        id="open-hours"
        class="textarea"
        rows="5"
        cols="33"
        placeholder="Mo-Fr 7:30h to 23:00h
Sa 9:30h-14:30h / 16:00h-20:00h
So 10:00h-14:00h..."
        bind:value={gym.openHours}
      />
    </div>

    <div class="mb-6">
      <label for="description" class="label">Description</label>
      <textarea
        id="description"
        class="textarea"
        rows="5"
        cols="33"
        placeholder="We want to have a real impact on the lives of millions of people, helping them take care of their physical well-being."
        bind:value={gym.description}
      />
    </div>

    <div class="mb-6">
      <label for="description" class="label">Location</label>
      <!-- <img src={gym.logoUrl} alt="logo {gym.name}" /> -->
      <img src="../assets/img/map.jpg" alt="Map img" />
    </div>

    <div class="mb-6">
      <label for="province" class="label">Province</label>
      <select required name="province" bind:value={gym.province} class="select">
        <option value="">Choose Province</option>
        {#each provinces as province}
          <option value={province.code}>{province.label}</option>
        {/each}
      </select>
    </div>

    <div class="mb-6">
      <Input
        type="text"
        label="Address"
        placeholder="Centro Comercial A Laxe, planta 2,  local 26"
        bind:value={gym.address}
        on:blur={() => (touchedFields.address = true)}
        error={errors.address}
      />
    </div>

    <div class="w-full block">
      <Button on:click={validateAndSubmit}>Save</Button>
    </div>
  </form>
</div>
