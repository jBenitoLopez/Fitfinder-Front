<script>
  const topTen = ['The Gym Six Sense', 'Grupo Arsenal', 'Iradier', 'Caroli Health Club', 'Reebook Sport', 'Zagros Sport', 'Metropolitan', 'O2 Wellness Center', 'Príncipe Sport', 'Sport']
</script>

<h2 class="text-emerald-100 text-2xl">Top ten Gym</h2>
<div class="bg-teal-100 rounded-xl m-3 text-left pl-10">
    <ol class="text-lg list-decimal">
      {#each topTen as itemTop}
         <li>{itemTop}</li>
      {/each}
    </ol>
</div>