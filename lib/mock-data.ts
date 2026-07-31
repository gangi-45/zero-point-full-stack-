import type { Product } from "@/types/product";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "p01",
    title: "iPhone 13 128GB — Midnight Black",
    slug: "iphone-13-128gb-midnight-black",
    price: 76500,
    condition: "used",
    category: "phone",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80&auto=format&fit=crop",
    description:
      "ভালো কন্ডিশনে iPhone 13 (128GB)। ব্যাটারি হেলথ ৮৯%। Face ID, ক্যামেরা ও স্পিকার সব পারফেক্ট। ৭ দিনের ওয়ারেন্টিসহ হাতে হাতে ডেলিভারি।",
    isFeatured: true,
    inStock: true,
  },
  {
    id: "p02",
    title: "Samsung Galaxy S23 Ultra 256GB",
    slug: "samsung-galaxy-s23-ultra-256gb",
    price: 132000,
    condition: "new",
    category: "phone",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&q=80&auto=format&fit=crop",
    description:
      "ব্র্যান্ড নিউ, সিলড প্যাকেট Galaxy S23 Ultra। 200MP ক্যামেরা, S Pen, 5000mAh ব্যাটারি। অফিসিয়াল ওয়ারেন্টিসহ।",
    isFeatured: true,
    inStock: true,
  },
  {
    id: "p03",
    title: "Xiaomi Redmi Note 13 Pro 8/256GB",
    slug: "xiaomi-redmi-note-13-pro-8-256gb",
    price: 31500,
    condition: "used",
    category: "phone",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80&auto=format&fit=crop",
    description:
      "Redmi Note 13 Pro — 200MP ক্যামেরা, 67W ফাস্ট চার্জিং। ইউজড কন্ডিশন, সব ফাংশন টেস্টেড। সিম ও মেমোরি কার্ড স্লট ঠিক আছে।",
    isFeatured: true,
    inStock: true,
  },
  {
    id: "p04",
    title: 'Apple MacBook Air M2 13" 8/256GB',
    slug: "apple-macbook-air-m2-13-8-256gb",
    price: 148000,
    condition: "used",
    category: "laptop",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80&auto=format&fit=crop",
    description:
      "MacBook Air M2 (2022)। ব্যাটারি সাইকেল ৯৮, হালকা স্ক্র্যাচ আছে। অ্যাডাপ্টারসহ ফুল বক্স। Mymensingh এ হাতে হাতে দেখে কেনার সুযোগ।",
    isFeatured: true,
    inStock: true,
  },
  {
    id: "p05",
    title: "Dell Inspiron 15 (i5 11th Gen) 16GB/512GB",
    slug: "dell-inspiron-15-i5-11th-gen",
    price: 52000,
    condition: "new",
    category: "laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80&auto=format&fit=crop",
    description:
      "নতুন Dell Inspiron 15 — Core i5 11th Gen, 16GB RAM, 512GB NVMe SSD। অফিস ও স্টাডির জন্য সেরা। ১ বছরের ওয়ারেন্টি।",
    isFeatured: false,
    inStock: true,
  },
  {
    id: "p06",
    title: "Sony WH-1000XM4 Wireless Headphones",
    slug: "sony-wh-1000xm4-wireless-headphones",
    price: 28500,
    condition: "new",
    category: "accessory",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80&auto=format&fit=crop",
    description:
      "Sony WH-1000XM4 — ইন্ডাস্ট্রি লিডিং নয়েজ ক্যান্সেলিং, ৩০ ঘণ্টা ব্যাটারি ব্যাকআপ। নতুন, সিলড প্যাকেট।",
    isFeatured: true,
    inStock: true,
  },
  {
    id: "p07",
    title: "Anker 20000mAh Power Bank 22.5W",
    slug: "anker-20000mah-power-bank-22-5w",
    price: 3200,
    condition: "new",
    category: "accessory",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80&auto=format&fit=crop",
    description:
      "Anker 20000mAh পাওয়ার ব্যাংক — 22.5W PD ফাস্ট চার্জিং, দুই ফোন একসাথে চার্জ করা যায়। ৬ মাসের ওয়ারেন্টি।",
    isFeatured: false,
    inStock: true,
  },
  {
    id: "p08",
    title: "Apple AirPods Pro 2 (USB-C)",
    slug: "apple-airpods-pro-2-usb-c",
    price: 24500,
    condition: "used",
    category: "accessory",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80&auto=format&fit=crop",
    description:
      "AirPods Pro 2 (USB-C)। অরিজিনাল, ANC ও ট্রান্সপারেন্সি মোড পরীক্ষিত। কানপিস নতুন করে দেওয়া হয়েছে।",
    isFeatured: false,
    inStock: false,
  },
];

export async function getProducts(): Promise<Product[]> {
  return MOCK_PRODUCTS;
}
