<script>
    import "../app.css";
</script>

<div class="navbar bg-base-100" id="firstnav">
  <div class="flex-1">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="btn btn-ghost normal-case text-xl " href="/">Dream Dress</a>
  </div>
  <div class="flex-none gap-2">
    <!-- <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div> -->
    <div class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-8 rounded-full">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src="https://img.freepik.com/free-vector/bride-silhouette-with-white-dress_23-2147494158.jpg?w=740&t=st=1677539114~exp=1677539714~hmac=536491e5eb7f46ba060a3db9581a0b580a130cfdf5176cc0bad47386bdfd8d22" />
          <!-- https://img.freepik.com/premium-vector/white-bride-dress_23-2147493293.jpg?w=740 -->
        </div>
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
<hr>
<div class="navbar bg-base-100 subnav " id="secnav">
    <ul class="mx-2 text-justify justify-between space-x-4" >
        <li class=""><a href="/saree">Saree</a></li>
        <li class=""><a href="/Gowns">Gowns</a></li>
        <li class=""><a href="/Lahenga">Lahenga</a></li>
        <li class=""><a href="/Salwar">Salwar</a></li>
    </ul>
  </div>

<slot/>
<footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
      <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
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

    #firstnav{
      height: 40px;
      min-height: 40px;
    }
    #secnav{
      height: 40px;
      min-height: 40px;
    }
</style>