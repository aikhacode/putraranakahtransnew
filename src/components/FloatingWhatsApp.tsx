"use client";
import { siteData } from "@/lib/siteData";

export default function FloatingWhatsApp() {
  return (
    <a
      id="floating-wa"
      href={siteData.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="float-wa"
      aria-label="Chat WhatsApp"
      title="Hubungi via WhatsApp"
    >
      {/* WhatsApp SVG icon */}
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.487.652 4.82 1.79 6.84L2 30l7.36-1.77A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#fff"/>
        <path d="M23.5 20.18c-.32.9-1.6 1.64-2.56 1.86-.68.15-1.57.27-4.56-1.04-3.82-1.67-6.28-5.56-6.47-5.82-.18-.26-1.52-2.02-1.52-3.86 0-1.84.96-2.74 1.3-3.12.34-.38.74-.48 1-.48.24 0 .48.002.7.014.22.012.52-.084.8.62.3.72 1.02 2.5 1.1 2.68.08.18.14.4.02.64-.12.24-.18.4-.36.6-.18.2-.38.44-.54.6-.18.18-.36.38-.16.74.2.36.9 1.48 1.94 2.4 1.34 1.18 2.46 1.54 2.82 1.72.36.18.58.16.8-.1.22-.26.9-1.04 1.14-1.4.24-.36.48-.3.8-.18.32.12 2.04.96 2.4 1.14.36.18.6.26.68.4.08.14.08.82-.24 1.72z" fill="#25d366"/>
      </svg>
    </a>
  );
}
