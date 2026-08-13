const TEAM = [
  { name: "Dr. Amara Okonjo", role: "Founder & Clinical Director, PsyD", color: "#6E8F6B", initials: "AO" },
  { name: "Dr. Liang Chen", role: "Psychiatrist, MD", color: "#3D5A63", initials: "LC" },
  { name: "Priya Raman, LMFT", role: "Couples & Family Therapist", color: "#C99A3E", initials: "PR" },
  { name: "Marcus Webb, LCSW", role: "Individual Therapist", color: "#52704F", initials: "MW" },
];

export default function About() {
  return (
    <>
      <section className="section">
        <span className="eyebrow">About MindHarbor</span>
        <h1 className="h1">Built by clinicians who were tired of care that felt rushed.</h1>
        <p className="body-text">
          MindHarbor started in 2026 when three clinicians, frustrated by 15-minute med checks
          and month-long waitlists, opened a single small office with one rule: every person
          gets enough time to actually be heard. We've since grown to a full practice — but
          that rule hasn't changed.
        </p>
      </section>

      <section className="section tight">
        <div className="grid-2">
          <div className="card tint">
            <h3 className="h3">Our mission</h3>
            <p style={{ fontSize: 15, color: "var(--ink-soft)" }}>
              To make evidence-based mental health care approachable, unhurried, and available
              to as many people as possible — regardless of diagnosis or background.
            </p>
          </div>
          <div className="card tint">
            <h3 className="h3">Our vision</h3>
            <p style={{ fontSize: 15, color: "var(--ink-soft)" }}>
              A future where reaching out for mental health support feels as ordinary, and as
              stigma-free, as seeing a doctor for a physical checkup.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <span className="eyebrow">Our team</span>
        <h2 className="h2">Meet a few of our clinicians</h2>
        <div className="grid-3" style={{ marginTop: 8 }}>
          {TEAM.map((t) => (
            <div key={t.name} className="card">
              <div className="avatar" style={{ background: t.color }}>{t.initials}</div>
              <h3 className="h3" style={{ fontSize: 17 }}>{t.name}</h3>
              <p style={{ fontSize: 14, color: "var(--ink-soft)" }}>{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section tight">
        <span className="eyebrow">Certifications &amp; values</span>
        <div style={{ marginTop: 6 }}>
          <span className="pill">HIPAA compliant</span>
          <span className="pill">APA-aligned practice standards</span>
          <span className="pill">State-licensed clinicians</span>
          <span className="pill">Joint Commission accredited</span>
          <span className="pill">Culturally responsive care training</span>
        </div>
        <div className="grid-3" style={{ marginTop: 24 }}>
          <div>
            <h3 className="h3" style={{ fontSize: 17 }}>Dignity first</h3>
            <p style={{ fontSize: 14, color: "var(--ink-soft)" }}>You are never just a diagnosis on a chart.</p>
          </div>
          <div>
            <h3 className="h3" style={{ fontSize: 17 }}>Evidence-based</h3>
            <p style={{ fontSize: 14, color: "var(--ink-soft)" }}>CBT, DBT, EMDR, and psychiatry grounded in research.</p>
          </div>
          <div>
            <h3 className="h3" style={{ fontSize: 17 }}>Radical accessibility</h3>
            <p style={{ fontSize: 14, color: "var(--ink-soft)" }}>Sliding scale fees, telehealth, and multilingual staff.</p>
          </div>
        </div>
      </section>
    </>
  );
}
