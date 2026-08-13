export default function Privacy() {
  return (
    <section className="section" style={{ maxWidth: 760 }}>
      <span className="eyebrow">Privacy &amp; Policies</span>
      <h1 className="h1" style={{ fontSize: 40 }}>Privacy &amp; Policies</h1>

      <h2 className="h3">Confidentiality statement</h2>
      <p className="body-text">
        Everything shared in session is confidential and protected by law and professional
        ethics codes. Limited exceptions exist for imminent risk of harm to yourself or others,
        suspected abuse of a minor or dependent adult, and court orders — your clinician will
        review these with you at intake.
      </p>

      <h2 className="h3" style={{ marginTop: 28 }}>HIPAA &amp; GDPR compliance</h2>
      <p className="body-text">
        MindHarbor is a HIPAA-covered entity: we maintain administrative, physical, and
        technical safeguards for all protected health information, and our telehealth platform
        is end-to-end encrypted. For clients in jurisdictions covered by GDPR, we honor rights
        to access, correct, and delete personal data on request.
      </p>

      <h2 className="h3" style={{ marginTop: 28 }}>Terms of service &amp; privacy policy</h2>
      <p className="body-text">
        By booking an appointment, you agree to our cancellation policy (24-hour notice),
        billing terms, and telehealth consent. Full legal terms and our detailed privacy policy
        are available on request from our front desk or by secure message through the Contact
        page.
      </p>
    </section>
  );
}
