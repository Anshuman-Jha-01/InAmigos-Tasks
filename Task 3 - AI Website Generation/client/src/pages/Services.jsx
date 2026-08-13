import { Link } from "react-router-dom";

const SERVICES = [
  { title: "Individual Therapy", desc: "One-on-one sessions for anxiety, depression, trauma, grief, and life transitions.", tag: "50 min · in-person or video" },
  { title: "Couples Counseling", desc: "Structured support for communication, conflict, trust, and rebuilding connection.", tag: "60 min · in-person or video" },
  { title: "Family Therapy", desc: "Sessions that give the whole household a shared language for hard moments.", tag: "60 min · in-person" },
  { title: "Psychiatric Care & Medication Management", desc: "Diagnostic evaluation and ongoing medication oversight from licensed psychiatrists.", tag: "Initial eval 60 min · follow-ups 20 min" },
  { title: "Telehealth Sessions", desc: "Full therapy and psychiatry sessions over secure, HIPAA-compliant video.", tag: "Same-day slots available" },
];

export default function Services() {
  return (
    <>
      <section className="section">
        <span className="eyebrow">Services</span>
        <h1 className="h1">Care for wherever you're starting from.</h1>
        <p className="body-text">
          Every plan starts with a short intake call so we can match you with the right
          clinician and format — not the first one available.
        </p>
      </section>
      <section className="section tight">
        <div className="grid-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="card">
              <span className="mono" style={{ fontSize: 11, color: "var(--sage-deep)" }}>{s.tag}</span>
              <h3 className="h3" style={{ marginTop: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 15, color: "var(--ink-soft)" }}>{s.desc}</p>
              <Link className="btn-secondary" style={{ marginTop: 14, padding: "9px 18px", fontSize: 13, display: "inline-block" }} to="/appointments">
                Book this
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
