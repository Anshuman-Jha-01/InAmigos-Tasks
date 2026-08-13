import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BreathingHero from "../components/BreathingHero.jsx";
import { api } from "../api.js";

const FALLBACK_TESTIMONIALS = [
  { quote: "I put off calling for two years. The first session felt like exhaling for the first time in a long while.", attribution: "Client, individual therapy" },
  { quote: "Our family sessions gave us a shared language for hard conversations we used to avoid entirely.", attribution: "Client, family counseling" },
];

export default function Home() {
  const [testimonials, setTestimonials] = useState(FALLBACK_TESTIMONIALS);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    api
      .getTestimonials(true)
      .then((data) => { if (data.length) setTestimonials(data); })
      .catch(() => {}); // fall back to static copy if the API isn't running
  }, []);

  const t = testimonials[index] || testimonials[0];

  return (
    <>
      <section className="section">
        <div className="hero">
          <div>
            <span className="badge">● Now accepting new clients &amp; most major insurance</span>
            <h1 className="h1" style={{ marginTop: 18 }}>Your mind deserves<br />a safe harbor.</h1>
            <p className="body-text">
              MindHarbor offers therapy, psychiatric care, and support groups — in person and
              online — for people who are ready to feel more like themselves.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 26, flexWrap: "wrap" }}>
              <Link className="btn-primary" to="/appointments">Book an appointment</Link>
              <Link className="btn-secondary" to="/services">Explore services</Link>
            </div>
            <div className="quicklinks">
              <Link className="quicklink" to="/services">
                <span className="h3" style={{ fontSize: 17 }}>Find a service</span>
                <span style={{ fontSize: 14, color: "var(--ink-soft)" }}>Therapy, psychiatry, groups</span>
              </Link>
              <Link className="quicklink" to="/appointments">
                <span className="h3" style={{ fontSize: 17 }}>Book a session</span>
                <span style={{ fontSize: 14, color: "var(--ink-soft)" }}>See real-time availability</span>
              </Link>
              <Link className="quicklink" to="/resources">
                <span className="h3" style={{ fontSize: 17 }}>In crisis now?</span>
                <span style={{ fontSize: 14, color: "var(--ink-soft)" }}>24/7 hotlines &amp; emergency care</span>
              </Link>
            </div>
          </div>
          <BreathingHero />
        </div>
      </section>

      <section className="section tight">
        <div className="emergency-strip">
          <div>
            <strong className="display" style={{ fontSize: 18 }}>
              If you're in crisis, you don't have to wait for an appointment.
            </strong>
            <div style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 4 }}>
              Call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline) — free, confidential, available 24/7.
            </div>
          </div>
          <Link className="crisis-btn" to="/resources">Crisis resources</Link>
        </div>
      </section>

      <section className="section">
        <span className="eyebrow">Why people choose us</span>
        <h2 className="h2">Care that fits the way you actually live.</h2>
        <div className="grid-3" style={{ marginTop: 28 }}>
          <div className="card">
            <h3 className="h3">Licensed, vetted clinicians</h3>
            <p style={{ fontSize: 15, color: "var(--ink-soft)" }}>Every therapist and psychiatrist is licensed, background-checked, and matched to your needs.</p>
          </div>
          <div className="card">
            <h3 className="h3">In-person or telehealth</h3>
            <p style={{ fontSize: 15, color: "var(--ink-soft)" }}>Switch between our clinic space and secure video sessions whenever your week calls for it.</p>
          </div>
          <div className="card">
            <h3 className="h3">Transparent pricing</h3>
            <p style={{ fontSize: 15, color: "var(--ink-soft)" }}>We work with major insurers and offer sliding-scale direct pay — no surprises.</p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="section">
          <span className="eyebrow" style={{ color: "#C9D9C7" }}>Stories from clients</span>
          <p className="testimonial" style={{ maxWidth: 720 }}>&ldquo;{t.quote}&rdquo;</p>
          <p style={{ marginTop: 14, fontSize: 14, opacity: 0.8 }}>— {t.attribution}</p>
          {testimonials.length > 1 && (
            <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  style={{ width: 9, height: 9, borderRadius: 99, border: "none", background: i === index ? "#C99A3E" : "rgba(255,255,255,0.3)" }}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
