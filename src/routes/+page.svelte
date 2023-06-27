<script>
  import { slide, fade } from "svelte/transition";
  let images = [
    "https://img.freepik.com/free-photo/young-beautiful-stylish-woman-wedding-dress_285396-7822.jpg?w=826&t=st=1677540031~exp=1677540631~hmac=6a2361f0648494b80a130461b397d2df05561817ff6d745a6c0b65904be69149",
    "https://img.freepik.com/free-photo/beautiful-model-girl-white-dress-man-suit_1328-1779.jpg?w=826&t=st=1677540225~exp=1677540825~hmac=918ca7b63749fd56b72a275a568892aaa0da7a611e612f2edd9a34793c5e51b4",
    "https://img.freepik.com/premium-photo/beautiful-young-brunette-woman-choosing-wedding-dress-bridal-salon_633611-4120.jpg?w=826",
    "https://img.freepik.com/free-photo/elegant-bride-puts-wedding-gown-her-room_146671-19765.jpg?w=826&t=st=1677540176~exp=1677540776~hmac=60262550c6d59c7039d271ca6c53ca04bbe76f2556f1bfb522d6e9799901b5e1",
    // "https://img.freepik.com/free-photo/young-woman-celebrating-her-quinceanera_23-2149449182.jpg?w=826&t=st=1677541511~exp=1677542111~hmac=b9cf8f633aaaf46c3a0d76d5a0804fe1cc1200bfa98f2a2746ba21b61179e6b1",
    "https://img.freepik.com/free-photo/young-beautiful-stylish-woman-wedding-dress_285396-7876.jpg?w=826&t=st=1677540075~exp=1677540675~hmac=61bfe705f701e43138aae1e0a00eb3db24ba76da2d693de909b350bbda60beff",
    "https://img.freepik.com/free-photo/beautiful-bride-portrait-beach_23-2149044012.jpg?w=826&t=st=1677541563~exp=1677542163~hmac=2175416175fe5c25b48f4fa669af29d84be8dcdf22257c031f4deb99b9f1b6fc",
  ];
  let i = 0;

  let interval = setInterval(() => {
    i++;
    if (i == images.length) {
      i = 0;
    }
  }, 4000);

  export let data 
</script>

<svelte:head>
  <title>Dream Dress</title>
  <meta name="description" content="Rent a dress for all occasions" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
</svelte:head>

<!-- <h1>{data.email}</h1> -->
{#if data.email}
  <h1>{data.email}</h1>
{/if}


<section
  class="relative bg-cover bg-center bg-no-repeat"
  style="background-image: url('{images[i]}');"
>
  <div
    class="absolute inset-0 bg-white/5 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray-900 sm:to-white/25"
  />

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl text-sky-500">
        Let us find your

        <strong class="block font-extrabold text-rose-700">
          Dream Dress.
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
        We have a wide range of dresses that you can <span class="font-bold text-sky-500 logo">R</span><span class="text-sky-500 font-bold">ent</span> it for all occasions. We have dresses for
        weddings, proms, quinceaneras, and more. We also have dresses for all
        sizes. We have dresses for petite, plus size, and everything in between.
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="/Gowns"
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Products
        </a>

        <a
          href="/Lahenga/2"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Specials
        </a>
      </div>
    </div>
  </div>
</section>

<!-- <div
  class="carousel mx-2 md:mx-0  rounded-xl md:rounded-none md:h-full mt-4 md:mt-0 h-64"
>
  <div class="carousel-item w-full" transition:fade>
    <img
      src={images[i]}
      alt="Burger"
      class="md:w-full md:h-[600px] md:object-cover md:origin-center"
      transition:fade
    />
  </div>
 
</div> -->

<div class="bg-slate-100 py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <h2
      class="text-gray-800 text-2xl lg:text-5xl font-bold text-center mb-8 md:mb-12"
    >
      Collections
    </h2>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
    >
      <!-- product - start -->
      <div>
        <a
          href="/saree"
          class="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4 hover:shadow-2xl "
        >
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            src="https://i.ytimg.com/vi/Ed0w7l3yqLM/maxresdefault.jpg"
            loading="lazy"
            alt="Photo by Austin Wade"
            class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
          />

          <div
            class="w-full flex flex-col bg-white text-center rounded-lg relative p-4"
          >
            <span class="text-blue-500 ">Cultural</span>
            <span class="text-gray-800 text-lg lg:text-2xl font-bold"
              >Saree</span
            >
          </div>
        </a>
      </div>
      <!-- product - end -->

      <!-- product - start -->
      <div>
        <a
          href="/Lahenga"
          class="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
        >
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            src="https://i.etsystatic.com/29654904/r/il/38f282/3197828949/il_fullxfull.3197828949_l7pe.jpg"
            loading="lazy"
            alt="Photo by engin akyurt"
            class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
          />

          <div
            class="w-full flex flex-col bg-white text-center rounded-lg relative p-4"
          >
            <!-- <span class="text-gray-500">Women</span> -->
            <span class="text-blue-500 ">Luxurious</span>
            <span class="text-gray-800 text-lg lg:text-2xl font-bold"
              >Lahenga</span
            >
          </div>
        </a>
      </div>
      <!-- product - end -->

      <!-- product - start -->
      <div>
        <a
          href="/Gowns"
          class="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
        >
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            src="https://i0.wp.com/lovejunebridal.com/wp-content/uploads/2022/04/1-Copy.jpg?resize=600%2C479&ssl=1"
            loading="lazy"
            alt="Photo by Austin Wade"
            class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
          />

          <div
            class="w-full flex flex-col bg-white text-center rounded-lg relative p-4"
          >
            <span class="text-blue-500">Stylish</span>
            <span class="text-gray-800 text-lg lg:text-2xl font-bold"
              >Gowns</span
            >
          </div>
        </a>
      </div>
      <!-- product - end -->

      <!-- product - start -->
      <div>
        <a
          href="/Salwar"
          class="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
        >
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            src="https://i.pinimg.com/originals/55/82/15/558215a6084dfa8f6bc461f6d178fa64.jpg"
            loading="lazy"
            alt="Photo by Austin Wade"
            class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
          />

          <div
            class="w-full flex flex-col bg-white text-center rounded-lg relative p-4"
          >
            <span class="text-blue-500">Ethnic motifs</span>
            <span class="text-gray-800 text-lg lg:text-2xl font-bold"
              >Salwar</span
            >
          </div>
        </a>
      </div>
      <!-- product - end -->
    </div>
  </div>
</div>

<style lang="postcss">

  :global(html) {
    background-color: theme(colors.gray.100) !important;
  }
</style>
