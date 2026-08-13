import { useEffect, useState } from "react";
import { api } from "../api.js";

const FALLBACK_EVENTS = [
  { _id: "1", title: "Mindful Mornings — group meditation", type: "Workshop", date: "2026-08-18T09:00:00" },
  { _id: "2", title: "Postpartum support circle", type: "Support group", date: "2026-08-24T18:00:00" },
  { _id: "3", title: "Understanding grief: community talk", type: "Event", date: "2026-09-02T17:30:00" },
];

export default function Community() {
  const [events, setEvents] = useState(FALLBACK_EVENTS);
  const [registered, setRegistered] = useState({});

  useEffect(() => {
    api.getEvents(true).then((data) => { if (data.length) setEvents(data); }).catch(() => {});
  }, []);

  const handleRegister = async (id) => {
    try {
      await api.registerForEvent(id);
    } catch {
      // demo mode without a live API — still reflect the reservation locally
    }
    setRegistered((r) => ({ ...r, [id]: true }));
  };

  return (
    <>
      <section className="section">
        <span className="eyebrow">Community &amp; Support</span>
        <h1 className="h1">Healing rarely happens alone.</h1>
      </section>

      <section className="section tight">
        <div className="card" style={{ maxWidth: 640 }}>
          <p className="testimonial">&ldquo;The grief circle here is the only room where I didn't have to explain myself.&rdquo;</p>
          <p style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 10 }}>— Community member, 2 years</p>
        </div>
      </section>

      <section className="section tight">
        <h2 className="h2" style={{ fontSize: 26 }}>Upcoming events &amp; workshops</h2>
        <div>
          {events.map((e) => (
            <div key={e._id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid var(--line)", flexWrap: "wrap", gap: 12 }}>
              <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
                <span className="mono" style={{ fontSize: 13, color: "var(--sage-deep)", width: 70 }}>
                  {new Date(e.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                </span>
                <div>
                  <div style={{ fontWeight: 600 }}>{e.title}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>{e.type}</div>
                </div>
              </div>
              <button className="btn-secondary" style={{ padding: "8px 16px", fontSize: 13 }} onClick={() => handleRegister(e._id)} disabled={!!registered[e._id]}>
                {registered[e._id] ? "Reserved ✓" : "Reserve a spot"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="section tight">
        <div className="grid-2">
          <div className="card tint">
            <h3 className="h3">Volunteer with us</h3>
            <p style={{ fontSize: 14, color: "var(--ink-soft)" }}>Peer supporters, event help, and admin volunteers are always welcome — training provided.</p>
          </div>
          <div className="card tint">
            <h3 className="h3">Partnerships</h3>
            <p style={{ fontSize: 14, color: "var(--ink-soft)" }}>We work alongside regional hospitals, universities, and mental health NGOs to widen access to care.</p>
          </div>
        </div>
      </section>
    </>
  );
}
