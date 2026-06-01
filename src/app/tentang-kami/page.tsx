import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Phone, Award, Users, Clock, Shield } from "lucide-react";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Tentang Kami – CV Putra Ranakah Adhikari",
  description: "CV Putra Ranakah Adhikari adalah perusahaan rental mobil terpercaya di Madiun sejak 2014. Driver profesional, armada terawat, pelayanan 24 jam.",
  alternates: { canonical: "https://putraranakahtrans.com/tentang-kami" },
};

const values = [
  { icon: Award, title: "Terpercaya", desc: "Lebih dari 10 tahun melayani pelanggan di Madiun dan sekitarnya dengan integritas tinggi." },
  { icon: Users, title: "Profesional", desc: "Driver berlisensi resmi, sopan, dan berpengalaman mengemudi di berbagai medan dan rute." },
  { icon: Clock, title: "Tepat Waktu", desc: "Kami menghargai waktu Anda. Armada selalu siap dan berangkat sesuai jadwal yang disepakati." },
  { icon: Shield, title: "Aman & Nyaman", desc: "Kendaraan diasuransikan, dikalibrasi rutin, dan dilengkapi fasilitas keselamatan penumpang." },
];

const milestones = [
  { year: "2014", event: "CV Putra Ranakah Adhikari resmi berdiri di Kota Madiun." },
  { year: "2016", event: "Ekspansi armada dengan penambahan unit Hiace Premio perdana." },
  { year: "2019", event: "Meluncurkan layanan Bus Pariwisata & Open Trip ke destinasi Jawa-Bali." },
  { year: "2022", event: "Bergabung dengan platform digital, menjangkau pelanggan lebih luas." },
  { year: "2024", event: "Armada mencapai lebih dari 15 unit aktif melayani 6 kota di sekitar Madiun." },
];

export default function TentangKamiPage() {
  return (
    <>
      {/* Header */}
      <section style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a3a6e 100%)",
        paddingTop: "8rem", paddingBottom: "5rem", textAlign: "center"
      }}>
        <div className="container">
          <div className="section-label">Tentang Kami</div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
            CV. <span className="gold-text">Putra Ranakah Adhikari</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", maxWidth: "560px", margin: "0 auto" }}>
            Mitra perjalanan terpercaya Anda sejak 2014. Berkomitmen menghadirkan transportasi nyaman, aman, dan terjangkau.
          </p>
        </div>
      </section>

      {/* Story */}
      <section>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            {/* Image panel */}
            <div style={{
              borderRadius: "2rem", height: "380px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}>
              <Image 
                src="/images/putraranakah.png"
                alt="Armada Putra Ranakah"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="section-label">Kisah Kami</div>
              <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>Berawal dari Satu Armada, Kini Melayani Ribuan Perjalanan</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
                CV Putra Ranakah Adhikari berdiri pada tahun 2014 di Kota Madiun, Jawa Timur, dengan semangat menyediakan transportasi yang bisa diandalkan oleh masyarakat lokal. Berawal dari satu unit kendaraan, kami tumbuh menjadi perusahaan rental mobil yang dipercaya lebih dari 500 pelanggan setia.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.75rem" }}>
                Kami beroperasi dengan prinsip sederhana: <strong style={{ color: "var(--navy)" }}>kejujuran, ketepatan, dan kenyamanan</strong>. Setiap armada kami rawat dengan ketat, setiap driver kami pilih dengan selektif, dan setiap pelanggan kami layani dengan sepenuh hati.
              </p>
              <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary" id="about-wa-btn">
                <MessageCircle size={18} /> Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-light">
        <div className="container text-center">
          <div className="section-label">Nilai Kami</div>
          <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>Mengapa Pelanggan Memilih Kami</h2>
          <p className="section-desc" style={{ marginBottom: "3rem" }}>
            Komitmen kami bukan sekadar kata-kata — kami buktikan lewat setiap perjalanan yang kami layani.
          </p>
          <div className="grid-4">
            {values.map((v) => (
              <div key={v.title} style={{
                background: "#fff", borderRadius: "1.25rem", padding: "2rem 1.5rem",
                boxShadow: "0 4px 20px rgba(10,22,40,0.07)", border: "1px solid var(--gray-200)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "1rem",
                  background: "linear-gradient(135deg, var(--navy), var(--navy-light))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.25rem"
                }}>
                  <v.icon size={24} color="#f0c84a" />
                </div>
                <h3 style={{ fontWeight: 800, color: "var(--navy)", marginBottom: "0.5rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <div className="section-label">Perjalanan Kami</div>
            <h2 className="section-title">Tonggak Sejarah Putra Ranakah</h2>
          </div>
          <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative" }}>
            {/* vertical line */}
            <div style={{ position: "absolute", left: "20px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, var(--navy), var(--gold))" }} />
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem", position: "relative" }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "50%", flexShrink: 0,
                  background: i === milestones.length - 1 ? "linear-gradient(135deg, #c9a227, #f0c84a)" : "var(--navy)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.7rem", fontWeight: 900,
                  color: i === milestones.length - 1 ? "var(--navy)" : "#f0c84a",
                  zIndex: 1, border: "3px solid #fff", boxShadow: "0 2px 12px rgba(10,22,40,0.2)"
                }}>{m.year.slice(2)}</div>
                <div style={{
                  background: "#fff", borderRadius: "1rem", padding: "1rem 1.25rem",
                  boxShadow: "0 2px 12px rgba(10,22,40,0.08)", border: "1px solid var(--gray-200)", flex: 1
                }}>
                  <div style={{ fontWeight: 800, color: "var(--gold-dark)", fontSize: "0.8rem", marginBottom: "0.3rem" }}>{m.year}</div>
                  <div style={{ color: "var(--text-dark)", fontSize: "0.9rem" }}>{m.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
