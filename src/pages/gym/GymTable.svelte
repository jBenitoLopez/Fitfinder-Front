<script lang="ts">
  import { url } from "@roxi/routify";
  import { Confirm } from "svelte-confirm";
  import { slide } from "svelte/transition";
  import { InitGymTableData } from "../../interfaces/gym";
  import { deleteGym } from "../../services/gym";

  export let tableData = InitGymTableData();
  // {
  //   headers: {
  //     song: "Song",
  //     artist: "Artist",
  //     year: "Year",
  //     active: "Active",
  //     edit: "Edit",
  //     delete: "Delete",
  //   },
  //   data: [
  //     {
  //       id: "111",
  //       song: "The Sliding Mr. Bones (Next Stop, Pottersville)",
  //       artist: "Malcolm Lockyer",
  //       year: "1961",
  //       active: true,
  //     },
  //     {
  //       id: "222",
  //       song: "Witchy Woman",
  //       artist: "The Eagles",
  //       year: "1972",
  //       active: false,
  //     },
  //     {
  //       id: "333",
  //       song: "Shining Star",
  //       artist: "Earth, Wind, and Fire",
  //       year: "1975",
  //       active: true,
  //     },
  //   ],
  // };

  //https://larainfo.com/blogs/tailwind-css-simple-table-example
  //Example 4

  async function deleteItem(itemId) {
    const response = await deleteGym(itemId).then((res) => res);
    if (response.status) {
      tableData.data = tableData.data.filter((item) => item.id !== itemId);
      /*
          {
        "status": true,
        "message": "Gym with id 639747664953ade53a394bf3 has been deleted"
    }
      */
    } else {
      console.error("Problem on Delete Gym" + response.message);
    }
  }
</script>

<div class="flex flex-col mt-8">
  <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
    <div
      class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
    >
      <table class="min-w-full">
        <thead>
          <tr>
            {#each Object.keys(tableData.headers) as columnHeading}
              <th class="th">{columnHeading}</th>
            {/each}
          </tr><tr />
        </thead>
        <tbody class="bg-white">
          {#each Object.values(tableData.data) as row}
            <tr class="tr" transition:slide>
              {#each Object.values(row) as cell, i}
                {#if !Object.keys(tableData.headers).includes("id") && Object.keys(row)[i] === "id"}
                  <!-- do nothing -->
                {:else if Object.keys(row)[i] === "active"}
                  <td class="td">
                    <!-- Status -->
                    {#if row.active}
                      <span
                        class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                      >
                        Active
                      </span>
                    {:else}
                      <span
                        class="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full"
                      >
                        Inactive
                      </span>
                    {/if}
                  </td>
                {:else}
                  <td class="td">
                    <div class="text-sm leading-5 text-gray-500">{cell}</div>
                  </td>
                {/if}
              {/each}

              <td class="td" data-id={row.id}>
                <!-- Edit -->
                <a
                  href={$url("/gym/:adminId", { adminId: row.id })}
                  class="cursor-pointer flex justify-center items-center text-blue-400 hover:text-blue-600 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      class="cursor-pointer"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </a>
              </td>

              <td class="td" data-id={row.id}>
                <!-- Delete -->
                <div
                  class="cursor-pointer flex justify-center items-center text-red-400 hover:text-red-600 "
                >
                  <Confirm
                    confirmTitle="Delete"
                    cancelTitle="Cancel"
                    themeColor="350"
                    let:confirm={confirmThis}
                  >
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <svg
                      on:click={() => confirmThis(deleteItem, row.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span slot="title"> Delete this Gym? </span>
                    <span slot="description">
                      You won't be able to revert this!
                    </span>
                  </Confirm>
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>

<style>
</style>
