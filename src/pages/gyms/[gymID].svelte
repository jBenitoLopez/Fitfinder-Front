<script>
  import { params, goto } from "@roxi/routify";
  import moment from "moment";
  import { onMount } from "svelte";
  import {
    Input,
    Textarea,
    Button,
    Toggle,
    Toast,
  } from "../../components/elements";
  import { getGymByID, createGym, updateGym } from "../../services/gym";
  let gymID = $params.gymID;
  let newGYM = gymID == "new" ? true : false;
  let gymData = {
    active: true,
    address: "",
    adminId: "639f76cbaa037a459a2b02d7",
    description: "",
    email: "",
    location: [42.23467918479185, -8.710717311486247],
    logoUrl: "",
    name: "",
    openHours: "",
    phone: "",
    province: "",
  };
  onMount(async () => {
    !newGYM ? await getGym() : null;
  });
  async function getGym() {
    gymData = await getGymByID(gymID);
  }
  async function setGym() {
    gymData.location.forEach((gym) => (gym = Number(gym)));
    if (newGYM) {
      const response = await createGym(gymData);
      Toast("success", response.message);
      $goto("/gyms");
    } else {
      const response = await updateGym(gymID, gymData);
      Toast("success", response.message);
    }
  }
</script>

<main class="w-full h-full flex items-center justify-center">
  <form
    action=""
    on:submit|preventDefault={setGym}
    class="flex flex-col w-full h-full md:h-auto  border max-w-4xl p-3 bg-gray-200 rounded-lg"
  >
    <div class="flex flex-col justify-between md:flex-row items-center">
      <span class="flex justify-between md:justify-start items-center w-full">
        <h3
          class:font-bold={gymData.active}
          class:text-black={gymData.active}
          class:shadow-lg={gymData.active}
          class:text-inherit={!gymData.active}
          class="text-2xl p-2 rounded mr-10 border"
        >
          {#if newGYM}
            New GYM
          {:else}
            {gymData.name}
          {/if}
        </h3>
        <Toggle bind:checked={gymData.active} />
      </span>
      <img
        src={newGYM ? "" : gymData.logoUrl}
        class="h-20 rounded my-4 md:mt-auto"
        alt=""
      />
    </div>
    <div class="flex flex-wrap overflow-auto">
      <div class="flex flex-col w-full md:w-1/2 p-2">
        <label for="">Gym Name</label>
        <Input bind:value={gymData.name} required />
      </div>
      <div class="flex flex-col w-full md:w-1/2 p-2">
        <label for="">Email</label>
        <Input type="email" bind:value={gymData.email} required />
      </div>
      <div class="flex flex-col w-full md:w-1/2 p-2">
        <label for="">Admin ID</label>
        <Input bind:value={gymData.adminId} required />
      </div>
      <div class="flex flex-col w-full md:w-1/2 p-2">
        <label for="">Address</label>
        <Input bind:value={gymData.address} required />
      </div>

      <div class="flex flex-col w-full md:w-1/4 p-2">
        <label for="">Location Lat</label>
        <Input bind:value={gymData.location[0]} required />
      </div>
      <div class="flex flex-col w-full md:w-1/4 p-2">
        <label for="">Location Long</label>
        <Input bind:value={gymData.location[1]} required />
      </div>
      <div class="flex flex-col w-full md:w-1/2 p-2">
        <label for="">Open Hours</label>
        <Input bind:value={gymData.openHours} required />
      </div>
      <div class="flex flex-col w-full md:w-1/2 p-2">
        <label for="">Phone</label>
        <Input bind:value={gymData.phone} required />
      </div>
      <div class="flex flex-col w-full md:w-1/2 p-2">
        <label for="">Province</label>
        <Input bind:value={gymData.province} required />
      </div>
      <div class="flex flex-col w-full p-2">
        <label for="">Description</label>
        <Textarea bind:value={gymData.description} required />
      </div>
    </div>
    <div
      class="flex flex-col-reverse gap-2  md:flex-row justify-between items-center p-3 w-full"
    >
      <div>
        <h3 class="text-sm md:text-lg bg-violet-300 p-2 font-bold rounded mb-2">
          Created At:
          <span
            class="bg-violet-300 p-2 text-sm md:text-lg rounded font-normal"
          >
            {moment(gymData.createdAt).format("llll")}
          </span>
        </h3>
        <h3 class="text-sm md:text-lg bg-violet-300 p-2 font-bold rounded">
          Last Update:
          <span
            class="bg-violet-300 p-2 text-sm md:text-lg rounded font-normal"
          >
            {moment(gymData.updatedAt).format("llll")}
          </span>
        </h3>
      </div>

      <Button type="submit">
        <span class="text-lg">
          {#if newGYM}
            Add
          {:else}
            Save
          {/if}
        </span>
      </Button>
    </div>
  </form>
</main>
