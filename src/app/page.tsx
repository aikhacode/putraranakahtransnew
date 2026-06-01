import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, Star, CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import { siteData, fleetData, testimonials, tourPackages } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Rental Mobil & Sewa Hiace Madiun – CV Putra Ranakah Trans",
  description: siteData.description,
  keywords: siteData.keywords,
  alternates: { canonical: "https://putraranakahtrans.com" },
};

const stats = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "500+", label: "Pelanggan Puas" },
  { value: "24/7", label: "Siap Melayani" },
  { value: "4", label: "Jenis Armada" },
];

const services = [
  { icon: "🚗", title: "Rental Harian", desc: "Sewa mobil dengan driver profesional untuk kebutuhan harian, antar jemput, maupun perjalanan jauh." },
  { icon: "🏔️", title: "Wisata & Tour", desc: "Paket wisata ke Bromo, Dieng, Bali dan destinasi populer lainnya dengan harga terjangkau." },
  { icon: "🏢", title: "Korporat", desc: "Layanan transportasi perusahaan: antar karyawan, meeting, training, event, dan keperluan bisnis." },
  { icon: "✈️", title: "Airport Transfer", desc: "Antar jemput bandara Juanda Surabaya, Adisumarmo Solo, dan Ngurah Rai Bali tepat waktu." },
];

