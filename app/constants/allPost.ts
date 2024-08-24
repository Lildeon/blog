const allPost = [
  {
    id: 1,
    title: "Motorola-edge-50",
    description: "Moto Edge 50 Ultra is official",
    brand: "Motorola",
    src: "/images/photo_2024-05-26_05-39-05.jpg",
    path: "/blog/post/Motorola-edge-50"    },
  {
    id: 2,
    title: "beats-solo-look",
    description: " Beats Solo Buds announced: Spatial audio Lossless audio ",
    brand: "Other",
    src: "/images/photo_2024-05-26_05-44-19.jpg",
    path: "/blog/post/beats-solo-look"
  },
  {
    id: 3,
    title: "pixel-9",
    description: "Google Pixel 9 renders leaked!",
    brand: "Google-pixel",
    src: "/images/photo_2024-05-26_05-29-18.jpg",
    path: "/blog/post/pixel-9"
 },
  {
    id: 4,
    title: "oneplus-nord",
    description: "OnePlus Nord CE 4 launched in China! ",
    brand: "onePlus",
    src: "/images/photo_2024-05-26_05-30-53.jpg",
    path: "/blog/post/oneplus-nord"
  },
  {
    id: 5,
    title: "iphone-se",
    description: "iPhone SE 4 details!",
    brand: "Apple",
    src: "/images/photo_2024-05-26_05-33-23.jpg",
    path: "/blog/post/iphone-se"
  },
  {
    id: 6,
    title: "Samsung-S23-FE",
    description: "Samsung Galaxy S23 FE launched globally!!",
    brand: "Samsung",
    src: "/images/photo_2024-08-04_05-31-30.jpg",
    path: "/blog/post/Samsung-S23-FE"
  },
  {
    id: 7,
    title: "Vivo-x100",
    description: "Vivo X100 Ultra official render!",
    brand: "Other",
    src: "/images/photo_2024-05-26_05-49-38.jpg",
    path: "/blog/post/Vivo-x100"
  },
  {
    id: 8,
    title: "iphone-17-lineup",
    description: "The iPhone 17 lineup will feature an updated design !",
    brand: "Apple",
    src: "/images/photo_2024-05-26_05-45-02.jpg",
    path: "/blog/post/iphone-17-lineup"
  },
  {
    id: 9,
    title: "Moto-edge",
    description: "Moto Edge 50 Ultra is official",
    brand: "Motorola",
    src: "/images/photo_2024-05-26_05-38-57.jpg",
    path: "/blog/post/Moto-edge"
  },
  {
    id: 10,
    title: "Moto-buds",
    description: "moto buds+ launching in India soon!",
    brand: "Motorola",
    src: "/images/photo_2024-05-26_05-42-19.jpg",
    path: "/blog/post/Moto-buds"
  },
  {
    id: 11,
    title: "Galaxy-A14",
      description: "Galaxy A14",
      src: "/images/photo_2024-08-04_05-38-20.jpg",
      brand: "Samsung",
      path: "/blog/post/Galaxy-A14"    },
  {
    id: 12,
      title: "iphone-16-pro-max",
      description: "iPhone 16 pro max available colors.",
      brand: "Apple",
      src: "/images/photo_2024-08-03_07-23-28.jpg",
      path: "/blog/post/iphone-16-pro-max"
  },
  {
    id: 13,
    title: "iphone-17",
    description: "iPhone 17 release!",
    brand: "Apple",
    src: "/images/photo_2024-08-03_07-19-06.jpg",
    path: "/blog/post/iphone-17"
  },
  {
    id: 14,
    title: "beats-solo",
    description: " Beats Solo Buds announced:",
    brand: "Other",
    src: "/images/photo_2024-05-26_05-44-27.jpg",
    path: "/blog/post/beats-solo"
  },
  {
    id: 15,
    title: "pixel-9-leaked",
    description: "Google Pixel 9 renders leaked!",
    brand: "Google-pixel",
    src: "/images/photo_2024-05-26_05-29-31.jpg",
    path: "/blog/post/pixel-9-leaked"
  },
  {
    id: 16,
    title: "onePlus-nord",
    description: "OnePlus Nord CE 4 launched in India! ",
    brand: "onePlus",
    src: "/images/photo_2024-05-26_05-30-31.jpg",
    path: "/blog/post/onePlus-nord"
  },
  {
    id: 17,
    title: "iPhone-SE",
    description: "iPhone SE 4 details!",
    brand: "Apple",
    src: "/images/photo_2024-05-26_05-33-23.jpg",
    path: "/blog/post/iPhone-SE"
  },
  {
    id: 18,
    title: "Samsung-Galaxy-Tab",
    description: "Samsung-Galaxy-Tab",
    brand: "Samsung",
    src: "/images/photo_2023-07-27_07-39-46.jpg",
    path: "/blog/post/Samsung-Galaxy-Tab"
  },
  {
    id: 19,
    title: "vivo-x100-ultra",
    description: "Vivo X100 Ultra official render!",
    brand: "Other",
    src: "/images/photo_2024-05-26_05-43-47.jpg",
    path: "/blog/post/vivo-x100-ultra"
  },
  {
    id: 20,
    title: "iphone-17-design",
    description: "The iPhone 17 lineup will  feature an updated design !",
    brand: "Apple",
    src: "/images/photo_2024-05-26_05-45-02.jpg",
    path: "/blog/post/iphone-17-design"
  },
  {
    id: 21,
    title: "moto-edge",
    description: "Moto Edge 50 Ultra is official",
    brand: "Motorola",
    src: "/images/photo_2024-05-26_05-39-05.jpg",
    path: "/blog/post/moto-edge"
  },
  {
    id: 22,
    title: "Samsung-S24",
      description: "Samsung Galaxy S24 Ultra launched!",
      brand: "Samsung",
      src: "/images/photo_2023-12-21_05-13-06.jpg",
      path: "/blog/post/Samsung-S24"
  },
  {
    id: 23,
    title: "Samsung-galaxy-S23-ultra",
    description: "The Galaxy S23 Ultra ",
    brand: "Samsung",
    src: "/images/photo_2024-08-04_05-34-51.jpg",
    path: "/blog/post/Samsung-galaxy-S23-ultra"
  },
  {
    id: 24,
      title: "iPhone-16-pro-max",
      description: "iPhone 16 pro max available colors.",
      brand: "Apple",
      src: "/images/photo_2024-08-03_07-23-28.jpg",
      path: "/blog/post/iPhone-16-pro-max"
  },
  {
      id:25,
      title: "motorola-edge",
      description:"Motorola edge 50 Pro is launching on 3rd April 2024!",
      brand: "Motorola",
      src:"/images/photo_2024-05-26_05-39-11.jpg",
      path: "/blog/post/motorola-edge"
  },
  {
      id:26,
      title: "iphone-16",
      description:"Here's everything rumoured for the iPhone 16 Pro Max:",
      brand: "Apple",
      src:"/images/photo_2024-05-26_05-33-52.jpg",
      path: "/blog/post/iphone-16"
  },
  {
      id:27,
      title: "oneplus-ace",
      description:"OnePlus Ace 3V Nord 4 launching in Ghana!",
      brand: "onePlus",
      src:"/images/photo_2024-05-26_05-02-10.jpg",
      path: "/blog/post/oneplus-ace"
  },
  {
      id:28,
      title: "infinix-note-40",
      description:"Infinix Note 40 Pro+ to launch on April 12 in India!",
      brand: "Other",
      src:"/images/photo_2024-05-26_05-37-27.jpg",
      path: "/blog/post/infinix-note-40"
  },
  {
      id:29,
      title: "motorola-edge-ultra",
      description:"Motorola Edge 50 Ultra",
      brand: "Motorola",
      src:"/images/photo_2024-05-26_05-39-05.jpg",
      path: "/blog/post/motorola-edge-ultra"
  },
  {
      id:30,
      title: "Galaxy-A23",
        description:"Galaxy A23",
        brand: "Samsung",
        src:"/images/photo_2023-01-16_14-14-47.jpg",
        path: "/blog/post/Galaxy-A23"
  },
  {
      id:31,
      title: "ipad-pro",
      description:"iPad Pro",
      brand: "Apple",
      src:"/images/photo_2024-05-26_05-46-34.jpg",
      path: "/blog/post/ipad-pro"
  },
  {
      id:32,
      title: "pixel-8a",
      description:"The Pixel 8a is official!",
      brand: "Google-pixel",
      src:"/images/photo_2024-05-26_05-46-59.jpg",
      path: "/blog/post/pixel-8a"
  },
  {
      id:33,
      title: "apple-pencil-pro",
      description:"Apple Pencil Pro",
      brand:"Apple",
      src:"/images/photo_2024-05-26_05-47-24.jpg",
      path: "/blog/post/apple-pencil-pro"
  },
  {
      id:34,
      title: "motorola-razr",
      description:"Motorola RAZR 50 Ultra!",
      brand:"Motorola",
      src:"/images/photo_2024-05-26_05-54-32.jpg",
      path: "/blog/post/motorola-razr"
  },
  {
      id:35,
      title: "sony-xperia-1",
      description:"Sony Xperia 1 VI launched ",
      brand:"Other",
      src:"/images/photo_2024-05-26_05-53-51.jpg",
      path: "/blog/post/sony-xperia-1"
  },
  {
      id:36,
      title: "apple-introduce",
      description:"Apple introduced the Eye Tracking feature ",
      brand:"Apple",
      src:"/images/photo_2024-05-26_05-52-54.jpg",
      path: "/blog/post/apple-introduce"
  },
  {
    id:37,
    title: "Motorola-razr",
    description:"Motorola Razr 50",
    brand:"Motorola",
    src:"/images/photo_2024-05-26_05-54-36.jpg",
    path: "/blog/post/Motorola-razr"
},
{
  id:38,
  title: "motorola-Razr",
  description:"Motorola Razr 50",
  brand:"Motorola",
  src:"/images/photo_2024-05-26_05-54-39.jpg",
  path: "/blog/post/motorola-Razr"
},
{
  id: 39,
  title: "samsung-S24",
    description: "Samsung Galaxy S24 Ultra launched!",
    brand: "Samsung",
    src: "/images/photo_2024-08-04_05-30-14.jpg",
    path: "/blog/post/samsung-S24"
},

{
  id: 40,
  title: "g-pixel-9",
  description: "Google Pixel 9 renders leaked!",
  brand: "Google-pixel",
  src: "/images/photo_2024-05-26_05-29-13.jpg",
  path: "/blog/post/g-pixel-9"
},
{
  id: 41,
  title: "Pixel-9",
  description: "Google Pixel 9 renders leaked!",
  brand: "Google-pixel",
  src: "/images/photo_2024-05-26_05-29-23.jpg",
  path: "/blog/post/Pixel-9"
},
{
  id: 42,
  title: "Oneplus-nord",
  description: "OnePlus Nord CE 4 launched! ",
  brand: "onePlus",
  src: "/images/photo_2024-05-26_05-31-05.jpg",
  path: "/blog/post/Oneplus-nord"
},
]
export default allPost;