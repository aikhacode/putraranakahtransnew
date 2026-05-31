import Link from "next/link";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { siteData } from "@/lib/siteData";

function IgIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "rgba(255,255,255,0.75)", paddingTop: "4rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem", paddingBottom: "3rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              {/* <div style={{
                width: "42px", height: "42px", borderRadius: "50%",
                background: "linear-gradient(135deg, #c9a227, #f0c84a)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", fontWeight: 900, color: "#0a1628", flexShrink: 0
              }}>✦</div> */}
              <div>
                <div style={{ color: "#f0c84a", fontWeight: 800, fontSize: "1rem", lineHeight: 1.1 }}>PUTRA RANAKAH</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", letterSpacing: "0.1em" }}>TRANS</div>
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Jasa rental mobil terpercaya di Madiun dan sekitarnya. Armada lengkap, driver profesional, harga bersahabat.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a href={siteData.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="social-link"
                style={{ color: "rgba(255,255,255,0.6)" }}>
                <IgIcon />
              </a>
              <a href={siteData.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="social-link"
                style={{ color: "rgba(255,255,255,0.6)" }}>
                <FbIcon />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem", fontSize: "0.95rem", letterSpacing: "0.05em" }}>
              Navigasi
            </h3>
            {[
              { href: "/", label: "Beranda" },
              { href: "/armada", label: "Armada Kami" },
              { href: "/paket-wisata", label: "Paket Wisata" },
              { href: "/tentang-kami", label: "Tentang Kami" },
              { href: "/kontak", label: "Hubungi Kami" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="footer-link" style={{
                display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none",
                fontSize: "0.88rem", marginBottom: "0.5rem",
              }}
              >{l.label}</Link>
            ))}
          </div>

          {/* Layanan Kota */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem", fontSize: "0.95rem", letterSpacing: "0.05em" }}>
              Layanan Area
            </h3>
            {["madiun", "ponorogo", "magetan", "ngawi", "caruban", "nganjuk"].map((k) => (
              <Link key={k} href={`/rental-mobil/${k}`} className="footer-link" style={{
                display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none",
                fontSize: "0.88rem", marginBottom: "0.5rem",
                textTransform: "capitalize"
              }}
              >Rental Mobil {k.charAt(0).toUpperCase() + k.slice(1)}</Link>
            ))}
          </div>

          {/* Kontak */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem", fontSize: "0.95rem", letterSpacing: "0.05em" }}>
              Kontak
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <a href={siteData.phoneHref} style={{ display: "flex", gap: "0.6rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.88rem", alignItems: "flex-start" }}>
                <Phone size={15} style={{ marginTop: "2px", color: "#c9a227", flexShrink: 0 }} />
                {siteData.phone}
              </a>
              <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", gap: "0.6rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.88rem", alignItems: "flex-start" }}>
                <MessageCircle size={15} style={{ marginTop: "2px", color: "#25d366", flexShrink: 0 }} />
                WhatsApp Kami
              </a>
              <a href={siteData.mapLink} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", gap: "0.6rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.88rem", alignItems: "flex-start" }}>
                <MapPin size={15} style={{ marginTop: "2px", color: "#c9a227", flexShrink: 0 }} />
                {siteData.address}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "1.25rem 0",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "0.75rem"
        }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} CV. Putra Ranakah Adhikari. Hak cipta dilindungi.
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)" }}>
            Rental Mobil Madiun Terpercaya
          </p>
        </div>
      </div>
    </footer>
  );
}
