import { useEffect, useState } from "react";
import BreathingHero from "../components/BreathingHero.jsx";
import { api } from "../api.js";

const SERVICES = ["Individual Therapy", "Couples Counseling", "Family Therapy", "Psychiatric Consultation", "Telehealth Session"];
const DAYS = ["2026-08-19", "2026-08-20", "2026-08-21", "2026-08-24", "2026-08-25"];
const DAY_LABELS = { "2026-08-19": "Wed 19", "2026-08-20": "Thu 20", "2026-08-21": "Fri 21", "2026-08-24": "Mon 24", "2026-08-25": "Tue 25" };
const FALLBACK_SLOTS = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"].map((time) => ({ time, available: true }));

export default function Appointments() {
  const [service, setService] = useState(SERVICES[0]);
  const [day, setDay] = useState(DAYS[0]);
  const [availability, setAvailability] = useState(FALLBACK_SLOTS);
  const [slot, setSlot] = useState(null);
  const [payment, setPayment] = useState("insurance");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | booking | confirmed | error
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setSlot(null);
    api
      .getAvailability(day)
      .then((data) => setAvailability(data.availability))
      .catch(() => setAvailability(FALLBACK_SLOTS)); // API not running — use static demo slots
  }, [day]);

  const handleBook = async () => {
    if (!slot || !name || !email) return;
    setStatus("booking");
    setErrorMsg("");
    try {
      await api.bookAppointment({
        clientName: name,
        email,
        service,
        date: day,
        time: slot,
        paymentMethod: payment,
      });
      setStatus("confirmed");
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "confirmed") {
    return (
      <section className="section" style={{ textAlign: "center", maxWidth: 560, margin: "72px auto" }}>
        <BreathingHero />
        <h2 className="h2">You're booked.</h2>
        <p className="body-text" style={{ margin: "0 auto" }}>
          {service} on {DAY_LABELS[day]} at {slot}. A confirmation and secure intake form will be
          sent to {email}.
        </p>
        <button className="btn-secondary" style={{ marginTop: 20 }} onClick={() => { setStatus("idle"); setSlot(null); }}>
          Book another session
        </button>
      </section>
    );
  }

  return (
    <>
      <section className="section">
        <span className="eyebrow">Appointments</span>
        <h1 className="h1">Book a session in under two minutes.</h1>
        <p className="body-text">
          Pick a service and a time that works — you'll get a confirmation and a short secure
          intake form by email.
        </p>
      </section>

      <section className="section tight" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32 }}>
        <div className="card">
          <div className="field">
            <label className="label">Service</label>
            <select className="select" value={service} onChange={(e) => setService(e.target.value)}>
              {SERVICES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>

          <label className="label">Day</label>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            {DAYS.map((d) => (
              <button
                key={d}
                onClick={() => setDay(d)}
                className="slot"
                style={{ flex: "1 0 90px", background: d === day ? "var(--sage)" : "var(--white)", color: d === day ? "var(--white)" : "var(--ink)", borderColor: d === day ? "var(--sage)" : "var(--line)" }}
              >
                {DAY_LABELS[d]}
              </button>
            ))}
          </div>

          <label className="label">Available times</label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 20 }}>
            {availability.map(({ time, available }) => (
              <button
                key={time}
                disabled={!available}
                onClick={() => setSlot(time)}
                className={`slot ${slot === time ? "selected" : ""} ${!available ? "taken" : ""}`}
              >
                {time}
              </button>
            ))}
          </div>

          <div className="field">
            <label className="label">Payment</label>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="slot" style={{ flex: 1, background: payment === "insurance" ? "var(--sage)" : "var(--white)", color: payment === "insurance" ? "var(--white)" : "var(--ink)" }} onClick={() => setPayment("insurance")}>Use insurance</button>
              <button className="slot" style={{ flex: 1, background: payment === "direct" ? "var(--sage)" : "var(--white)", color: payment === "direct" ? "var(--white)" : "var(--ink)" }} onClick={() => setPayment("direct")}>Direct pay</button>
            </div>
          </div>

          <div className="field"><input className="input" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} /></div>
          <div className="field"><input className="input" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>

          {status === "error" && <p style={{ color: "#B33", fontSize: 13, marginBottom: 12 }}>{errorMsg}</p>}

          <button className="btn-primary" style={{ width: "100%" }} disabled={!slot || !name || !email || status === "booking"} onClick={handleBook}>
            {status === "booking" ? "Booking…" : slot ? `Confirm ${DAY_LABELS[day]} at ${slot}` : "Select a time to continue"}
          </button>
        </div>

        <div className="card tint">
          <h3 className="h3" style={{ fontSize: 17 }}>Have a question first?</h3>
          <p style={{ fontSize: 14, color: "var(--ink-soft)", marginBottom: 16 }}>
            Send our intake team a message from the Contact page and we'll reply within one
            business day.
          </p>
        </div>
      </section>
    </>
  );
}
