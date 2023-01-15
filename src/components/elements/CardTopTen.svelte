<script>
  const topTen = ['The Gym Six Sense', 'Grupo Arsenal', 'Iradier', 'Caroli Health Club', 'Reebook Sport', 'Zagros Sport', 'Metropolitan', 'O2 Wellness Center', 'Príncipe Sport', 'Sport'];

  let promesa = getPost();

  async function getPost(){
    const post = await fetch('https://fitmeup.up.railway.app/api/v1/gym',);
    if(post.status === 200){
      const resultado = await post.json();
      console.log('resultado',resultado);
      return resultado;
    } else {
      throw new Error("Hubo un error en el request: " + post.status);
  }
}
</script>

<h2 class="text-emerald-100 text-2xl">Top ten Gym</h2>
<div class="bg-teal-100 rounded-xl p-4 m-3 text-left pl-10">
    <ol class="text-lg list-decimal">
      {#each topTen as itemTop}
         <li>{itemTop}</li>
      {/each}
    </ol>
</div>