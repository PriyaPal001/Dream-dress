<script>
    import { page } from "$app/stores";
    $: RouteId = $page.params.SalwarID;
    $: overAll = RouteId + 1;
    $: console.log(RouteId);
    let data = [
      {
        id: 1,
        title: "Pakistani Velvet Salwar Kameez Design For Party",
        imgSrc: "http://cdn.shopify.com/s/files/1/1732/6543/products/PakistaniVelvetSalwarKameezDesignforParty_1200x630.jpg?v=1640794604",
        i1: "https://cdn.shopify.com/s/files/1/1732/6543/products/PakistaniVelvetSalwarKameezDesignforPartyWear_720x.jpg?v=1640794603",
        i2: "https://cdn.shopify.com/s/files/1/1732/6543/products/PakistaniVelvetSalwarKameezDesign_720x.jpg?v=1640794604",
        i3: "",
        price1: "Rs.3,000",
        price2: "Rs.Rs.32,891",
      },
      {
        id: 2,
        title: "Royal Velvet Salwar Kameez Pakistani Design Dress",
        imgSrc: "https://cdn.shopify.com/s/files/1/1732/6543/products/RoyalVelvetSalwarKameezPakistaniDesignDress_1_720x.jpg?v=1608051142",
        i1: "https://cdn.shopify.com/s/files/1/1732/6543/products/RoyalVelvetSalwarKameezPakistaniDesignDress_2_360x.jpg?v=1608051148",
        i2: "https://cdn.shopify.com/s/files/1/1732/6543/products/RoyalVelvetSalwarKameezPakistaniDesignDress_4_360x.jpg?v=1608051162",
        i3: "https://cdn.shopify.com/s/files/1/1732/6543/products/RoyalVelvetSalwarKameezPakistaniDesignDress_5_360x.jpg?v=1608051167",
        price1: "Rs.15,000",
        price2: "Rs.123,652",
      },
      {
        id: 3,
        title: "Pretty Pakistani Black Salwar Kameez Velvet ",
        imgSrc: "https://cdn.shopify.com/s/files/1/1732/6543/products/PrettyPakistaniBlackSalwarKameezVelvetOnline_1_720x.jpg?v=1607964262",
        i1: "https://cdn.shopify.com/s/files/1/1732/6543/products/PrettyPakistaniBlackSalwarKameezVelvetOnline_4_360x.jpg?v=1607964263",
        i2: "https://cdn.shopify.com/s/files/1/1732/6543/products/PrettyPakistaniBlackSalwarKameezVelvetOnline_5_360x.jpg?v=1607964263",
        i3: "",
        price1: "Rs.15,000",
        price2: "Rs.123,652",
      },
      {
        id: 4,
        title: "Royal Blue Pakistani Velvet Salwar Kameez",
        imgSrc: "https://cdn.shopify.com/s/files/1/1732/6543/products/RoyalBluePakistaniVelvetSalwarKameezOnline_720x.jpg?v=1640795320",
        i1: "https://cdn.shopify.com/s/files/1/1732/6543/products/RoyalBluePakistaniVelvetSalwarKameezOnline2022_720x.jpg?v=1640795321",
        i2: "",
        i3: "",
        price1: "Rs.3,000",
        price2: "Rs.32,891",
      },
      {
          id: 5,
          title: "Elegant Blue Velvet Pakistani Kameez Salwar Dress",
          imgSrc: "https://cdn.shopify.com/s/files/1/1732/6543/products/ElegantBlueVelvetPakistaniKameezSalwarDress_720x.jpg?v=1640976792",
        i1: "https://cdn.shopify.com/s/files/1/1732/6543/products/ElegantBlueVelvetPakistaniKameezSalwarDress2022_360x.jpg?v=1640976791",
        i2: "https://cdn.shopify.com/s/files/1/1732/6543/products/ElegantBlueVelvetPakistaniKameezSalwar_360x.jpg?v=1640976791",
        i3: "https://cdn.shopify.com/s/files/1/1732/6543/products/ElegantBlueVelvetPakistaniKameezSalwar2022_360x.jpg?v=1640976793",
          price1: "Rs.7,000",
        price2: "Rs.74,109",
      },
      {
          id: 6,
          title: "Maroon Velvet Salwar Kameez Design Pakistani Dress",
          imgSrc: "https://cdn.shopify.com/s/files/1/1732/6543/products/MaroonVelvetSalwarKameezDesignPakistaniDress_720x.jpg?v=1640887149",
        i1: "https://cdn.shopify.com/s/files/1/1732/6543/products/MaroonVelvetSalwarKameezDesignPakistaniDress2022_360x.jpg?v=1640887149",
        i2: "https://cdn.shopify.com/s/files/1/1732/6543/products/MaroonVelvetSalwarKameezDesignPakistani2022_360x.jpg?v=1640887149",
        i3: "https://cdn.shopify.com/s/files/1/1732/6543/products/MaroonVelvetSalwarKameezDesign_360x.jpg?v=1640887150",
          price1: "Rs.3,000",
        price2: "Rs.32,891",
      },
      {
          id: 7,
          title: "Luxury Pakistani Wedding Wear Salwar Kameez",
          imgSrc: "https://cdn.shopify.com/s/files/1/1732/6543/products/LuxuryPakistaniWeddingWearSalwarKameez_2_720x.jpg?v=1608053133",
        i1: "https://cdn.shopify.com/s/files/1/1732/6543/products/LuxuryPakistaniWeddingWearSalwarKameez_4_360x.jpg?v=1608053151",
        i2: "https://cdn.shopify.com/s/files/1/1732/6543/products/LuxuryPakistaniWeddingWearSalwarKameez_1_360x.jpg?v=1608053163",
        i3: "",
          price1: "Rs.18,000",
        price2: "Rs.148,383",
      },
    //   {
    //       id: 8,
    //       title: "WOMEN'S BOAT NECK FULL SLEEVES MERMAID BRIDAL WEDDING DRESS",
    //       imgSrc: "https://cdn.shopify.com/s/files/1/2001/4971/products/1_70b4cf3b-cf50-4ae0-a920-66d6543afd99_1200x.jpg?v=1669715768",
    //     i1: "https://cdn.shopify.com/s/files/1/2001/4971/products/2_95c89e5a-d397-434c-ae34-7b7d9b50316a_623x@2x.jpg?v=1669715768",
    //     i2: "https://cdn.shopify.com/s/files/1/2001/4971/products/4_17ec6a66-ecce-4008-b922-8623cdb969f9_623x@2x.jpg?v=1669715833",
    //     i3: "https://cdn.shopify.com/s/files/1/2001/4971/products/3_d8cb9a00-1185-4a21-bd3e-fec3b91a83fd_623x@2x.jpg?v=1669715833",
    //       price1: "Rs.19,000",
    //     price2: "Rs.191,000",
    //   },
    ];
  </script>
  
  <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- images - start -->
          <div class="grid lg:grid-cols-5 gap-4">
            <div class="flex lg:flex-col order-last lg:order-none gap-4">
              <div class="bg-gray-100 rounded-lg overflow-hidden">
                <img src={data[RouteId-1].i1} loading="lazy" alt="Photo by Himanshu Dewangan" class="w-full h-full object-cover object-center" />
              </div>
    
              <div class="bg-gray-100 rounded-lg overflow-hidden">
                <img src={data[RouteId-1].i2} loading="lazy" alt="Photo by Himanshu Dewangan" class="w-full h-full object-cover object-center" />
              </div>
    
              <div class="bg-gray-100 rounded-lg overflow-hidden {data[RouteId-1].i3==""?"hidden":""}" >
                <img src={data[RouteId-1].i3} loading="lazy" alt="Photo by Himanshu Dewangan" class="w-full h-full object-cover object-center" />
  
              </div>
            </div>
    
            <div class="lg:col-span-4 bg-gray-100 rounded-lg overflow-hidden relative">
              <img src={data[RouteId-1].imgSrc} loading="lazy" alt="Photo by Himanshu Dewangan" class="w-full h-full object-cover object-center" />
    
              <span class="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">sale</span>
    
              <a href="#" class="inline-block bg-white hover:bg-gray-100 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 border text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 absolute right-4 top-4 px-3.5 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </a>
            </div>
          </div>
          <!-- images - end -->
    
          <!-- content - start -->
          <div class="md:py-8">
            <!-- name - start -->
            <div class="mb-2 md:mb-3">
              <span class="inline-block text-gray-500 mb-0.5">Fancy Brand</span>
              <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">{data[RouteId-1].title}</h2>
            </div>
            <!-- name - end -->
    
            <!-- rating - start -->
            <div class="flex items-center gap-3 mb-6 md:mb-10">
              <div class="h-7 flex items-center bg-indigo-500 text-white rounded-full gap-1 px-2">
                <span class="text-sm">4.2</span>
    
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
    
              <span class="text-gray-500 text-sm transition duration-100">56 ratings</span>
            </div>
            <!-- rating - end -->
    
            <!-- size - start -->
            <div class="mb-8 md:mb-10">
              <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">Size</span>
    
              <div class="flex flex-wrap gap-3">
                <button type="button" class="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100">XS</button>
                <button type="button" class="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100">S</button>
                <span class="w-12 h-8 flex justify-center items-center bg-indigo-500 text-white text-sm font-semibold text-center border border-indigo-500 rounded-md cursor-default">M</span>
                <button type="button" class="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100">L</button>
                <span class="w-12 h-8 flex justify-center items-center bg-white text-gray-400 text-sm font-semibold text-center border border-transparent rounded-md cursor-not-allowed">XL</span>
              </div>
            </div>
            <!-- size - end -->
    
            <!-- price - start -->
            <div class="mb-4">
              <div class="flex items-end gap-2">
                <span class="text-gray-800 text-xl md:text-2xl font-bold">{data[RouteId-1].price1}</span>
                <span class="text-red-500 line-through mb-0.5">{data[RouteId-1].price2}</span>
              </div>
    
              <span class="text-gray-500 text-sm">incl. VAT plus shipping</span>
            </div>
            <!-- price - end -->
    
            <!-- shipping notice - start -->
            <div class="flex items-center text-gray-500 gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
    
              <span class="text-sm">2-4 day shipping</span>
            </div>
            <!-- shipping notice - end -->
    
            <!-- buttons - start -->
            <div class="flex gap-2.5">
              <a href="#" class="inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Add to cart</a>
    
              <a href="#" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Buy now</a>
            </div>
            <!-- buttons - end -->
          </div>
          <!-- content - end -->
        </div>
      </div>
    </div>