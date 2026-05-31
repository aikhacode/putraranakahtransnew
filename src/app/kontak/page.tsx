import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin } from "lucide-react";

function IgIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
function FbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1877f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Kontak – Hubungi CV Putra Ranakah Trans Madiun",
  description: "Hubungi CV Putra Ranakah Trans via telepon, WhatsApp, atau kunjungi kantor kami di Jl. Pucang Sari No.15, Madiun. Siap melayani 24 jam.",
  alternates: { canonical: "https://putraranakahtrans.com/kontak" },
};

export default function KontakPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a6e 100%)", paddingTop: "8rem", paddingBottom: "5rem", textAlign: "center" }}>
        <div className="container">
          <div className="section-label">Kontak</div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
            Hubungi <span className="gold-text">Putra Ranakah Trans</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: "520px", margin: "0 auto" }}>
            Tim kami siap melayani Anda 24 jam sehari, 7 hari seminggu.
          </p>
        </div>
      </section>

      <section className="bg-gray-light">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: "4rem" }}>
            <div style={{ background: "#fff", borderRadius: "1.5rem", padding: "2rem", boxShadow: "0 4px 24px rgba(10,22,40,0.08)", border: "1px solid var(--gray-200)", textAlign: "center" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "linear-gradient(135deg, var(--navy), var(--navy-light))", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                <Phone size={26} color="#f0c84a" />
              </div>
              <h2 style={{ fontWeight: 800, color: "var(--navy)", marginBottom: "0.5rem" }}>Telepon</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "1rem" }}>Hubungi langsung untuk respon cepat</p>
              <a href={siteData.phoneHref} className="btn-primary" id="contact-phone-btn" style={{ justifyContent: "center", width: "100%" }}>
                <Phone size={16} /> {siteData.phone}
              </a>
            </div>
            <div style={{ background: "#fff", borderRadius: "1.5rem", padding: "2rem", boxShadow: "0 4px 24px rgba(10,22,40,0.08)", border: "2px solid #25d366", textAlign: "center" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#25d366", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                <MessageCircle size={26} color="#fff" />
              </div>
              <h2 style={{ fontWeight: 800, color: "var(--navy)", marginBottom: "0.5rem" }}>WhatsApp</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "1rem" }}>Chat langsung, respons paling cepat</p>
              <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-wa" id="contact-wa-btn" style={{ justifyContent: "center", width: "100%", display: "flex" }}>
                <MessageCircle size={16} /> Chat WhatsApp
              </a>
            </div>
            <div style={{ background: "#fff", borderRadius: "1.5rem", padding: "2rem", boxShadow: "0 4px 24px rgba(10,22,40,0.08)", border: "1px solid var(--gray-200)", textAlign: "center" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#ea4335", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                <MapPin size={26} color="#fff" />
              </div>
              <h2 style={{ fontWeight: 800, color: "var(--navy)", marginBottom: "0.5rem" }}>Alamat</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "1rem" }}>{siteData.address}</p>
              <a href={siteData.mapLink} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", background: "var(--navy)", color: "#fff", fontWeight: 700, padding: "0.65rem 1.25rem", borderRadius: "9999px", textDecoration: "none", fontSize: "0.875rem" }}
                id="contact-map-btn">
                <MapPin size={16} /> Buka Google Maps
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div style={{ borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 8px 40px rgba(10,22,40,0.13)", marginBottom: "3rem" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9!2d111.523!3d-7.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79a9f2bb24953b%3A0x65e7cf4f0b9c8a7e!2sJl.%20Pucang%20Sari%2C%20Manisrejo%2C%20Kec.%20Taman%2C%20Kota%20Madiun!5e0!3m2!1sid!2sid!4v1700000000000"
              width="100%" height="420" style={{ border: 0, display: "block" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi CV Putra Ranakah Trans Madiun"
            />
          </div>

          <div className="grid-2">
            <div style={{ background: "#fff", borderRadius: "1.25rem", padding: "2rem", boxShadow: "0 4px 20px rgba(10,22,40,0.07)", border: "1px solid var(--gray-200)" }}>
              <h3 style={{ fontWeight: 800, color: "var(--navy)", marginBottom: "1.25rem" }}>Media Sosial</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <a href={siteData.socials.instagram} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", color: "var(--text-dark)", fontWeight: 600 }}>
                  <IgIcon /> @putraranakah_trans
                </a>
                <a href={siteData.socials.facebook} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", color: "var(--text-dark)", fontWeight: 600 }}>
                  <FbIcon /> putraranakahtrans
                </a>
                <a href={siteData.socials.tiktok} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", color: "var(--text-dark)", fontWeight: 600 }}>
                  <span style={{ fontSize: "1.25rem" }}>🎵</span> @putraranakah
                </a>
              </div>
            </div>
            <div style={{ background: "var(--navy)", borderRadius: "1.25rem", padding: "2rem" }}>
              <h3 style={{ fontWeight: 800, color: "#fff", marginBottom: "1.25rem" }}>Jam Operasional</h3>
              {[
                { day: "Senin – Jumat", hours: "06:00 – 22:00" },
                { day: "Sabtu – Minggu", hours: "06:00 – 22:00" },
                { day: "Booking / Emergency", hours: "24 Jam" },
              ].map(item => (
                <div key={item.day} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>{item.day}</span>
                  <span style={{ color: "#f0c84a", fontWeight: 700, fontSize: "0.9rem" }}>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
