<script>
  let src = "/src/assets/FitFinderLogo2.png";
  let routes = [
    { url: "/about", label: "About" },
    { url: "/contact", label: "Contact" },
    { url: "/gyms", label: "Gyms" },
    { url: "/login", label: "Login" },
  ];
  let mobileMode = false;
  const toggleMenu = () => (mobileMode = !mobileMode);
</script>

<div class="bg-slate-200 header flex justify-between items-center py-2">
  <a href="/" class="p-2"><img class="h-13 w-20" {src} alt="Fitfinder" /></a>
  <div class="mr-1 hidden md:flex">
    {#each routes as route}
      <a href={route.url} class="bg-blue-400 p-3 py-2 mx-1 rounded text-white ">
        {route.label}
      </a>
    {/each}
  </div>
  <div class="relative inline-block text-left md:hidden mr-2">
    <span class="rounded-md shadow-sm">
      <button on:click={toggleMenu} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </span>
    <div
      class:hidden={!mobileMode}
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-40"
    >
      <div class="rounded-md bg-white shadow-xs">
        <div class="py-1">
          {#each routes as route}
            <a
              on:click={toggleMenu}
              href={route.url}
              class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
            >
              {route.label}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .header {
    height: var(--header-height);
  }
</style>
