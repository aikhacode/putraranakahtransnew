import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, MapPin } from "lucide-react";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Paket Wisata Madiun – Bromo, Dieng & Open Trip",
  description: "Paket wisata dan open trip dari Madiun: Bromo, Dieng, Bali, dan destinasi lainnya. Harga terjangkau, armada nyaman, guide berpengalaman.",
  keywords: "paket wisata madiun, open trip bromo madiun, wisata hiace madiun, sewa bus wisata madiun",
  alternates: { canonical: "https://putraranakahtrans.com/paket-wisata" },
};

const packages = [
  {
    id: "bromo",
    name: "Open Trip Bromo",
    duration: "2 Hari 1 Malam",
    price: "Mulai Rp 350.000",
    priceNote: "/ orang",
    image: "/images/bromo.png",
    highlights: ["Sunrise Penanjakan", "Kawah Bromo", "Pasir Berbisik", "Sea of Sand"],
    desc: "Nikmati keindahan matahari terbit di Bromo yang memukau. Paket include transportasi, guide, dan akomodasi.",
    waMsg: "Halo%20Putra%20Ranakah%20Trans%2C%20saya%20tertarik%20dengan%20Open%20Trip%20Bromo.%20Mohon%20info%20jadwal%20dan%20harga.",
  },
  {
    id: "dieng",
    name: "Wisata Dieng Plateau",
    duration: "2 Hari 1 Malam",
    price: "Mulai Rp 400.000",
    priceNote: "/ orang",
    image: "/images/dieng.png",
    highlights: ["Telaga Warna", "Kawah Sikidang", "Sunrise Sikunir", "Candi Arjuna"],
    desc: "Jelajahi keajaiban Dataran Tinggi Dieng, dari kawah belerang hingga kebun kentang yang memanjakan mata.",
    waMsg: "Halo%20Putra%20Ranakah%20Trans%2C%20saya%20tertarik%20dengan%20Wisata%20Dieng.%20Mohon%20info%20jadwal%20dan%20harga.",
  },
  {
    id: "bali",
    name: "Wisata Bali",
    duration: "4 Hari 3 Malam",
    price: "Mulai Rp 1.500.000",
    priceNote: "/ orang",
    image: "/images/bali.png",
    highlights: ["Tanah Lot", "Kuta Beach", "Ubud", "GWK Cultural Park"],
    desc: "Paket wisata Bali lengkap dari Madiun. Transportasi PP, hotel, dan guide wisata profesional.",
    waMsg: "Halo%20Putra%20Ranakah%20Trans%2C%20saya%20tertarik%20dengan%20Wisata%20Bali.%20Mohon%20info%20paket%20dan%20harga.",
  },
  {
    id: "custom",
    name: "Tour Kustom",
    duration: "Fleksibel",
    price: "Sesuai Kebutuhan",
    priceNote: "",
    image: "/images/custom-tour.png",
    highlights: ["Tujuan bebas", "Durasi fleksibel", "Armada pilihan", "Harga negotiable"],
    desc: "Rancang perjalanan impian Anda sendiri! Kami siap membantu menyusun itinerary terbaik sesuai budget dan waktu Anda.",
    waMsg: "Halo%20Putra%20Ranakah%20Trans%2C%20saya%20ingin%20membuat%20paket%20wisata%20kustom.%20Mohon%20bantuan%20info.",
  },
];

export default function PaketWisataPage() {
  return (
    <>
      {/* Header */}
      <section style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a3a6e 100%)",
        paddingTop: "8rem", paddingBottom: "5rem", textAlign: "center"
      }}>
        <div className="container">
          <div className="section-label">Paket Wisata</div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
            <span className="gold-text">Paket Wisata</span> dari Madiun
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", maxWidth: "560px", margin: "0 auto" }}>
            Jelajahi destinasi wisata terbaik Indonesia bersama CV Putra Ranakah Trans. Armada nyaman, guide berpengalaman, harga terjangkau.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section>
        <div className="container">
          <div className="grid-2">
            {packages.map((pkg) => (
              <div key={pkg.id} style={{
                background: "#fff", borderRadius: "1.5rem", overflow: "hidden",
                boxShadow: "0 6px 32px rgba(10,22,40,0.09)", border: "1px solid var(--gray-200)",
                display: "flex", flexDirection: "column"
              }}>
                {/* Image Banner */}
                <div style={{
                  height: "220px",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <Image 
                    src={pkg.image} 
                    alt={pkg.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw" 
                    style={{ objectFit: "cover" }} 
                  />
                  <div style={{
                    position: "absolute", top: "1rem", right: "1rem",
                    background: "rgba(201,162,39,0.9)", color: "var(--navy)",
                    fontSize: "0.72rem", fontWeight: 800, padding: "0.25rem 0.75rem",
                    borderRadius: "9999px", zIndex: 1
                  }}>{pkg.duration}</div>
                </div>

                <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h2 style={{ fontWeight: 900, color: "var(--navy)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>{pkg.name}</h2>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{pkg.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem", flex: 1 }}>
                    {pkg.highlights.map(h => (
                      <span key={h} style={{
                        fontSize: "0.75rem", background: "rgba(10,22,40,0.06)",
                        color: "var(--navy)", padding: "0.25rem 0.7rem", borderRadius: "9999px", fontWeight: 600
                      }}>📍 {h}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--gray-200)", paddingTop: "1.25rem" }}>
                    <div>
                      <div style={{ fontWeight: 900, color: "var(--navy)", fontSize: "1.1rem" }}>{pkg.price}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{pkg.priceNote}</div>
                    </div>
                    <a
                      href={`https://wa.me/6282234934384?text=${pkg.waMsg}`}
                      target="_blank" rel="noopener noreferrer"
                      className="btn-primary"
                      id={`pkg-wa-${pkg.id}`}
                    >
                      <MessageCircle size={16} /> Pesan
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #a07c14, #c9a227)" }}>
        <div className="container text-center">
          <div className="section-label" style={{ color: "rgba(10,22,40,0.65)" }}>Rencanakan Perjalanan Anda</div>
          <h2 style={{ fontWeight: 900, color: "var(--navy)", fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "0.75rem" }}>
            Tidak menemukan paket yang sesuai?
          </h2>
          <p style={{ color: "rgba(10,22,40,0.72)", marginBottom: "2rem" }}>
            Hubungi kami dan kami akan buatkan paket wisata kustom sesuai kebutuhan dan budget Anda!
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "var(--navy)", color: "#fff", fontWeight: 700,
                padding: "0.875rem 2rem", borderRadius: "9999px", textDecoration: "none"
              }}
              id="wisata-cta-wa-btn"
            >
              <MessageCircle size={18} /> Chat WhatsApp
            </a>
            <a href={siteData.phoneHref}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", color: "var(--navy)", fontWeight: 700,
                padding: "0.875rem 2rem", borderRadius: "9999px", textDecoration: "none",
                border: "2px solid var(--navy)"
              }}
              id="wisata-cta-phone-btn"
            >
              <MapPin size={18} /> {siteData.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
