'use client';

import type { Metadata } from "next";
import { useEffect, useState } from "react";

// Note: Metadata export is moved to layout.tsx for proper Next.js handling
// export const metadata: Metadata = {
//   title: "Service Suspended",
//   description: "Service temporarily suspended. Please renew your service to restore access.",
//   robots: {
//     index: false,
//     follow: false,
//   },
// };

export default function SuspendedPage() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="suspended-page">
      <div className="suspended-glow suspended-glow-top" />
      <div className="suspended-glow suspended-glow-bottom" />

      <div className="suspended-card">
        <div className="suspended-brand">
          <svg className="suspended-brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
          <span>Singapore Fast VPS Service</span>
        </div>

        <div className="suspended-icon-wrap">
          <svg className="suspended-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>

        <h1 className="suspended-title">Service Temporarily Suspended</h1>

        <p className="suspended-description">
          Access to this website has been suspended because the hosting service has expired. If you are the owner of this website, please renew your service to restore access.
        </p>

        <div className="suspended-meta-box">
          <div className="suspended-meta-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <div>
            <p className="suspended-meta-label">Managed &amp; Hosted By</p>
            <p className="suspended-meta-name">Singapore Fast VPS Service</p>
          </div>
        </div>

        <a href="#" className="suspended-btn">
          Renew Service
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      <footer className="suspended-footer">&copy; 2026 Singapore Fast Host. All rights reserved.</footer>
    </main>
  );
}
