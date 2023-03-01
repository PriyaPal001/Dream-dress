<!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

<script>
import {page} from '$app/stores';
$:RouteID=$page.params.FormID;
let details=[
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
    ]
    $:console.log(details[RouteID-1].name);
</script>

<section>
    <h1 class="sr-only">Checkout</h1>
  
    <div class="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
      <div class="bg-gray-50 py-12 md:py-24">
        <div class="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
          <div class="flex items-center gap-4">
            <span class="h-10 w-10 rounded-full bg-blue-700"></span>
  
            <h2 class="font-medium text-gray-900">BambooYou</h2>
          </div>
  
          <!-- <div>
            <p class="text-2xl font-medium tracking-tight text-gray-900">
              $99.99
            </p>
  
            <p class="mt-1 text-sm text-gray-600">For the purchase of</p>
          </div>
   -->
          <div>
            <div class="flow-root">
              <ul class="-my-4 divide-y divide-gray-100 border-2 border-black rounded-xl bg-sky-200">
                <!-- <li class="flex items-center gap-4 py-4">
                  <img
                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                    alt=""
                    class="h-16 w-16 rounded object-cover"
                  />
  
                  <div>
                    <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>
  
                    <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt class="inline">Size:</dt>
                        <dd class="inline">XXS</dd>
                      </div>
  
                      <div>
                        <dt class="inline">Color:</dt>
                        <dd class="inline">White</dd>
                      </div>
                    </dl>
                  </div>
                </li> -->
  
                <li class="flex items-center gap-4 py-4">
                  <img
                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                    alt=""
                    class="h-20 w-20 mx-5 rounded object-cover  "
                  />
  
                  <div>
                    <h3 class="text-2xl text-gray-900 font-bold">{details[RouteID-1].name}</h3>
  
                    <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <!-- <div>
                        <dt class="inline">Size:</dt>
                        <dd class="inline">XXS</dd>
                      </div>
  
                      <div>
                        <dt class="inline">Color:</dt>
                        <dd class="inline">White</dd>
                      </div> -->
                      <div>
                        <dt class="inline text-xl  text-blue-500 font-bold " >Rent Value:</dt>
                        <dd class="inline text-xl text-blue-500 font-bold">{details[RouteID-1].price}</dd>
                      </div>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
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
  
            <fieldset class="col-span-6">
              <legend class="block text-sm font-medium text-gray-700">
                Card Details
              </legend>
  
              <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                <div>
                  <label for="CardNumber" class="sr-only"> Card Number </label>
  
                  <input
                    type="text"
                    id="CardNumber"
                    placeholder="Card Number"
                    class="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                  />
                </div>
  
                <div class="flex -space-x-px">
                  <div class="flex-1">
                    <label for="CardExpiry" class="sr-only"> Card Expiry </label>
  
                    <input
                      type="text"
                      id="CardExpiry"
                      placeholder="Expiry Date"
                      class="relative w-full rounded-bl-md border-gray-200 focus:z-10 sm:text-sm"
                    />
                  </div>
  
                  <div class="flex-1">
                    <label for="CardCVC" class="sr-only"> Card CVC </label>
  
                    <input
                      type="text"
                      id="CardCVC"
                      placeholder="CVC"
                      class="relative w-full rounded-br-md border-gray-200 focus:z-10 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </fieldset>
  
            <fieldset class="col-span-6">
              <legend class="block text-sm font-medium text-gray-700">
                Billing Address
              </legend>
  
              <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                <div>
                  <label for="Country" class="sr-only">Country</label>
  
                  <select
                    id="Country"
                    class="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                  >
                    <option>England</option>
                    <option>Wales</option>
                    <option>Scotland</option>
                    <option>France</option>
                    <option>Belgium</option>
                    <option>Japan</option>
                  </select>
                </div>
  
                <div>
                  <label class="sr-only" for="PostalCode"> ZIP/Post Code </label>
  
                  <input
                    type="text"
                    id="PostalCode"
                    placeholder="ZIP/Post Code"
                    class="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
            </fieldset>
  
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
  