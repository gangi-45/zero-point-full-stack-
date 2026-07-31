import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { BUSINESS_HOURS, CONTACT, SITE, waLink } from "@/lib/constants";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/zeropointbyx",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zeropointbyx",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@zeropointbyx",
    icon: Youtube,
  },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Videos", href: "/#videos" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/60 pt-14 pb-24 backdrop-blur-xl md:pb-14">
      <Container>
        <div id="contact" className="grid gap-10 scroll-mt-24 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-black text-white shadow-glow">
                ZP
              </span>
              <div className="leading-tight">
                <p className="text-base font-bold text-ink">Zero Point</p>
                <p className="text-[11px] font-medium text-ink-muted">
                  Buy · Sell · Exchange
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {SITE.brand} — Mymensingh এর নির্ভরযোগ্য ফোন, ল্যাপটপ ও এক্সেসরিজ
              কেনাবেচার ঠিকানা। সব পণ্য টেস্টেড ও ওয়ারেন্টিসহ।
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} — ${SITE.brand}`}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/70 text-ink-muted transition-all hover:border-brand-500 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-ink">
              Quick Links
            </h2>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-ink-muted transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-ink">
              Contact
            </h2>
            <ul className="space-y-3.5 text-sm text-ink-muted">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                <span>{CONTACT.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-3 font-semibold text-ink transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={waLink("আসসালামু আলাইকুম, আমি Zero Point এ পণ্য সম্পর্কে জানতে চাই।")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-semibold text-ink transition-colors hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                  WhatsApp: {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 font-semibold text-ink transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                {BUSINESS_HOURS.days}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          <div className="glass overflow-hidden rounded-3xl">
            <iframe
              title={`${SITE.brand} location on Google Maps — Mymensingh`}
              src={CONTACT.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-56 w-full border-0"
            />
          </div>
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-ink">কীভাবে আমাদের খুঁজে পাবেন?</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              আমরা Mymensingh শহরের Chorpara Road এ অবস্থিত। শপে এসে সরাসরি
              পণ্য দেখে কিনতে পারবেন, আবার WhatsApp এ অর্ডার করলে হাতে হাতে
              ডেলিভারিও আছে।
            </p>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 focus-visible:ring-offset-2"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200/70 pt-6 text-center text-xs text-ink-muted">
          <p>
            © {new Date().getFullYear()} {SITE.brand}. All rights reserved. ·
            Mymensingh, Bangladesh
          </p>
        </div>
      </Container>
    </footer>
  );
}
