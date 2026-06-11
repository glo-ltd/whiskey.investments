/* global React, ReactDOM */
/* v2, composes the redesigned Whiskey.Investments landing page. Loaded last. */
const S2 = window.WI2Sections || {};

function WhiskeyAppV2() {
  return (
    <React.Fragment>
      <S2.Nav />
      <main>
        <S2.Hero />
        <S2.WhyWeExist />
        <S2.WhyWhiskey />
        <S2.HowItWorks />
        <S2.CrateCalculator />
        <S2.FeaturedCask />
        <S2.Distillery />
        <S2.TrustProof />
        <S2.Faq />
      </main>
      <S2.Footer />
      <S2.ReserveModal />
      <S2.GuideModal />
      <S2.Chatbot />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<WhiskeyAppV2 />);

/* ---------- Scroll-reveal: cards fade up as they enter the viewport ---------- */
function wi2SetupReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  const els = document.querySelectorAll(
    ".wi-grid-3 > *, .wi-grid-4 > *, .wi-compare-grid > *, .wi-cask-grid > *, .wi-gnd-grid > *, .wi-faq-grid > *, .wi-calc2-grid > *"
  );
  if (!els.length) { setTimeout(wi2SetupReveals, 150); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      en.target.classList.add("wi-in");
      /* hand transitions back to hover styles once revealed */
      setTimeout(() => {
        en.target.classList.remove("wi-reveal", "wi-in");
        en.target.style.removeProperty("--reveal-delay");
      }, 950);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });
  els.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return; /* skip what's already on screen */
    const idx = Array.prototype.indexOf.call(el.parentElement.children, el);
    el.style.setProperty("--reveal-delay", Math.min(idx, 5) * 70 + "ms");
    el.classList.add("wi-reveal");
    io.observe(el);
  });
}
setTimeout(wi2SetupReveals, 100);
