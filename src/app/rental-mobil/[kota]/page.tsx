import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ChevronRight } from "lucide-react";
import { siteData, kotaData, fleetData } from "@/lib/siteData";

type Props = { params: Promise<{ kota: string }> };

export async function generateStaticParams() {
  return Object.keys(kotaData).map((kota) => ({ kota }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kota } = await params;
  const data = kotaData[kota];
  if (!data) return {};
  return {
    title: `Rental Mobil ${data.name} – Sewa Hiace & Innova | Putra Ranakah`,
    description: data.description,
    keywords: data.keywords,
    alternates: { canonical: `https://putraranakahtrans.com/rental-mobil/${kota}` },
  };
}

export default async function KotaPage({ params }: Props) {
  const { kota } = await params;
  const data = kotaData[kota];
  if (!data) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Rental Mobil ${data.name}`,
    provider: { "@type": "LocalBusiness", name: siteData.name, telephone: siteData.phone },
    areaServed: { "@type": "City", name: data.name },
    description: data.description,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <section style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a6e 100%)", paddingTop: "8rem", paddingBottom: "5rem", textAlign: "center" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Beranda</Link>
            <ChevronRight size={14} />
            <span style={{ color: "#f0c84a" }}>Rental Mobil {data.name}</span>
          </div>
          <div className="section-label">Layanan Area {data.name}</div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
            Rental Mobil <span className="gold-text">{data.name}</span> Terpercaya
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: "560px", margin: "0 auto 2rem", fontSize: "1.05rem" }}>
            {data.description}
          </p>
          <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary" id={`kota-wa-${kota}`}>
            <MessageCircle size={18} /> Pesan Sekarang via WhatsApp
          </a>
        </div>
      </section>

      {/* Fleet for this city */}
      <section className="bg-gray-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <div className="section-label">Armada Tersedia</div>
            <h2 className="section-title">Pilihan Armada untuk Area {data.name}</h2>
          </div>
          <div className="grid-4">
            {fleetData.map((car) => {
              const waMsg = `Halo%20Putra%20Ranakah%20Trans%2C%20saya%20ingin%20sewa%20${encodeURIComponent(car.name)}%20untuk%20area%20${data.name}.%20Mohon%20info%20tarif.`;
              return (
                <div key={car.id} className="fleet-card">
                  {/* Fleet Image Container */}
                  <div style={{
                    height: "180px", background: "linear-gradient(180deg, var(--white) 0%, var(--gray-100) 100%)",
                    position: "relative", overflow: "hidden", borderBottom: "1px solid var(--gray-200)"
                  }}>
                    <Image 
                      src={car.image} 
                      alt={`Sewa ${car.name} ${data.name} - CV Putra Ranakah Trans`} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: "contain", filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.12))", padding: "1rem", transform: "scale(1.1)" }} 
                    />
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <h3 style={{ fontWeight: 800, color: "var(--navy)", fontSize: "1rem", marginBottom: "0.5rem" }}>{car.name}</h3>
                    <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--navy)", marginBottom: "0.75rem" }}>
                      {car.price}<span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 400 }}>{car.pricePeriod}</span>
                    </div>
                    <a href={`https://wa.me/6282234934384?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                      className="btn-wa" style={{ display: "flex", justifyContent: "center" }}
                      id={`kota-fleet-${kota}-${car.slug}`}>
                      <MessageCircle size={15} /> Pesan di {data.name}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section>
        <div className="container text-center">
          <div className="section-label">Kota Lainnya</div>
          <h2 className="section-title" style={{ marginBottom: "2rem" }}>Layanan Area Lain</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {Object.entries(kotaData).filter(([k]) => k !== kota).map(([k, d]) => (
              <Link key={k} href={`/rental-mobil/${k}`}
                style={{
                  background: "var(--gray-100)", color: "var(--navy)",
                  padding: "0.6rem 1.4rem", borderRadius: "9999px",
                  fontWeight: 700, textDecoration: "none", fontSize: "0.9rem",
                  border: "1px solid var(--gray-200)", transition: "background 0.2s, color 0.2s"
                }}>
                Rental Mobil {d.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
