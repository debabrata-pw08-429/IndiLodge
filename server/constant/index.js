const data = [
  {
    title: "Luxury Villa in Goa",
    description: "Beautiful villa with a private pool and beach access.",
    location: "Goa, India",
    price: 250,
    bedrooms: 4,
    occupancy: 8,
    availableDates: [
      { start: "2023-09-01", end: "2023-09-15" },
      { start: "2023-10-01", end: "2023-10-15" },
    ],
    imageUrl:
      "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=",
  },
  {
    title: "Cozy Apartment in Mumbai",
    description: "Modern apartment with stunning city views.",
    location: "Mumbai, India",
    price: 150,
    bedrooms: 2,
    occupancy: 4,
    availableDates: [
      { start: "2023-08-15", end: "2023-08-30" },
      { start: "2023-09-15", end: "2023-09-30" },
    ],
    imageUrl:
      "https://a0.muscache.com/im/pictures/miso/Hosting-598289084005563595/original/5037ecff-e315-4464-9c85-64503ae5b6ea.jpeg?im_w=720",
  },
  {
    title: "Riverside Cottage in Rishikesh",
    description: "Charming cottage by the Ganges river.",
    location: "Rishikesh, India",
    price: 100,
    bedrooms: 1,
    occupancy: 2,
    availableDates: [
      { start: "2023-08-01", end: "2023-08-10" },
      { start: "2023-09-01", end: "2023-09-10" },
    ],
    imageUrl:
      "https://a0.muscache.com/im/pictures/miso/Hosting-660462428027837296/original/518619bf-c3e0-47ed-a05f-1f549250ad15.jpeg?im_w=720",
  },
  {
    title: "Hillside Bungalow in Ooty",
    description: "Cosy bungalow nestled in the Nilgiri hills.",
    location: "Ooty, India",
    price: 120,
    bedrooms: 3,
    occupancy: 6,
    availableDates: [
      { start: "2023-09-15", end: "2023-09-30" },
      { start: "2023-10-15", end: "2023-10-30" },
    ],
    imageUrl:
      "https://a0.muscache.com/im/pictures/miso/Hosting-785205807366158084/original/c674993f-9a9b-467c-a366-574d086f1d92.jpeg?im_w=720",
  },
  {
    title: "Beachfront Apartment in Puducherry",
    description: "Stylish apartment with stunning ocean views.",
    location: "Puducherry, India",
    price: 180,
    bedrooms: 2,
    occupancy: 4,
    availableDates: [
      { start: "2023-08-20", end: "2023-08-31" },
      { start: "2023-09-20", end: "2023-09-30" },
    ],
    imageUrl:
      "https://a0.muscache.com/im/pictures/miso/Hosting-654859698910402674/original/bae38c2b-19e1-45b6-8a2f-f335bbb7a133.jpeg?im_w=720",
  },
  {
    title: "Tea Estate Bungalow in Darjeeling",
    description: "Vintage bungalow amidst lush tea gardens.",
    location: "Darjeeling, India",
    price: 110,
    bedrooms: 2,
    occupancy: 4,
    availableDates: [
      { start: "2023-10-01", end: "2023-10-10" },
      { start: "2023-11-01", end: "2023-11-10" },
    ],
    imageUrl:
      "https://cf.bstatic.com/xdata/images/hotel/square600/187853972.webp?k=dd753431cf4b638642614dc060512d832d24f3249eef30b9a5f18601d2ac5635&o=",
  },
  {
    title: "Mountain View Chalet in Manali",
    description: "Spectacular chalet with panoramic mountain views.",
    location: "Manali, India",
    price: 200,
    bedrooms: 3,
    occupancy: 6,
    availableDates: [
      { start: "2023-09-10", end: "2023-09-20" },
      { start: "2023-10-10", end: "2023-10-20" },
    ],
    imageUrl:
      "https://a0.muscache.com/im/pictures/miso/Hosting-52847292/original/3fd04975-44ec-400d-b365-f9432b333f00.jpeg?im_w=720",
  },
  {
    title: "Heritage Homestay in Jaipur",
    description: "Authentic Rajasthani homestay in the Pink City.",
    location: "Jaipur, India",
    price: 90,
    bedrooms: 2,
    occupancy: 4,
    availableDates: [
      { start: "2023-09-05", end: "2023-09-15" },
      { start: "2023-10-05", end: "2023-10-15" },
    ],
    imageUrl:
      "https://a0.muscache.com/im/pictures/miso/Hosting-52328293/original/3c56f767-28d9-4844-a9cc-467e2b3aa606.jpeg?im_w=720",
  },
  {
    title: "Lake View Villa in Udaipur",
    description: "Exquisite villa overlooking the serene Lake Pichola.",
    location: "Udaipur, India",
    price: 280,
    bedrooms: 5,
    occupancy: 10,
    availableDates: [
      { start: "2023-09-20", end: "2023-09-30" },
      { start: "2023-10-20", end: "2023-10-30" },
    ],
    imageUrl:
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-798957331534644572/original/fa0b6983-1231-4d73-a3f8-6065c8580369.jpeg?im_w=720",
  },
  {
    title: "Secluded Cottage in Coorg",
    description: "Peaceful cottage surrounded by coffee plantations.",
    location: "Coorg, India",
    price: 140,
    bedrooms: 2,
    occupancy: 4,
    availableDates: [
      { start: "2023-08-25", end: "2023-09-05" },
      { start: "2023-09-25", end: "2023-10-05" },
    ],
    imageUrl:
      "https://a0.muscache.com/im/pictures/7d44e74a-0080-4e5b-b973-5e7b2e1b7a8b.jpg?im_w=720",
  },
];

module.exports = { data };
