import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api.js";

const FALLBACK_ARTICLES = [
  { title: "5 grounding techniques for panic moments", tag: "Anxiety", slug: "grounding-techniques", excerpt: "When panic strikes, grounding techniques can help you reconnect with the present moment and regain control." },
  { title: "What actually happens in a first therapy session", tag: "Getting started", slug: "first-session", excerpt: "Your first therapy session isn’t about fixing everything at once — it’s about building trust and understanding." },
  { title: "Mindfulness isn't about clearing your mind — here's what it is", tag: "Mindfulness", slug: "mindfulness-basics", excerpt: "Mindfulness isn’t about emptying your thoughts — it’s about noticing them without judgment." },
  { title: "Supporting a partner through depression without losing yourself", tag: "Relationships", slug: "supporting-a-partner", excerpt: "Helping a partner with depression requires compassion — but also boundaries to protect your own well-being." },
];

const FAQS = [
  { q: "Do you accept insurance?", a: "Yes — we're in-network with most major insurers. We also offer direct-pay sliding-scale rates; our intake team will verify your benefits before your first session." },
  { q: "Is everything I share confidential?", a: "Sessions are protected under HIPAA. The only exceptions are situations involving imminent risk to yourself or others, which your clinician will explain during intake." },
  { q: "What happens in the first session?", a: "A 50–60 minute intake where your clinician learns your history and goals, and you decide together on a plan going forward — no obligation to continue." },
];

export default function Resources() {
  const [articles, setArticles] = useState(FALLBACK_ARTICLES);
  const [openFaq, setOpenFaq] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    api.getBlogPosts().then((data) => { if (data.length) setArticles(data); }).catch(() => {});
  }, []);

  return (
    <>
      <section className="section">
        <span className="eyebrow">Resources</span>
        <h1 className="h1">Guides, answers, and support — whether or not you're a client yet.</h1>
      </section>

      <section className="section tight">
        <h2 className="h2" style={{ fontSize: 26 }}>From the blog</h2>
        <div className="grid-2">
          {articles.map((a) => (
            <div key={a.slug} className="card" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span className="pill" style={{ alignSelf: "flex-start" }}>{a.tag}</span>
              <h3 className="h3" style={{ fontSize: 18, marginBottom: "0.2rem" }}>{a.title}</h3>
              <span style={{ fontSize: 14, marginBottom: "0.2rem" }}>{a.excerpt}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--sage-deep)", cursor: "pointer" }} onClick={() => navigate(`/blog/${a.slug}`)}>Read article →</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section tight">
        <h2 className="h2" style={{ fontSize: 26 }}>Frequently asked questions</h2>
        <div>
          {FAQS.map((f, i) => (
            <div key={f.q} className="faq-item">
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                {f.q}<span>{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <p style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 10 }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="section tight">
        <div className="emergency-strip">
          <div>
            <strong className="display" style={{ fontSize: 18 }}>Crisis &amp; emergency resources</strong>
            <div style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 4 }}>
              988 Suicide &amp; Crisis Lifeline (call/text, 24/7) · Crisis Text Line: text HOME to 741741 · Emergencies: call 911
            </div>
          </div>
          <Link className="crisis-btn" to="/contact">Contact our on-call team</Link>
        </div>
      </section>
    </>
  );
}
