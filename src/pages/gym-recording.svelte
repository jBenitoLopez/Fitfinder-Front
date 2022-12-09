<script lang="ts">
  import { goto } from "@roxi/routify";
  import Button from "../elements/Button.svelte";
  import Input from "../elements/Input.svelte";
  import Select from "../elements/Select.svelte";
  import Textarea from "../elements/Textarea.svelte";
  import {
    InitGymRecord,
    InitGymTouchedForm,
    InitGymValidForm,
  } from "../interfaces/gym";

  import { saveGym } from "../services/gym";
  import { provinces_es as provinces } from "../store/address";
  import {
    emailValidator,
    minLengthValidator,
    phoneValidator,
    requiredValidator,
  } from "../validation/validators";

  let touchedFields = InitGymTouchedForm();
  let gym = InitGymRecord();
  $: gym = gym;

  $: gym = {
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
    adminId: "6390ecc94953ade53a394b6e",
  };

  let errors = InitGymValidForm();
  $: errors = formValidate(touchedFields, gym);

  const formValidate = () => {
    const errors = InitGymValidForm();
    console.log("errors", errors);
    if (touchedFields.name) {
      const minLength = 5;
      if (requiredValidator(gym.name).isValid === false)
        errors.name = requiredValidator(gym.name).error;
      else if (minLengthValidator(gym.name, minLength).isValid === false)
        errors.name = minLengthValidator(gym.name, minLength).error;
    }

    if (touchedFields.email) {
      if (requiredValidator(gym.email).isValid === false)
        errors.email = requiredValidator(gym.email).error;
      else if (emailValidator(gym.email).isValid === false)
        errors.email = emailValidator(gym.email).error;
    }

    if (touchedFields.phone) {
      if (requiredValidator(gym.phone).isValid === false)
        errors.phone = requiredValidator(gym.phone).error;
      else if (phoneValidator(gym.phone).isValid === false)
        errors.phone = phoneValidator(gym.phone).error;
    }

    if (touchedFields.openHours) {
      const minLength = 5;
      if (requiredValidator(gym.openHours).isValid === false)
        errors.openHours = requiredValidator(gym.openHours).error;
      else if (minLengthValidator(gym.openHours, minLength).isValid === false)
        errors.openHours = minLengthValidator(gym.openHours, minLength).error;
    }

    if (touchedFields.description) {
      const minLength = 50;
      if (requiredValidator(gym.description).isValid === false)
        errors.description = requiredValidator(gym.description).error;
      else if (minLengthValidator(gym.description, minLength).isValid === false)
        errors.description = minLengthValidator(
          gym.description,
          minLength
        ).error;
    }

    if (touchedFields.province) {
      if (requiredValidator(gym.province).isValid === false)
        errors.province = requiredValidator(gym.province).error;
    }

    if (touchedFields.address) {
      const minLength = 10;
      if (requiredValidator(gym.address).isValid === false)
        errors.address = requiredValidator(gym.address).error;
      else if (minLengthValidator(gym.address, minLength).isValid === false)
        errors.address = minLengthValidator(gym.address, minLength).error;
    }

    return errors;
  };

  async function validateAndSubmit(e: PointerEvent) {
    // e.preventDefault;
    debugger;
    $goto("./gyms");

    // touchedFields = InitGymTouchedForm();
    // if (!Object.values(errors).join("").length) {
    //   const result = await saveGym(gym).then((data) => data);
    //   if (!result.status) {
    //     console.error("Problem", result.message);
    //   } else {
    //     $goto("./gym");
    //   }
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
        placeholder="654323232"
        bind:value={gym.phone}
        on:blur={() => (touchedFields.phone = true)}
        error={errors.phone}
      />
    </div>

    <div class="mb-6">
      <Textarea
        rows="5"
        label="Open Hours"
        placeholder="Mo-Fr 7:30h to 23:00h
Sa 9:30h-14:30h / 16:00h-20:00h
So 10:00h-14:00h..."
        bind:value={gym.openHours}
        on:blur={() => (touchedFields.openHours = true)}
        error={errors.openHours}
      />
    </div>

    <div class="mb-6">
      <Textarea
        rows="5"
        label="Description"
        placeholder="We want to have a real impact on the lives of millions of people, helping them take care of their physical well-being."
        bind:value={gym.description}
        on:blur={() => (touchedFields.description = true)}
        error={errors.description}
      />
    </div>

    <div class="mb-6">
      <label for="description" class="label">Location</label>
      <img src="../assets/img/map.jpg" alt="Map img" />
    </div>

    <div class="mb-6">
      <Select label="Province" bind:value={gym.province}>
        <option value="">Choose Province</option>
        {#each provinces as province}
          <option value={province.code}>{province.label}</option>
        {/each}
      </Select>
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
