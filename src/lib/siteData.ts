export const siteData = {
  name: "CV. Putra Ranakah Trans",
  shortName: "Putra Ranakah Trans",
  tagline: "Perjalanan Nyaman, Harga Bersahabat",
  description:
    "Jasa rental mobil dan sewa Hiace Madiun terbaik dari CV Putra Ranakah. Menyediakan armada Avanza, Innova Reborn, Hiace Premio, & Bus Pariwisata dengan tarif murah & driver profesional.",
  phone: "0822 3493 4384",
  phoneHref: "tel:+6282234934384",
  whatsapp:
    "https://wa.me/6282234934384?text=Hallo%2C%20bisa%20minta%20info%20mengenai%20tarif%20rental%20mobil%20di%20CV%20Putra%20Ranakah%20Adhikari%3F",
  address: "Jl. Pucang Sari No.15, Manisrejo, Kec. Taman, Kota Madiun, Jawa Timur 63138",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.853!2d111.5231!3d-7.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zCV+Putra+Ranakah+Adhikari!5e0!3m2!1sen!2sid!4v1000000000000",
  mapLink: "https://goo.gl/maps/MYfNKLpgh5o4CVHMA",
  socials: {
    instagram: "https://instagram.com/putraranakah_trans",
    tiktok: "https://tiktok.com/@putraranakah",
    facebook: "https://facebook.com/putraranakahtrans",
  },
  keywords:
    "rental mobil madiun, sewa hiace madiun, rental hiace premio madiun, sewa innova madiun, rental mobil ponorogo, sewa mobil magetan, rental bus pariwisata madiun",
};

export const fleetData = [
  {
    id: "innova-reborn",
    name: "Toyota Innova Reborn",
    slug: "innova-reborn",
    seats: 7,
    ac: true,
    image: "/images/reborn.png",
    price: "Rp 700.000",
    pricePeriod: "/ hari",
    description:
      "Sedan MPV premium keluarga, nyaman untuk perjalanan jauh. Dilengkapi AC double blower & audio sistem modern.",
    features: ["7 Kursi", "AC Double Blower", "Bagasi Luas", "GPS Tracker"],
    waMessage:
      "Halo Putra Ranakah Trans%2C saya ingin menyewa Toyota Innova Reborn. Mohon info ketersediaan dan tarif.",
  },
  {
    id: "avanza",
    name: "Toyota Avanza",
    slug: "avanza",
    seats: 7,
    ac: true,
    image: "/images/avanza.png",
    price: "Rp 450.000",
    pricePeriod: "/ hari",
    description:
      "Mobil keluarga serbaguna yang hemat dan nyaman. Pilihan terbaik untuk perjalanan harian maupun wisata.",
    features: ["7 Kursi", "AC Dingin", "Ekonomis", "Driver Profesional"],
    waMessage:
      "Halo Putra Ranakah Trans%2C saya ingin menyewa Toyota Avanza. Mohon info ketersediaan dan tarif.",
  },
  {
    id: "hiace-premio",
    name: "Toyota Hiace Premio",
    slug: "hiace-premio",
    seats: 15,
    ac: true,
    image: "/images/premio.png",
    price: "Rp 1.300.000",
    pricePeriod: "/ hari",
    description:
      "Solusi ideal untuk perjalanan grup besar. Kapasitas 15 penumpang dengan kenyamanan premium dan ruang bagasi ekstra.",
    features: ["15 Kursi", "AC Powerful", "High Roof", "Bagasi Ekstra"],
    waMessage:
      "Halo Putra Ranakah Trans%2C saya ingin menyewa Toyota Hiace Premio. Mohon info ketersediaan dan tarif.",
  },
  {
    id: "hiace-premio-luxury",
    name: "Toyota Hiace Premio Luxury",
    slug: "hiace-premio-luxury",
    seats: 9,
    ac: true,
    image: "/images/premio.png",
    price: "Rp 1.700.000",
    pricePeriod: "/ hari",
    description:
      "Varian premium mewah dari Hiace Premio dengan Captain Seat super nyaman. Sempurna untuk perjalanan VIP, tamu dinas, maupun liburan keluarga berkelas.",
    features: ["9 Kursi Captain", "AC Powerful", "Kabin Mewah", "Audio Premium"],
    waMessage:
      "Halo Putra Ranakah Trans%2C saya ingin menyewa Toyota Hiace Premio Luxury. Mohon info ketersediaan dan tarif.",
  },
  {
    id: "bus-pariwisata",
    name: "Bus Pariwisata",
    slug: "bus-pariwisata",
    seats: 40,
    ac: true,
    image: "/images/bus-wisata.png",
    price: "Hubungi Kami",
    pricePeriod: "",
    description:
      "Bus full-AC kapasitas besar, ideal untuk rombongan wisata, peziarah, atau perjalanan korporat.",
    features: ["40 Kursi", "Full AC", "Sound System", "Toilet Tersedia"],
    waMessage:
      "Halo Putra Ranakah Trans%2C saya ingin menyewa Bus Pariwisata. Mohon info ketersediaan dan tarif.",
  },
];

