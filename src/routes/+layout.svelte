<script>
  import "../app.css";
  import Dress from "$lib/dress.png";
</script>

<!-- Changes : bg-base-100 to bg-gray-900 -->
<div class="navbar bg-base-100" id="firstnav">
  <div class="flex-1">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="btn btn-ghost normal-case text-xl text-sky-400 " href="/">
      <img src={Dress} width="40" alt="Logo" class="rounded-full mx-2" />
      Dream Dress</a
    >
  </div>
  <div class="flex-none gap-2">
    <!-- <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div> -->
    <div class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-8 rounded-full">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            src="https://img.freepik.com/free-vector/bride-silhouette-with-white-dress_23-2147494158.jpg?w=740&t=st=1677539114~exp=1677539714~hmac=536491e5eb7f46ba060a3db9581a0b580a130cfdf5176cc0bad47386bdfd8d22"
          />
          <!-- https://img.freepik.com/premium-vector/white-bride-dress_23-2147493293.jpg?w=740 -->
        </div>
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a href="/">Settings</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </div>
  </div>
</div>
<hr />
<div
  class="navbar text-center flex justify-center bg-gray-900 md:justify-start   md:bg-gray-800"
  id="secnav"
>
  <ul class="mx-2 flex justify-center align-middle text-center  space-x-4">
    <li class="hover:text-cyan-400 transition duration-150">
      <a href="/saree">Saree</a>
    </li>
    <li class="hover:text-cyan-400 transition duration-150">
      <a href="/Gowns">Gowns</a>
    </li>
    <li class="hover:text-cyan-400 transition duration-150">
      <a href="/Lahenga">Lahenga</a>
    </li>
    <li class="hover:text-cyan-400 transition duration-150">
      <a href="/Salwar">Salwar</a>
    </li>
  </ul>
</div>

<slot />
<footer class="text-gray-600 body-font">
  <div
    class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
  >
    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span class="ml-3 text-xl">Dream Dress</span>
    </a>
    <p
      class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
    >
      © 2023 Dream Dress —
      <a
        href="https://www.linkedin.com/in/priya-bidyut-pal/"
        class="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank">@priyapal</a
      >
    </p>
    <span
      class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
    >
 
      <a class="ml-3 text-gray-500" href="https://www.instagram.com/priyapal__.02/">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="ml-3 text-gray-500" href="https://www.linkedin.com/in/priya-bidyut-pal/">
        <svg
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0"
          class="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx="4" cy="4" r="2" stroke="none" />
        </svg>
      </a>
    </span>
  </div>
</footer>

<style>
  .subnav {
    display: flex;
    height: 20px !important;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  #firstnav {
    height: 45px;
    min-height: 45px;
  }
  #secnav {
    height: 40px;
    min-height: 40px;
  }
</style>
