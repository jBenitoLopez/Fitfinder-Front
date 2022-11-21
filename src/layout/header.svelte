<script>
  import Logo from "../assets/logo.png";
</script>

<div
  class="
  header flex justify-between items-center bg-gradient-to-l from-blue-400 to bg-green-400"
>
  <a href="/" class="">
    <img src={Logo} alt="" class="w-32" />
  </a>
  <div class="mr-5">
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    <a href="/gyms">Gyms</a>
  </div>
</div>

<style>
  .header {
    height: var(--header-height);
  }
</style>
