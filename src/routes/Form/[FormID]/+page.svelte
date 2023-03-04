<script>
  import supabase from "$lib/db.js";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  $: RouteID = $page.params.FormID;

  let details = [
    {
      name: "Silver & Gold Zari Woven Kanchipuram Tissue Saree",
      price: "Rs.5,500",
      imgSrc: "https://media.samyakk.com/catalog/product/s/r/sr25451.jpg",
    },
    {
      name: "Soft Pastel Pink Cutdana Embroidered Net Saree",
      price: "Rs.6,500",
      imgSrc: "https://media.samyakk.com/catalog/product/s/l/sl3422.jpg",
    },
    {
      name: "Chotronette Porcelain Armour Made to Measure Alternative Event & Wedding Dress",
      price: "Rs.6.500",
      imgSrc: "https://media.samyakk.com/catalog/product/s/r/sr27174.jpg",
    },
    {
      name: "Black Sequins Embroidered Organza Saree",
      price: "Rs.5,200",
      imgSrc: "https://media.samyakk.com/catalog/product/h/i/hi3908.jpg",
    },
    {
      name: "Oxford Blue Sequins Embroidered Organza Saree",
      price: "Rs.6,000",
      imgSrc: "https://media.samyakk.com/catalog/product/s/g/sg4154_1.jpg",
    },
    {
      name: "Gold Sequins Embroidered Tissue Saree",
      price: "Rs.7,500",
      imgSrc: "https://media.samyakk.com/catalog/product/h/l/hl1094.jpg",
    },
    {
      name: "Personalised Princess Ball Gown Pleat Lace Appliques Beads Pearls",
      price: "Rs.8,000",
      imgSrc:
        "https://i0.wp.com/lovejunebridal.com/wp-content/uploads/2022/04/1-48.jpg?resize=600%2C600&ssl=1",
    },
    {
      name: "JDStore Fashion Women's High Neck Full Sleeves Sweep Train Luxury Wedding Dresses ...",
      price: "Rs.10,000",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/2450/0989/products/34_b3510b5d-c663-4067-9667-f593567072ed_800x.jpg?v=1661696781",
    },
    {
      name: "Chotronette Porcelain Armour Made to Measure Alternative Event & Wedding Dress",
      price: "Rs.21,000",
      imgSrc:
        "https://chotronette.com/wp-content/uploads/2022/05/6dd9e0e7-31f3-4329-87d4-cfccb41a946c.jpg",
    },
    {
      name: "Wedding Dresses Train Sweetheart Elegant Puffy Princess Thin Simple Trailing Satin Dress Bride Gown",
      price: "Rs.8,000",
      imgSrc:
        "https://images-cdn.ubuy.co.in/634d1bd8da714d3c92212fa4-generic-wedding-dresses-train-sweetheart.jpg",
    },
    {
      name: "Long Sleeves Pearls Wedding Dresses",
      price: "Rs.11,000",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0248/2651/1434/products/product-image-1906205895_720x.jpg?v=1656637020",
    },
    {
      name: "Off Shoulder Sheer Sequin Cathedral Train Wedding Dress",
      price: "Rs.9,000",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0124/4368/0858/products/Screenshot2022-11-07134910_702x.png?v=1669638805",
    },
    {
      name: "D&D Clothing Puffy Wedding Ball Gown White Made to Measure / White",
      price: "Rs.50,000",
      imgSrc:
        "http://cdn.shopify.com/s/files/1/0565/1926/2384/products/image_c76b0adc-645b-4a5e-be43-e68892d095b9.jpg?v=1663272710",
    },
    {
      name: "WOMEN'S BOAT NECK FULL SLEEVES MERMAID BRIDAL WEDDING DRESS",
      price: "Rs.15,000",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/2450/0989/products/a4_9cac7661-c853-4cf6-a1cf-1d505b882df3_800x.jpg?v=1657075738",
    },
    {
      name: "Smoke Blue Stone Embroidered Net Bridal Lehenga",
      price: "Rs.15,000",
      imgSrc: "https://media.samyakk.com/catalog/product/h/c/hc1002.jpg",
    },
    {
      name: "Malaika Arora In Kalki French Pink Raw Silk Heavy Embroidered Lehenga With Net",
      price: "Rs.18,000",
      imgSrc:
        "https://newcdn.kalkifashion.com/media/catalog/product/m/a/malika-arora-in-kalki-french-pink-raw-silk-heavy-embroidered-lehenga-with-net-ruching-485842_4_.jpg",
    },
    {
      name: "Multicolor Resham Embroidered Crepe Bridal Lehenga",
      price: "Rs.12,000",
      imgSrc: "https://media.samyakk.com/catalog/product/g/c/gc4055.jpg",
    },
    {
      name: "Champange Net Lehenga ",
      price: "Rs.12,000",
      imgSrc:
        "https://www.frontierraas.com/pub/media/catalog/product/cache/2e7b5c928b717ff4d87b14f9f9a7e185/f/r/fr12217828_8_.jpg",
    },
    {
      name: "MULTI COLOUR FLORAL LEHENGA ",
      price: "Rs.19,000",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0458/5429/4174/products/22_03e73995-4614-44d2-ae80-6d1fe7d01493_600x.jpg?v=1642503218",
    },
    {
      name: "Silver Wrap Top With Lehenga Set ",
      price: "Rs.20,000",
      imgSrc:
        "https://img2.ogaanindia.com/pub/media/catalog/product/cache/293af57f029d22e2c98d09a8ba8b65b3/1/_/1_56880.jpg",
    },
    {
      name: "Dark Red Lehenga Choli In Raw Silk Fabric",
      price: "Rs.22,000",
      imgSrc:
        "http://cdn.shopify.com/s/files/1/0424/1876/5977/products/2135--10375_1200x1200.png?v=1662359703",
    },
    {
      name: "Lazy Bottle",
      price: "Rs.19,000",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/2001/4971/products/1_70b4cf3b-cf50-4ae0-a920-66d6543afd99_1200x.jpg?v=1669715768",
    },
    {
      name: "Pakistani Velvet Salwar Kameez Design For Party",
      price: "Rs.3,000",
      imgSrc:
        "http://cdn.shopify.com/s/files/1/1732/6543/products/PakistaniVelvetSalwarKameezDesignforParty_1200x630.jpg?v=1640794604",
    },
    {
      name: "Royal Velvet Salwar Kameez Pakistani Design Dress",
      price: "Rs.15,000",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/1732/6543/products/RoyalVelvetSalwarKameezPakistaniDesignDress_1_720x.jpg?v=1608051142",
    },
    {
      name: "Pretty Pakistani Black Salwar Kameez Velvet",
      price: "Rs.15,000",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/1732/6543/products/PrettyPakistaniBlackSalwarKameezVelvetOnline_1_720x.jpg?v=1607964262",
    },
    {
      name: "Royal Blue Pakistani Velvet Salwar Kameez",
      price: "Rs.3,000",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/1732/6543/products/RoyalBluePakistaniVelvetSalwarKameezOnline_720x.jpg?v=1640795320",
    },
    {
      name: "Elegant Blue Velvet Pakistani Kameez Salwar Dress",
      price: "Rs.7,000",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/1732/6543/products/ElegantBlueVelvetPakistaniKameezSalwarDress_720x.jpg?v=1640976792",
    },
    {
      name: "Maroon Velvet Salwar Kameez Design Pakistani Dress",
      price: "Rs.3,000",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/1732/6543/products/MaroonVelvetSalwarKameezDesignPakistaniDress_720x.jpg?v=1640887149",
    },
    {
      name: "Luxury Pakistani Wedding Wear Salwar Kameez",
      price: "Rs.18,000",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/1732/6543/products/LuxuryPakistaniWeddingWearSalwarKameez_2_720x.jpg?v=1608053133",
    },
  ];
  $: console.log(details[RouteID - 1].name);

  $: userDetails = [];
  onMount(async () => {
    let { data, error } = await supabase.from("orders").select("*");
    userDetails = data;
    $: console.table(userDetails);
  });

  $: dressProduct = details[RouteID - 1].name;
  $: dressPrice = details[RouteID - 1].price;
  let user = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    product: dressProduct,
    price: dressPrice,
    startdate: "",
    noofdays: "",
  };
  let handleform = () => {
    console.log("Handling Form");
  };
  let value = 0;
  let changeVal = () => {
    value = 1;
    setTimeout(() => {
      value = 0;
    }, 2000);
  };
