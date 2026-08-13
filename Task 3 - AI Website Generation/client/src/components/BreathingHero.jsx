export default function BreathingHero() {
  return (
    <div
      style={{ position: "relative", height: 340, display: "flex", alignItems: "center", justifyContent: "center" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 400" style={{ width: "100%", maxWidth: 380, overflow: "visible" }}>
        <circle className="breathe-ring d3" cx="200" cy="200" r="160" fill="#6E8F6B" opacity="0.12" />
        <circle className="breathe-ring d2" cx="200" cy="200" r="120" fill="#6E8F6B" opacity="0.18" />
        <circle className="breathe-ring" cx="200" cy="200" r="82" fill="#6E8F6B" opacity="0.35" />
        <circle cx="200" cy="200" r="46" fill="#52704F" />
        <path d="M182 200 l12 14 l24 -30" stroke="#FFFDF9" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}
