<script lang="ts">
  import GymTable from "./_components/CrudGym/GymTable.svelte";
  import {
    InitGymTableData,
    type GymTableData,
    type TableData,
  } from "../interfaces/gym";
  import { getGymsByAdmin } from "../services/gym";

  const adminId = import.meta.env.VITE_ADMIN_ID;
  const tableData = InitGymTableData();

  async function init() {
    const response = await getGymsByAdmin(adminId).then((res) => res);

    if (response["data"] && response["data"].length > 0) {
      const headers = {
        id: "Id",
        name: "Name",
        email: "Email",
        phone: "Phone",
        province: "Province",
        address: "Address",
        active: "Active",
      };

      const headerKeys = Object.keys(headers);
      const data: TableData[] = await response["data"].map((item) => {
        const newRow = {};
        headerKeys.forEach((fieldName) => {
          newRow[fieldName] = item[fieldName] || null;
        });
        return newRow;
      });

      tableData.headers = { ...headers, edit: "Edit", delete: "Delete" };
      tableData.data = data;
    }
  }

  init();
</script>

{#if tableData && tableData.data.length > 0}
  <GymTable {tableData} />
{:else}
  <span class="text-center font-extrabold text-orange-500 text-2xl"
    >Loading data...</span
  >
{/if}
