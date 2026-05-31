import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, CheckCircle } from "lucide-react";
import { siteData, fleetData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Armada Rental Mobil Madiun – Avanza, Innova, Hiace, Bus",
  description: "Pilihan armada lengkap: Avanza, Innova Reborn, Hiace Premio, dan Bus Pariwisata. Sewa mobil Madiun dengan driver profesional dan harga terbaik.",
  keywords: "armada rental madiun, sewa hiace madiun, sewa innova madiun, sewa avanza madiun, bus pariwisata madiun",
  alternates: { canonical: "https://putraranakahtrans.com/armada" },
};



export default function ArmadaPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a3a6e 100%)",
        paddingTop: "8rem", paddingBottom: "5rem", textAlign: "center"
      }}>
        <div className="container">
          <div className="section-label">Pilihan Armada</div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
            Armada <span className="gold-text">Rental Mobil Madiun</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", maxWidth: "560px", margin: "0 auto" }}>
            Semua armada terawat secara rutin, ber-AC, dan dikemudikan oleh driver berlisensi resmi dengan pengalaman bertahun-tahun.
          </p>
        </div>
      </section>

      {/* Fleet Cards */}
      <section className="bg-gray-light">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {fleetData.map((car, idx) => (
              <div key={car.id} className="fleet-card-grid" style={{
                background: "#fff", borderRadius: "1.5rem", overflow: "hidden",
                boxShadow: "0 6px 32px rgba(10,22,40,0.09)", border: "1px solid var(--gray-200)",
                display: "grid", gridTemplateColumns: idx % 2 === 0 ? "340px 1fr" : "1fr 340px",
              }}>
                {/* Image / Icon panel */}
                {idx % 2 === 0 ? (
                  <>
                    <div style={{
                      background: "linear-gradient(180deg, var(--white) 0%, var(--gray-100) 100%)",
                      position: "relative", minHeight: "260px", borderRight: "1px solid var(--gray-200)", overflow: "hidden"
                    }}>
                      <Image 
                        src={car.image} 
                        alt={car.name} 
                        fill
                        sizes="(max-width: 768px) 100vw, 340px"
                        style={{ objectFit: "contain", filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.12))", padding: "1.5rem", transform: "scale(1.1)" }} 
                      />
                    </div>
                    <div style={{ padding: "2.5rem" }}>
                      <FleetContent car={car} />
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ padding: "2.5rem" }}>
                      <FleetContent car={car} />
                    </div>
                    <div style={{
                      background: "linear-gradient(180deg, var(--white) 0%, var(--gray-100) 100%)",
                      position: "relative", minHeight: "260px", borderLeft: "1px solid var(--gray-200)", overflow: "hidden"
                    }}>
                      <Image 
                        src={car.image} 
                        alt={car.name} 
                        fill
                        sizes="(max-width: 768px) 100vw, 340px"
                        style={{ objectFit: "contain", filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.12))", padding: "1.5rem", transform: "scale(1.1)" }} 
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy)", textAlign: "center" }}>
        <div className="container">
          <div className="section-label">Butuh Bantuan Memilih?</div>
          <h2 className="section-title light" style={{ marginBottom: "1rem" }}>Konsultasi Gratis via WhatsApp</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
            Tim kami siap membantu Anda memilih armada yang tepat sesuai jumlah penumpang dan tujuan perjalanan.
          </p>
          <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary" id="armada-cta-btn">
            <MessageCircle size={18} /> Konsultasi Sekarang
          </a>
        </div>
      </section>
      <style>{`
        @media (max-width: 768px) {
          .fleet-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function FleetContent({ car }: { car: typeof fleetData[0] }) {
  return (
    <>
      <h2 style={{ fontWeight: 900, color: "var(--navy)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>{car.name}</h2>
      <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{car.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {car.features.map(f => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <CheckCircle size={15} style={{ color: "#c9a227" }} />
            <span style={{ fontSize: "0.875rem", color: "var(--text-dark)", fontWeight: 600 }}>{f}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--gray-200)", paddingTop: "1.25rem" }}>
        <div>
          <span style={{ fontSize: "1.4rem", fontWeight: 900, color: "var(--navy)" }}>{car.price}</span>
          <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{car.pricePeriod}</span>
        </div>
        <a
          href={`https://wa.me/6282234934384?text=${car.waMessage}`}
          target="_blank" rel="noopener noreferrer"
          className="btn-primary"
          id={`armada-wa-${car.slug}`}
        >
          <MessageCircle size={16} /> Pesan Sekarang
        </a>
      </div>
    </>
  );
}
