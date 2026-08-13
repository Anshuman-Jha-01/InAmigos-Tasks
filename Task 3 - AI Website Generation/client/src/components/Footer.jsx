import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="logo" style={{ color: "var(--white)" }}>MindHarbor</div>
          <p style={{ fontSize: 14, marginTop: 12, maxWidth: 280 }}>
            Therapy, psychiatric care, and community support — in person and online.
          </p>
          <p className="mono" style={{ fontSize: 11, marginTop: 16, color: "#C99A3E" }}>
            IN CRISIS? CALL/TEXT 988 · 24/7
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/community">Community</Link>
        </div>
        <div>
          <h4>Support</h4>
          <Link to="/resources">Resources</Link>
          <Link to="/appointments">Appointments</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Legal</h4>
          <Link to="/privacy">Privacy &amp; Policies</Link>
        </div>
      </div>
    </footer>
  );
}
