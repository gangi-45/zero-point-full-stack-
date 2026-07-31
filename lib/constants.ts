export const SITE = {
  name: "Zero Point",
  brand: "Zero Point Buy Sell Exchange",
  domain: "zeropointbyx.com",
  tagline: "বিক্রি, কিনুন, এক্সচেঞ্জ করুন",
  description:
    "Zero Point Buy Sell Exchange — Mymensingh এর নির্ভরযোগ্য ফোন, ল্যাপটপ ও এক্সেসরিজ বাই-সেল-এক্সচেঞ্জ শপ। সেরা দামে কিনুন, নিরাপদে বিক্রি করুন।",
  email: "support@zeropointbyx.com",
} as const;

export const CONTACT = {
  phone: process.env.SHOP_PHONE ?? "+8801781685200",
  phoneDisplay: process.env.SHOP_PHONE
    ? process.env.SHOP_PHONE.replace("+880", "0")
    : "01781-685200",
  whatsapp: process.env.WHATSAPP_NUMBER ?? "8801781685200",
  address: "Chorpara Road, Mymensingh Sadar, Mymensingh 2200, Bangladesh",
  addressShort: "Chorpara Road, Mymensingh",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Chorpara+Road+Mymensingh",
  mapsEmbed:
    "https://www.google.com/maps?q=Chorpara+Road+Mymensingh&output=embed",
} as const;

export const BUSINESS_HOURS = {
  open: "10:00",
  close: "21:00",
  days: "প্রতিদিন সকাল ১০টা থেকে রাত ৯টা",
} as const;

export function waLink(text: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const DEFAULT_WA_TEXT =
  "আসসালামু আলাইকুম, আমি Zero Point থেকে একটি পণ্য সম্পর্কে জানতে চাই।";
