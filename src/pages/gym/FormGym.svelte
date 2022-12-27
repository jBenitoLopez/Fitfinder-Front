<script lang="ts">
  export let title = "";
  export let gym = InitGymRecord();
  export let submitFn = (gym): Promise<GymRecordPostResult> => {
    return;
  };

  import { goto } from "@roxi/routify";
  import {
    InitGymRecord,
    InitGymTouchedForm,
    InitGymValidForm,
    type GymRecordPostResult,
  } from "../../interfaces/gym";
  import {
    Button,
    Input,
    Select,
    Textarea,
  } from "../../components/elements/index";
  import { formValidate } from "../../validation/gymFormValidator";

  import { provinces_es as provinces } from "../../store/address";
  import { requiredElementsBeenTouched } from "../../validation/validators";

  const gymId: string = gym["gymId"];
  // delete gym["id"];
  // gym = { ...gym, gymId };

  let touchedFields = InitGymTouchedForm();

  // let gym = InitGymRecord();
  // $: gym = gym;

  let errors = InitGymValidForm();
  $: errors = formValidate(touchedFields, gym);

  async function validateAndSubmit(e: PointerEvent) {
    e.preventDefault;

    touchedFields = gymId
      ? InitGymTouchedForm(true)
      : InitGymTouchedForm(false);

    const touched = requiredElementsBeenTouched(touchedFields);
    if (!Object.values(errors).join("").length) {
      const result = await submitFn(gym);

      if (!result.status) {
        alert("Problem on Save Gym, show console!");
        console.error("Problem on Save Gym" + result?.message);
      } else {
        $goto("../gyms");
      }
    } else {
      alert("Form is not valid, show console!");
      console.error("Form is not valid", {
        touchedFields,
        touched,
        errors: Object.values(errors),
      });
    }
  }
</script>

<!-- https://tailwinduikit.com/components/webapp/form/form_layout -->
<div class="px-5 py-20 mx-auto prose prose-blue md:px-0 lg:prose-lg lg:mt-24">
  <h1 class="text-5xl font-bold mt-0 mb-6">{title}</h1>
  <!-- Form New/Alter Gym -->
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
      <Button on:click={validateAndSubmit}
        >{gymId ? "Save Gym" : "Create Gym"}</Button
      >
    </div>
  </form>
</div>
