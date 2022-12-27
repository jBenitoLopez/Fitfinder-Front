<script context="module"></script>

<script lang="ts">
  import { onMount } from "svelte";
  import { Icon, Button, Modal } from "../../components/elements";
  import { getGyms, deleteGym } from "../../services/gym";
  let gyms = [];
  let gymID: string = "";
  let headers = ["ID", "Name", "Email", "Province", "Phone", "Actions"];
  let deleteModal: boolean = false;
  onMount(async () => {
    await getDatas();
  });
  async function getDatas() {
    gyms = await getGyms();
  }
  async function deleteDatas() {
    await deleteGym(gymID)
      .then((result) => console.log(result))
      .catch((error) => console.log(error.message));
    gyms = gyms.filter((gym) => gym.id != gymID);
    toggle();
  }
  let toggle = () => {
    deleteModal = !deleteModal;
  };
</script>

<div class="flex flex-col">
  <div class="sm:mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <div
          class="flex justify-between items-center w-full border-b-2 py-2 px-5"
        >
          <span><b> Gyms</b> </span>
          <span>
            <a href="/gyms/new" class="btn btn-primary">New Gym</a>
          </span>
        </div>
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              {#each headers as header}
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  {header}
                </th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each gyms as gym, index}
              <tr class="border-b">
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {index}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  {gym.name}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  {gym.email}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  {gym.province}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  {gym.phone}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  <a href={"/gyms/" + gym.id} class="btn bg-orange-300">
                    <Icon name="edit" color="white" />
                  </a>
                  <a
                    href="#"
                    on:click={() => {
                      gymID = gym.id;
                      toggle();
                    }}
                    class="btn bg-red-500"
                  >
                    <Icon name="delete" color="white" />
                  </a>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
{#if deleteModal}
  <Modal on:close={toggle}>
    <div slot="header" class="font-bold">Confirmation</div>
    <p>Selected gym is going to be deleted. Are you sure?</p>
    <div class="w-full flex flex-row-reverse gap-2">
      <button class="btn bg-red-500" on:click={toggle}>No</button>
      <button class="btn bg-green-500" on:click={() => deleteDatas()}>
        Yes
      </button>
    </div>
  </Modal>
{/if}
