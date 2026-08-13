import { useState } from "react";
import { api } from "../api.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await api.sendContactMessage(form);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="section">
        <span className="eyebrow">Contact Us</span>
        <h1 className="h1">Reach out — we respond within one business day.</h1>
      </section>

      <section className="section tight">
        <div className="emergency-strip" style={{ marginBottom: 32 }}>
          <div>
            <strong className="display" style={{ fontSize: 18 }}>This is not a crisis line.</strong>
            <div style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 4 }}>
              If you're in immediate danger, call <strong>911</strong>, or call/text <strong>988</strong> for the Suicide &amp; Crisis Lifeline — 24/7.
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          <div className="card">
            {status === "sent" ? (
              <div>
                <h3 className="h3">Message sent</h3>
                <p style={{ fontSize: 14, color: "var(--ink-soft)" }}>Thank you — our team will follow up by email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="h3" style={{ fontSize: 17 }}>Send a secure message</h3>
                <div className="field"><input className="input" placeholder="Full name" required value={form.name} onChange={update("name")} /></div>
                <div className="field"><input className="input" placeholder="Email" type="email" required value={form.email} onChange={update("email")} /></div>
                <div className="field"><input className="input" placeholder="Phone (optional)" value={form.phone} onChange={update("phone")} /></div>
                <div className="field"><textarea className="textarea" rows="4" placeholder="How can we help?" required value={form.message} onChange={update("message")} /></div>
                {status === "error" && <p style={{ color: "#B33", fontSize: 13, marginBottom: 12 }}>Something went wrong. Please try again.</p>}
                <button className="btn-primary" style={{ width: "100%" }} disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send securely"}
                </button>
              </form>
            )}
          </div>
          <div>
            <div className="card tint" style={{ marginBottom: 16 }}>
              <h3 className="h3" style={{ fontSize: 17 }}>Clinic details</h3>
              <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.8 }}>
                214 Harbor View Lane, Suite 3<br />Riverton, ST 00000<br />
                (555) 019-2244 · care@mindharbor.example<br />
                Mon–Fri 8am–7pm · Sat 9am–1pm
              </p>
            </div>
            <div className="card tint" style={{ height: 180, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink-soft)", fontSize: 13, textAlign: "center", padding: 16 }}>
              <iframe src="https://maps.google.com/maps?q=Riverton&output=embed" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
