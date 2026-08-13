import { useState } from "react";
import { NavLink } from "react-router-dom";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/resources", label: "Resources" },
  { to: "/appointments", label: "Appointments" },
  { to: "/community", label: "Community" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <svg width="26" height="26" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" fill="#6E8F6B" opacity="0.25" />
            <circle cx="20" cy="20" r="11" fill="#52704F" />
          </svg>
          MindHarbor
        </div>
        <nav className="nav" aria-label="Primary" style={{ display: open ? "flex" : undefined }}>
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} className={({ isActive }) => (isActive ? "active" : "")}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <NavLink to="/resources" className="crisis-btn">Crisis help</NavLink>
          <button
            className="btn-secondary"
            style={{ padding: "8px 12px", display: "none" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