export default function HomePage() {
  return (
    <>
      {/* ── TOP FULLSCREEN IMAGE ── */}
      <section style={{ width: "100%", height: "calc(100vh - 70px)", position: "relative", marginTop: "70px" }}>
        <Image
          src="/images/putraranakah.png"
          alt="Armada Putra Ranakah Trans"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </section>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a1628 0%, #1a3a6e 60%, #0d3b7a 100%)",
        display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* decorative circles */}
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,162,39,0.12), transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-15%", left: "-8%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,162,39,0.07), transparent 70%)", pointerEvents: "none" }} />

        <div className="container" style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            {/* Left text */}
            <div>
              <div className="section-label">⭐ Terpercaya Sejak 2014</div>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Open Trip, Rental Mobil &{" "}
                <span className="gold-text">Sewa Hiace Madiun</span>{" "}
                Terpercaya
              </h1>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "480px" }}>
                CV Putra Ranakah Trans menyediakan armada Avanza, Innova Reborn, Hiace Premio, dan Bus Pariwisata dengan driver berpengalaman. Melayani Madiun, Ponorogo, Magetan, Ngawi & sekitarnya.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary" id="hero-wa-btn">
                  <MessageCircle size={18} /> Pesan via WhatsApp
                </a>
                <Link href="/armada" className="btn-outline" id="hero-fleet-btn">
                  Lihat Armada <ArrowRight size={16} />
                </Link>
              </div>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", color: "rgba(255,255,255,0.65)", fontSize: "0.875rem" }}>
                <Phone size={15} style={{ color: "#c9a227" }} />
                <a href={siteData.phoneHref} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontWeight: 600 }}>
                  {siteData.phone}
                </a>
                <span style={{ margin: "0 0.5rem", opacity: 0.4 }}>·</span>
                <MapPin size={15} style={{ color: "#c9a227" }} />
                <span>Kota Madiun, Jawa Timur</span>
              </div>
            </div>

            {/* Right stats card */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {stats.map((s) => (
                <div key={s.label} style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(201,162,39,0.2)",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  textAlign: "center",
                  backdropFilter: "blur(8px)",
                }}>
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: "#f0c84a", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", marginTop: "0.4rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom wave */}
        <svg style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }} viewBox="0 0 1440 60" preserveAspectRatio="none" fill="#f5f7fa">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </section>

      {/* ── PAKET WISATA ── */}
      <section>
        <div className="container text-center">
          <div className="section-label">Paket Spesial</div>
          <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>Liburan Tak Terlupakan</h2>
          <p className="section-desc" style={{ marginBottom: "3rem" }}>
            Jelajahi destinasi impian Anda bersama layanan tour & travel profesional kami.
          </p>
          <div className="grid-4">
            {tourPackages.map((tour) => (
              <div key={tour.slug} className="hover-card" style={{
                background: "#fff", borderRadius: "1.25rem", overflow: "hidden",
                boxShadow: "0 4px 20px rgba(10,22,40,0.07)", border: "1px solid var(--gray-200)",
                display: "flex", flexDirection: "column"
              }}
              >
                {/* Tour Image Header */}
                <div style={{ position: "relative", width: "100%", height: "185px", overflow: "hidden" }}>
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Tour Content */}
                <div style={{ padding: "1.25rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ fontWeight: 800, color: "var(--navy)", marginBottom: "0.5rem", fontSize: "1.1rem", textAlign: "left" }}>{tour.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1.25rem", flexGrow: 1, textAlign: "left" }}>
                    {tour.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", justifyContent: "flex-start", marginBottom: "1.5rem" }}>
                    {tour.features.map(f => (
                      <span key={f} style={{
                        fontSize: "0.7rem", background: "rgba(201,162,39,0.1)", color: "var(--gold-dark)",
                        padding: "0.25rem 0.6rem", borderRadius: "9999px", fontWeight: 700
                      }}>{f}</span>
                    ))}
                  </div>
                  <div style={{ borderTop: "1px dashed var(--gray-200)", paddingTop: "1rem", marginBottom: "1.25rem", textAlign: "left" }}>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Mulai dari</div>
                    <div style={{ fontSize: "1.15rem", fontWeight: 900, color: "var(--navy)" }}>{tour.price}</div>
                  </div>
                  <a
                    href={`https://wa.me/6282234934384?text=Halo%20Putra%20Ranakah%20Trans%2C%20saya%20ingin%20tanya%20info%20mengenai%20${tour.title}.`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn-wa"
                    style={{ width: "100%", justifyContent: "center" }}
                    id={`tour-wa-${tour.slug}`}
                  >Pesan Sekarang</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAYANAN ── */}
      <section className="bg-gray-light">
        <div className="container text-center">
          <div className="section-label">Layanan Kami</div>
          <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>Solusi Transportasi Lengkap</h2>
          <p className="section-desc" style={{ marginBottom: "3rem" }}>
            Dari perjalanan harian hingga wisata grup besar, kami siap melayani semua kebutuhan transportasi Anda.
          </p>
          <div className="grid-4">
            {services.map((s) => (
              <div key={s.title} className="hover-card" style={{
                background: "#fff", borderRadius: "1.25rem", padding: "2rem 1.5rem",
                boxShadow: "0 4px 20px rgba(10,22,40,0.07)", border: "1px solid var(--gray-200)",
              }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem", fontSize: "1rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARMADA ── */}
      <section>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <div className="section-label">Pilihan Armada</div>
            <h2 className="section-title">Armada Siap Berangkat</h2>
            <p className="section-desc" style={{ marginTop: "0.75rem" }}>
              Setiap armada dirawat secara rutin dan dikemudikan oleh driver berpengalaman & berlisensi.
            </p>
          </div>
          <div className="grid-4">
            {fleetData.map((car) => (
              <div key={car.id} className="fleet-card">
                <div style={{
                  height: "210px", background: "linear-gradient(180deg, var(--white) 0%, var(--gray-100) 100%)",
                  position: "relative", overflow: "hidden", borderBottom: "1px solid var(--gray-200)"
                }}>
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{ objectFit: "contain", filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.12))", padding: "1rem", transform: "scale(1.15)" }}
                  />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 800, color: "var(--navy)", fontSize: "1rem", marginBottom: "0.25rem" }}>{car.name}</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "0.75rem", lineHeight: 1.5 }}>{car.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                    {car.features.map(f => (
                      <span key={f} style={{
                        fontSize: "0.72rem", background: "var(--gray-100)", color: "var(--navy)",
                        padding: "0.2rem 0.6rem", borderRadius: "9999px", fontWeight: 600
                      }}>{f}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--gray-200)", paddingTop: "0.75rem" }}>
                    <div>
                      <span style={{ fontSize: "1.15rem", fontWeight: 900, color: "var(--navy)" }}>{car.price}</span>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{car.pricePeriod}</span>
                    </div>
                    <a
                      href={`https://wa.me/6282234934384?text=${car.waMessage}`}
                      target="_blank" rel="noopener noreferrer"
                      className="btn-wa"
                      id={`fleet-wa-${car.slug}`}
                    >Pesan</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "2.5rem" }}>
            <Link href="/armada" className="btn-primary" id="all-fleet-btn">
              Lihat Semua Armada <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background: "var(--navy)" }}>
        <div className="container">
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="section-label">Mengapa Kami?</div>
              <h2 className="section-title light" style={{ marginBottom: "1.5rem" }}>
                Kepercayaan Ribuan Pelanggan Madiun
              </h2>
              {[
                "Driver berpengalaman & berlisensi resmi",
                "Armada terawat & siap 24 jam",
                "Harga transparan, tanpa biaya tersembunyi",
                "Asuransi penumpang & kendaraan",
                "Melayani seluruh Jawa Timur & sekitarnya",
                "Konfirmasi booking instan via WhatsApp",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.85rem", alignItems: "flex-start" }}>
                  <CheckCircle size={18} style={{ color: "#c9a227", marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.95rem" }}>{item}</span>
                </div>
              ))}
              <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-flex" }} id="why-us-wa-btn">
                <MessageCircle size={18} /> Konsultasi Gratis
              </a>
            </div>

            {/* Testimonials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {testimonials.map((t) => (
                <div key={t.name} style={{
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,162,39,0.15)",
                  borderRadius: "1rem", padding: "1.25rem", backdropFilter: "blur(8px)"
                }}>
                  <div style={{ display: "flex", gap: "0.25rem", marginBottom: "0.5rem" }}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="#f0c84a" color="#f0c84a" />
                    ))}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "0.75rem" }}>
                    &quot;{t.text}&quot;
                  </p>
                  <div style={{ fontWeight: 700, color: "#f0c84a", fontSize: "0.82rem" }}>
                    {t.name} — {t.city}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP & CONTACT ── */}
      <section className="bg-gray-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <div className="section-label">Lokasi Kami</div>
            <h2 className="section-title">Temukan Kami di Madiun</h2>
            <p style={{ color: "var(--text-muted)", marginTop: "0.75rem" }}>{siteData.address}</p>
          </div>
          <div className="map-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "stretch" }}>
            {/* Map */}
            <div style={{ borderRadius: "1.25rem", overflow: "hidden", boxShadow: "0 8px 32px rgba(10,22,40,0.12)", minHeight: "350px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9!2d111.523!3d-7.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79a9f2bb24953b%3A0x65e7cf4f0b9c8a7e!2sJl.%20Pucang%20Sari%2C%20Manisrejo%2C%20Kec.%20Taman%2C%20Kota%20Madiun!5e0!3m2!1sid!2sid!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi CV Putra Ranakah Trans Madiun"
              />
            </div>
            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem" }}>
              <div>
                <div style={{ fontWeight: 800, color: "var(--navy)", fontSize: "1.25rem", marginBottom: "0.5rem" }}>Hubungi Kami Sekarang</div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                  Siap melayani Anda 24 jam sehari, 7 hari seminggu. Dapatkan penawaran terbaik langsung via WhatsApp.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a href={siteData.phoneHref} style={{
                  display: "flex", gap: "1rem", alignItems: "center",
                  background: "#fff", borderRadius: "1rem", padding: "1rem 1.25rem",
                  boxShadow: "0 2px 12px rgba(10,22,40,0.08)", textDecoration: "none",
                  border: "1px solid var(--gray-200)", transition: "transform 0.2s"
                }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Phone size={18} color="#f0c84a" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Telepon</div>
                    <div style={{ fontWeight: 700, color: "var(--navy)" }}>{siteData.phone}</div>
                  </div>
                </a>
                <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", gap: "1rem", alignItems: "center",
                  background: "#fff", borderRadius: "1rem", padding: "1rem 1.25rem",
                  boxShadow: "0 2px 12px rgba(10,22,40,0.08)", textDecoration: "none",
                  border: "1px solid var(--gray-200)", transition: "transform 0.2s"
                }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#25d366", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MessageCircle size={18} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>WhatsApp</div>
                    <div style={{ fontWeight: 700, color: "var(--navy)" }}>Chat Langsung Sekarang</div>
                  </div>
                </a>
                <a href={siteData.mapLink} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", gap: "1rem", alignItems: "center",
                  background: "#fff", borderRadius: "1rem", padding: "1rem 1.25rem",
                  boxShadow: "0 2px 12px rgba(10,22,40,0.08)", textDecoration: "none",
                  border: "1px solid var(--gray-200)", transition: "transform 0.2s"
                }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#ea4335", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MapPin size={18} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Alamat</div>
                    <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: "0.875rem" }}>{siteData.address}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: "linear-gradient(135deg, #a07c14 0%, #c9a227 100%)", padding: "4rem 0" }}>
        <div className="container text-center">
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 900, color: "var(--navy)", marginBottom: "0.75rem" }}>
            Siap Berangkat? Pesan Sekarang!
          </h2>
          <p style={{ color: "rgba(10,22,40,0.72)", marginBottom: "1.75rem", fontSize: "1rem" }}>
            Hubungi kami dan dapatkan harga terbaik untuk perjalanan Anda hari ini.
          </p>
          <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              background: "var(--navy)", color: "#fff", fontWeight: 700,
              padding: "0.875rem 2rem", borderRadius: "9999px", textDecoration: "none",
              fontSize: "1rem", boxShadow: "0 6px 24px rgba(10,22,40,0.25)",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
            id="cta-wa-btn"
          >
            <MessageCircle size={20} /> Pesan via WhatsApp
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .map-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
