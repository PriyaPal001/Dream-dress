<script>
  import supabase from "$lib/db.js";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  $: RouteID = $page.params.FormID;

  let details = [
    {
      name: "Silver & Gold Zari Woven Kanchipuram Tissue Saree",
      price: "Rs.5,500",
    },
    {
      name: "Soft Pastel Pink Cutdana Embroidered Net Saree",
      price: "Rs.6,500",
    },
    {
      name: "Chotronette Porcelain Armour Made to Measure Alternative Event & Wedding Dress",
      price: "Rs.6.500",
    },
    {
      name: "Black Sequins Embroidered Organza Saree",
      price: "Rs.5,200",
    },
    {
      name: "Oxford Blue Sequins Embroidered Organza Saree",
      price: "Rs.6,000",
    },
    {
      name: "Gold Sequins Embroidered Tissue Saree",
      price: "Rs.7,500",
    },
    {
      name: "Personalised Princess Ball Gown Pleat Lace Appliques Beads Pearls",
      price: "Rs.8,000",
    },
    {
      name: "JDStore Fashion Women's High Neck Full Sleeves Sweep Train Luxury Wedding Dresses ...",
      price: "Rs.10,000",
    },
    {
      name: "Chotronette Porcelain Armour Made to Measure Alternative Event & Wedding Dress",
      price: "Rs.21,000",
    },
    {
      name: "Wedding Dresses Train Sweetheart Elegant Puffy Princess Thin Simple Trailing Satin Dress Bride Gown",
      price: "Rs.8,000",
    },
    {
      name: "Long Sleeves Pearls Wedding Dresses",
      price: "Rs.11,000",
    },
    {
      name: "Off Shoulder Sheer Sequin Cathedral Train Wedding Dress",
      price: "Rs.9,000",
    },
    {
      name: "D&D Clothing Puffy Wedding Ball Gown White Made to Measure / White",
      price: "Rs.50,000",
    },
    {
      name: "WOMEN'S BOAT NECK FULL SLEEVES MERMAID BRIDAL WEDDING DRESS",
      price: "Rs.15,000",
    },
    {
      name: "Smoke Blue Stone Embroidered Net Bridal Lehenga",
      price: "Rs.15,000",
    },
    {
      name: "Malaika Arora In Kalki French Pink Raw Silk Heavy Embroidered Lehenga With Net",
      price: "Rs.18,000",
    },
    {
      name: "Multicolor Resham Embroidered Crepe Bridal Lehenga",
      price: "Rs.12,000",
    },
    {
      name: "Champange Net Lehenga ",
      price: "Rs.12,000",
    },
    {
      name: "MULTI COLOUR FLORAL LEHENGA ",
      price: "Rs.19,000",
    },
    {
      name: "Silver Wrap Top With Lehenga Set ",
      price: "Rs.20,000",
    },
    {
      name: "Dark Red Lehenga Choli In Raw Silk Fabric",
      price: "Rs.22,000",
    },
    {
      name: "Lazy Bottle",
      price: "Rs.19,000",
    },
    {
      name: "Pakistani Velvet Salwar Kameez Design For Party",
      price: "Rs.3,000",
    },
    {
      name: "Royal Velvet Salwar Kameez Pakistani Design Dress",
      price: "Rs.15,000",
    },
    {
      name: "Pretty Pakistani Black Salwar Kameez Velvet",
      price: "Rs.15,000",
    },
    {
      name: "Royal Blue Pakistani Velvet Salwar Kameez",
      price: "Rs.3,000",
    },
    {
      name: "Elegant Blue Velvet Pakistani Kameez Salwar Dress",
      price: "Rs.7,000",
    },
    {
      name: "Maroon Velvet Salwar Kameez Design Pakistani Dress",
      price: "Rs.3,000",
    },
    {
      name: "Luxury Pakistani Wedding Wear Salwar Kameez",
      price: "Rs.18,000",
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
</script>

<section>
	<div class="mb-3 md:mb-2 md:mt-5">
		<h2 class="text-slate-100 text-3xl lg:text-6xl font-bold text-center mb-3 md:mb-2">
			Welcome to Fusion XD
		</h2>
	</div>
</section>
<section class="flex flex-col md:flex-row">
	<div class="box md:w-1/2 mx-3 md:mx-10">
		<div class="py-5 sm:py-8">
			<div class="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5">
				<div class="sm:-my-2.5 flex justify-center w-full md:inline-block md:w-fit">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src={data[RouteId - 1].imgSrc}
						alt="Photo by Thái An"
						class="w-56 h-56  md:w-72 md:h-96 rounded-lg object-cover object-center group-hover:scale-110 transition duration-200"
					/>
				</div>

				<div class="flex flex-col">
					<div class="flex flex-col">
						<div
							class="inline-block   text-slate-300 hover:text-gray-500 text-xl lg:text-3xl font-bold transition duration-100 mb-1"
						>
							{data[RouteId - 1].title}
						</div>

						<div>
							<span class="block text-slate-300 md:text-lg font-bold mb-1"
								>Rs.{data[RouteId - 1].price}</span
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

					<!-- <div
						class="w-full sm:w-auto flex justify-center border-t sm:border-none pt-4 sm:pt-0 px-5 md:px-0"
					>
						<div class="flex flex-col items-start gap-2">
							<button
								class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100"
								>Quantity</button
							>
							<div class="w-28 h-12 flex border rounded overflow-hidden">
								<input
									bind:value={smalldata.quantity}
									type="number"
									class="w-full bg-transparent focus:ring ring-inset ring-indigo-300 outline-none transition   duration-100 px-4 py-2"
								/>

								<div class="flex flex-col  border-l divide-y">
									<button
										on:click={() => {
											smalldata.quantity++;
										}}
										class="w-6 flex justify-center items-center flex-1 bg-slate-800 text-sky-400 hover:bg-slate-700 active:bg-gray-200 leading-none select-none transition duration-100"
										>+</button
									>
									<button
										on:click={() => {
											if (smalldata.quantity == 1) {
												smalldata.quantity = 1;
											} else {
												smalldata.quantity--;
											}
										}}
										class="w-6 flex justify-center items-center flex-1 bg-slate-800 text-sky-400 hover:bg-slate-700 text-2xl active:bg-gray-200 leading-none select-none transition duration-100"
										>-</button
									>
								</div>
							</div>
						</div> -->

						<!-- <div class=" sm:pt-2 ml-4 md:ml-8 lg:ml-10 ">
							<div class="block text-sky-400 md:text-xl font-bold">
								Rs. {data[RouteId - 1].price * smalldata.quantity}
							</div>
						</div> -->
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
					<label for="full-name" class="inline-block text-slate-300 text-sm sm:text-base mb-2"
						>Full Name</label
					>
					<input
						required
						name="full-name"
						bind:value={smalldata.fullname}
						class="w-full bg-gray-900 text-blue-400 border focus:border-2 focus:border-sky-500 rounded outline-none transition duration-100 px-3 py-2"
					/>
				</div>
				<!-- code  -->
				<div>
					<label for="quantity" class="inline-block text-slate-300 text-sm sm:text-base mb-2"
						>Quantity</label
					>
					<input
						required
						bind:value={smalldata.quantity}
						name="quantity"
						class="w-full bg-gray-900 text-blue-400 border focus:border-2 focus:border-sky-500 rounded outline-none transition duration-100 px-3 py-2"
					/>
				</div>

				<div>
					<label for="size" class="inline-block text-slate-300 text-sm sm:text-base mb-2"
						>Size</label
					>
					<input
						required
						bind:value={smalldata.size}
						name="size"
						class="w-full bg-gray-900 text-blue-400 border focus:border-2 focus:border-sky-500 rounded outline-none transition duration-100 px-3 py-2"
					/>
				</div>

				<div>
					<label for="email" class="inline-block text-slate-300 text-sm sm:text-base mb-2"
						>Email</label
					>
					<input
						required
						bind:value={smalldata.email}
						name="email"
						class="w-full bg-gray-900 text-blue-400 border focus:border-2 focus:border-sky-500 rounded outline-none transition duration-100 px-3 py-2"
					/>
				</div>

				<div class="sm:col-span-2">
					<label for="subject" class="inline-block text-slate-300 text-sm sm:text-base mb-2"
						>Select favorite Sweatshirt</label
					>

					<input
						disabled
						bind:value={data[RouteId - 1].title}
						name="subject"
						class="w-full bg-gray-900 text-blue-400 border focus:border-2 focus:border-sky-500 rounded outline-none transition duration-100 px-3 py-2"
					/>
				</div>

				<div class="sm:col-span-2">
					<label for="address" class="inline-block text-slate-300 text-sm sm:text-base mb-2"
						>Address</label
					>
					<textarea
						required
						bind:value={smalldata.address}
						name="address"
						class="w-full h-32 bg-gray-900 text-sky-500 border focus:border-2 focus:border-sky-500 rounded outline-none transition duration-100 px-3 py-2"
					/>
				</div>

				<div class="sm:col-span-2 flex justify-between items-center">
					<button
						type="submit"
						on:click={activeToast}
						class="inline-block bg-sky-600 hover:bg-sky-800  text-white text-sm md:text-lg font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
						>Send</button
					>
				</div>
			</form>
			<!-- form - end -->
		</div>
	</div>

	{#if value == 1 && smalldata.fullname != ''}
		<div class="toast toast-top toast-end md:toast-end md:toast-bottom">
			<div class="alert alert-success">
				<div>
					<span
						>Dear <strong>{smalldata.fullname}</strong> Order is Placed, Will Be Delivered in 2 Days
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

    <div class="bg-white py-12 md:py-24">
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
</section>