export const kotaData: Record<
  string,
  { name: string; description: string; keywords: string }
> = {
  madiun: {
    name: "Madiun",
    description:
      "Layanan rental mobil Madiun terpercaya dari CV Putra Ranakah. Armada lengkap Avanza, Innova, Hiace Premio & Bus.",
    keywords: "rental mobil madiun, sewa hiace madiun, rental innova madiun",
  },
  ponorogo: {
    name: "Ponorogo",
    description:
      "Sewa mobil Ponorogo harga murah dengan driver berpengalaman. Tersedia Avanza, Innova, Hiace Premio.",
    keywords: "rental mobil ponorogo, sewa hiace ponorogo, rental innova ponorogo",
  },
  magetan: {
    name: "Magetan",
    description:
      "Rental mobil Magetan untuk wisata Telaga Sarangan dan sekitarnya. Armada lengkap, tarif bersahabat.",
    keywords: "rental mobil magetan, sewa hiace magetan, rental innova magetan",
  },
  ngawi: {
    name: "Ngawi",
    description:
      "Jasa sewa mobil Ngawi terpercaya dengan driver profesional. Pilihan armada lengkap untuk semua kebutuhan.",
    keywords: "rental mobil ngawi, sewa hiace ngawi, rental innova ngawi",
  },
  caruban: {
    name: "Caruban",
    description:
      "Rental mobil Caruban dan sekitar Kabupaten Madiun. Layanan antar jemput tersedia 24 jam.",
    keywords: "rental mobil caruban, sewa mobil madiun, rental hiace caruban",
  },
  nganjuk: {
    name: "Nganjuk",
    description:
      "Layanan sewa mobil Nganjuk lepas kunci atau pakai sopir. Armada nyaman dan terawat untuk perjalanan Anda.",
    keywords: "rental mobil nganjuk, sewa hiace nganjuk, rental innova nganjuk",
  },
};

export const tourPackages = [
  {
    title: "Open Trip Bromo",
    image: "/images/bromo.png",
    desc: "Saksikan keindahan sunrise terbaik di Penanjakan Bromo, jelajahi Kawah Bromo, Pasir Berbisik, dan Bukit Teletubbies dalam satu perjalanan seru.",
    features: ["Sunrise Point", "Jeep 4x4", "Dokumentasi", "Makan 1x"],
    price: "Mulai Rp 350.000",
    slug: "trip-bromo"
  },
  {
    title: "Open Trip Dieng",
    image: "/images/dieng.png",
    desc: "Rasakan sensasi negeri di atas awan. Kunjungi kompleks Candi Arjuna, Kawah Sikidang, Telaga Warna, dan nikmati Golden Sunrise di Bukit Sikunir.",
    features: ["Sikunir Sunrise", "Candi Arjuna", "Kawah Sikidang", "Homestay"],
    price: "Mulai Rp 450.000",
    slug: "trip-dieng"
  },
  {
    title: "Wisata Bali",
    image: "/images/bali.png",
    desc: "Liburan impian di Pulau Dewata. Eksplorasi pantai eksotis, nikmati magisnya tari Kecak di Uluwatu, dan jelajahi pesona budaya Ubud yang memukau.",
    features: ["Pantai Pandawa", "Tari Kecak", "Bedugul", "Hotel Bintang 3"],
    price: "Mulai Rp 1.500.000",
    slug: "wisata-bali"
  },
  {
    title: "Tour Custom",
    image: "/images/custom-tour.png",
    desc: "Punya destinasi impian sendiri? Rencanakan perjalanan suka-suka Anda bersama grup atau keluarga. Armada nyaman, jadwal fleksibel, harga disesuaikan.",
    features: ["Bebas Tujuan", "Private Tour", "Jadwal Fleksibel", "Konsultasi Gratis"],
    price: "Hubungi Kami",
    slug: "tour-custom"
  }
];

export const testimonials = [
  {
    name: "Budi Santoso",
    city: "Madiun",
    rating: 5,
    text: "Pelayanan sangat memuaskan! Mobil bersih, driver ramah dan tepat waktu. Akan pakai jasa ini lagi untuk liburan keluarga.",
  },
  {
    name: "Siti Rahayu",
    city: "Ponorogo",
    rating: 5,
    text: "Sewa Hiace untuk rombongan ke Bromo, sangat nyaman! Harga bersaing dan tidak ada biaya tersembunyi. Recommended!",
  },
  {
    name: "Ahmad Fauzi",
    city: "Magetan",
    rating: 5,
    text: "Bus pariwisata sangat bersih dan AC-nya dingin. Sopirnya berpengalaman dan tahu rute wisata dengan baik.",
  },
];
