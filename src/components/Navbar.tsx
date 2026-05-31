"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteData } from "@/lib/siteData";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/armada", label: "Armada" },
  { href: "/paket-wisata", label: "Paket Wisata" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transition: "background 0.3s, box-shadow 0.3s",
        background: scrolled
          ? "rgba(10,22,40,0.97)"
          : "linear-gradient(to bottom, rgba(10,22,40,0.9), transparent)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.4)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image
            src="/images/ranakah-logo.png"
            alt="Putra Ranakah Trans Logo"
            width={200}
            height={60}
            style={{ objectFit: "contain", height: "45px", width: "auto" }}
            priority
          />
          <div style={{ marginLeft: "10px" }}>
            <div style={{ color: "#f0c84a", fontWeight: 800, fontSize: "1rem", lineHeight: 1.1 }}>PUTRA RANAKAH</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", letterSpacing: "0.1em" }}>TRANS</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{
              color: pathname === l.href ? "#f0c84a" : "rgba(255,255,255,0.82)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              padding: "0.4rem 0.9rem",
              borderRadius: "9999px",
              transition: "color 0.2s, background 0.2s",
              background: pathname === l.href ? "rgba(201,162,39,0.12)" : "transparent",
            }}>{l.label}</Link>
          ))}
        </nav>

        {/* CTA phone */}
        <a href={siteData.phoneHref} className="desktop-nav btn-primary" style={{ fontSize: "0.82rem", padding: "0.5rem 1.2rem" }}>
          <Phone size={15} /> {siteData.phone}
        </a>

        {/* Mobile toggle */}
        <button
          id="nav-toggle"
          onClick={() => setOpen(!open)}
          className="mobile-nav"
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "0.5rem" }}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          background: "rgba(10,22,40,0.98)",
          borderTop: "1px solid rgba(201,162,39,0.2)",
          padding: "1.5rem 1.25rem",
          display: "flex", flexDirection: "column", gap: "0.5rem"
        }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              color: pathname === l.href ? "#f0c84a" : "rgba(255,255,255,0.85)",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 600,
              padding: "0.75rem 1rem",
              borderRadius: "0.75rem",
              background: pathname === l.href ? "rgba(201,162,39,0.12)" : "transparent",
              display: "block"
            }}>{l.label}</Link>
          ))}
          <a href={siteData.phoneHref} className="btn-primary" style={{ marginTop: "0.5rem", justifyContent: "center" }}>
            <Phone size={16} /> {siteData.phone}
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .mobile-nav { display: none !important; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </header>
  );
}