</script>

<section class="flex flex-col md:flex-row bg-gray-900 pt-6">
  <div class="box md:w-1/2 mx-3 md:mx-10">
    <div class="py-5 sm:py-0">
      <div class="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5">
        <div class=" flex justify-center w-full md:inline-block md:w-fit">
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            src={details[RouteID - 1].imgSrc}
            alt="Product Image"
            class="w-56 h-56  md:w-72 md:h-[500px] rounded-lg object-cover object-center group-hover:scale-110 transition duration-200"
          />
        </div>

        <div class="flex flex-col">
          <div class="flex flex-col">
            <div
              class="inline-block text-slate-300 hover:text-gray-500 text-xl lg:text-3xl font-bold transition duration-100 mb-1"
            >
              {details[RouteID - 1].name}
            </div>

            <div>
              <span class="block text-sky-400 md:text-xl  font-bold mb-1"
                >{details[RouteID - 1].price}</span
              >

              <span class="flex items-center text-gray-500 text-sm gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                In stock
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Product End -->

  <div class=" py-6 sm:py-8 lg:py-12 md:max-w-xl" id="formData">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <!-- form - start -->
      <form
        class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto mb-20"
        on:submit|preventDefault={handleform}
      >
        <div>
          <label
            for="first-name"
            class="inline-block text-slate-300 text-sm sm:text-base mb-2"
            >First Name</label
          >
          <input
            required
            type="text"
            name="first-name"
            bind:value={user.firstname}
            class="w-full bg-gray-900 text-blue-400 border focus:border-2 focus:border-sky-500 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>
        <div>
          <label
            for="last-name"
            class="inline-block text-slate-300 text-sm sm:text-base mb-2"
            >Last Name</label
          >
          <input
            required
            type="text"
            name="last-name"
            bind:value={user.lastname}
            class="w-full bg-gray-900 text-blue-400 border focus:border-2 focus:border-sky-500 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>
        <!-- code  -->
        <!-- Email -->
        <div>
          <label
            for="email"
            class="inline-block text-slate-300 text-sm sm:text-base mb-2"
            >Email</label
          >
          <input
            required
            type="text"
            bind:value={user.email}
            name="email"
            class="w-full bg-gray-900 text-blue-400 border focus:border-2 focus:border-sky-500 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>
        <!-- Phone -->
        <div>
          <label
            for="phone"
            class="inline-block text-slate-300 text-sm sm:text-base mb-2"
            >Phone</label
          >
          <input
            required
            bind:value={user.phone}
            name="phone"
            class="w-full bg-gray-900 text-blue-400 border focus:border-2 focus:border-sky-500 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>
        <div>
          <label
            for="noofdays"
            class="inline-block text-slate-300 text-sm sm:text-base mb-2"
            >No. of Days</label
          >
          <input
            required
            bind:value={user.noofdays}
            name="noofdays"
            type="number"
            class="w-full bg-gray-900 text-blue-400 border focus:border-2 focus:border-sky-500 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>
        <div>
          <label
            for="date"
            class="inline-block text-slate-300 text-sm sm:text-base mb-2"
            >Date</label
          >
          <input
            required
            type="date"
            bind:value={user.startdate}
            name="date"
            class="w-full bg-gray-900 text-blue-400 border focus:border-2 focus:border-sky-500 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div class="sm:col-span-2">
          <label
            for="subject"
            class="inline-block text-slate-300 text-sm sm:text-base mb-2"
            >Selected Dress</label
          >

          <input
            disabled
            bind:value={details[RouteID - 1].name}
            name="subject"
            class="w-full bg-gray-900 text-blue-400 border focus:border-2 focus:border-sky-500 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div class="sm:col-span-2">
          <label
            for="address"
            class="inline-block text-slate-300 text-sm sm:text-base mb-2"
            >Address</label
          >
          <textarea
            required
            bind:value={user.address}
            name="address"
            class="w-full h-32 bg-gray-900 text-sky-500 border focus:border-2 focus:border-sky-500 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div class="sm:col-span-2 flex justify-between items-center">
          <button
            on:click={changeVal}
            type="submit"
            class="inline-block bg-sky-600 hover:bg-sky-800  text-white text-sm md:text-lg font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >Send</button
          >
        </div>
      </form>
      <!-- form - end -->
    </div>
  </div>

  {#if value === 1 && user.firstname != ""}
    <div class="toast toast-top toast-end md:toast-end md:toast-bottom">
      <div class="alert alert-success">
        <div>
          <span
            >Dear <strong>{user.firstname + " " + user.lastname}</strong> Order
            is Placed, Will Be Delivered in 2 Days
            <br />
            <i>Thankyou for Shopping with us</i>
          </span>
        </div>
      </div>
    </div>
  {/if}
</section>

<!-- <section>
  <h1 class="sr-only">Checkout</h1>

  <div class="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
    <div class="bg-gray-50 py-12 md:py-24">
      <div class="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
        <div class="flex items-center gap-4">
          <span class="h-10 w-10 rounded-full bg-blue-700" />

          <h2 class="font-medium text-gray-900">BambooYou</h2>
        </div>

        <div>
          <div class="flow-root">
            <ul
              class="-my-4 divide-y divide-gray-100 border-2 border-black rounded-xl bg-gray-300"
            >
              

              <li class="flex items-center gap-4 py-4">
                <img
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                  alt=""
                  class="h-20 w-20 mx-5 rounded object-cover  "
                />

                <div>
                  <h3 class="text-2xl text-gray-900 font-bold">
                    {details[RouteID - 1].name}
                  </h3>

                  <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                    
                    <div>
                      <dt class="inline text-xl  text-blue-500 font-bold ">
                        Rent Value:
                      </dt>
                      <dd class="inline text-xl text-blue-500 font-bold">
                        {details[RouteID - 1].price}
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->

<!-- <div class="bg-white py-12 md:py-24">
      <div class="mx-auto max-w-lg px-4 lg:px-8">
        <form class="grid grid-cols-6 gap-4">
          <div class="col-span-3">
            <label
              for="FirstName"
              class="block text-xs font-medium text-gray-700"
            >
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>

          <div class="col-span-3">
            <label
              for="LastName"
              class="block text-xs font-medium text-gray-700"
            >
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>

          <div class="col-span-6">
            <label for="Email" class="block text-xs font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              id="Email"
              class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>

          <div class="col-span-6">
            <label for="Phone" class="block text-xs font-medium text-gray-700">
              Phone
            </label>

            <input
              type="tel"
              id="Phone"
              class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>

          <div class="col-span-6">
            <label
              for="Address"
              class="block text-xs font-medium text-gray-700"
            >
              Address
            </label>

            <input
              type="text"
              id="Address"
              class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>

          <div class="col-span-6">
            <button
              class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section> -->
