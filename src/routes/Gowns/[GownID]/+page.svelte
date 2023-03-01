<script>
  import { page } from "$app/stores";
  $: RouteId = $page.params.GownID;
  $: overAll = RouteId + 1;
  $: console.log(RouteId);

  import Img1 from "$lib/G1.webp";
  import Img2 from "$lib/G2.webp";
  import Img3 from "$lib/G3.jpg";
  import Img4 from "$lib/G4.avif";
  // import Img5 from '$lib/img5.jpg';
  // import Img6 from '$lib/img6.jpg';
  // import Img7 from '$lib/img7.jpg';
  // import Img8 from '$lib/img8.jpg';
  // import Img9 from '$lib/Images/img1.png';
  // import Img10 from '$lib/Images/img2.jpg';
  // import Img11 from '$lib/Images/img3.jpg';
  // import Img12 from '$lib/Images/img4.jpg';
  // import Img13 from '$lib/Images/img5.jpg';
  // import Img14 from '$lib/Images/img6.jpg';
  // import Img15 from '$lib/Images/img7.jpg';
  // import Img16 from '$lib/Images/img8.jpg';
  let data = [
    {
      id: 1,
      title: "Personalised Princess Ball Gown Pleat Lace Appliques Beads Pearls",
      imgSrc: "https://i0.wp.com/lovejunebridal.com/wp-content/uploads/2022/04/1-48.jpg?resize=600%2C600&ssl=1",
      i1: "https://i0.wp.com/lovejunebridal.com/wp-content/uploads/2022/04/2-45.jpg?resize=600%2C600&ssl=1",
      i2: "https://i0.wp.com/lovejunebridal.com/wp-content/uploads/2022/04/3-42.jpg?resize=600%2C600&ssl=1",
      i3: "",
      price1: "Rs.8,000",
      price2: "Rs.58,787.05($590)",
    },
    {
      id: 2,
      title: "DStore Fashion Women's High Neck Full Sleeves Sweep Train Luxury Wedding Dresses ...",
      imgSrc: "https://cdn.shopify.com/s/files/1/2450/0989/products/34_b3510b5d-c663-4067-9667-f593567072ed_800x.jpg?v=1661696781",
      i1: "https://cdn.shopify.com/s/files/1/2450/0989/products/35_a4220ccf-e83c-4a51-a376-ba5679c848a0_300x.jpg?v=1661696851",
      i2: "https://cdn.shopify.com/s/files/1/2450/0989/products/34_b3510b5d-c663-4067-9667-f593567072ed_300x.jpg?v=1661696781",
      i3: "",
      price1: "Rs.10,000",
      price2: "Rs.81,544.71($987.99)",
    },
    {
      id: 3,
      title: "Chotronette Porcelain Armour Made to Measure Alternative Event & Wedding Dress",
      imgSrc: "https://chotronette.com/wp-content/uploads/2022/05/6dd9e0e7-31f3-4329-87d4-cfccb41a946c.jpg",
      i1: "https://chotronette.com/wp-content/uploads/2022/05/218f8cc4-bbd1-4529-ae64-7ddef0f48b05-350x525.jpg.webp",
      i2: "https://chotronette.com/wp-content/uploads/2022/05/218f8cc4-bbd1-4529-ae64-7ddef0f48b05.jpg",
      i3: "",
      price1: "Rs.21,000",
      price2: "Rs.1,73,325.53($2,100)",
    },
    {
      id: 4,
      title: "Wedding Dresses Train Sweetheart Elegant Puffy Princess Thin Simple Trailing Satin Dress Bride Gown",
      imgSrc: "https://images-cdn.ubuy.co.in/634d1bd8da714d3c92212fa4-generic-wedding-dresses-train-sweetheart.jpg",
      i1: "https://images-cdn.ubuy.co.in/634d1bd8da714d3c92212fa7-generic-wedding-dresses-train-sweetheart.jpg",
      i2: "https://images-cdn.ubuy.co.in/634d1bd8da714d3c92212faa-generic-wedding-dresses-train-sweetheart.jpg",
      i3: "https://images-cdn.ubuy.co.in/634d1bd8da714d3c92212fad-generic-wedding-dresses-train-sweetheart.jpg",
      price1: "Rs.8,000",
      price2: "Rs.55,690.00",
    },
    {
    	id: 5,
    	title: "Long Sleeves Pearls Wedding Dresses",
    	imgSrc: "https://cdn.shopify.com/s/files/1/0248/2651/1434/products/product-image-1906205895_720x.jpg?v=1656637020",
      i1: "https://cdn.shopify.com/s/files/1/0248/2651/1434/products/product-image-1906205895_180x.jpg?v=1656637020",
      i2: "https://cdn.shopify.com/s/files/1/0248/2651/1434/products/product-image-1906205896_180x.jpg?v=1656637022",
      i3: "",
    	price1: "Rs.11,000",
      price2: "Rs.99,042.34($1,199.99)",
    },
    {
    	id: 6,
    	title: "Off Shoulder Sheer Sequin Cathedral Train Wedding Dress",
    	imgSrc: "https://cdn.shopify.com/s/files/1/0124/4368/0858/products/Screenshot2022-11-07134910_702x.png?v=1669638805",
      i1: "https://cdn.shopify.com/s/files/1/0124/4368/0858/products/Screenshot2022-11-07134932_720x.png?v=1669638805",
      i2: "https://cdn.shopify.com/s/files/1/0124/4368/0858/products/Screenshot2022-11-07135012_720x.png?v=1669638805",
      i3: "https://cdn.shopify.com/s/files/1/0124/4368/0858/products/Screenshot2022-11-07134954_720x.png?v=1669638805",
    	price1: "Rs.9,000",
      price2: "Rs.70,613.39($8,54.81)",
    },
    {
    	id: 7,
    	title: "D&D Clothing Puffy Wedding Ball Gown White Made to Measure / White",
    	imgSrc: "http://cdn.shopify.com/s/files/1/0565/1926/2384/products/image_c76b0adc-645b-4a5e-be43-e68892d095b9.jpg?v=1663272710",
      i1: "https://cdn.shopify.com/s/files/1/0565/1926/2384/products/image_af84f4e8-c6df-4a41-829f-798b24b309cb_1800x1800.jpg?v=1663272709",
      i2: "https://cdn.shopify.com/s/files/1/0565/1926/2384/products/image_c6372031-0c22-4c41-a6b3-652642a48b8a_1800x1800.jpg?v=1663272712",
      i3: "",
    	price1: "Rs.50,000",
      price2: "Rs.4,70,455.01($5,700)",
    },
    {
    	id: 8,
    	title: "WOMEN'S BOAT NECK FULL SLEEVES MERMAID BRIDAL WEDDING DRESS",
    	imgSrc: "https://cdn.shopify.com/s/files/1/2450/0989/products/a4_9cac7661-c853-4cf6-a1cf-1d505b882df3_800x.jpg?v=1657075738",
      i1: "https://cdn.shopify.com/s/files/1/2450/0989/products/a4_9cac7661-c853-4cf6-a1cf-1d505b882df3_300x.jpg?v=1657075738",
      i2: "https://cdn.shopify.com/s/files/1/2450/0989/products/a1_ebf01026-821f-4495-8495-741b16f8eafb_300x.jpg?v=1657075738",
      i3: "",
    	price1: "Rs.15,000",
      price2: "Rs.1,22,317.48($1,481.99)",
    },
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