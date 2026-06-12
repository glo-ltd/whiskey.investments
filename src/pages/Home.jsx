import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from '../components/sections/Nav.jsx';
import Hero from '../components/sections/Hero.jsx';
import WhyWeExist from '../components/sections/WhyWeExist.jsx';
import WhyWhiskey from '../components/sections/WhyWhiskey.jsx';
import HowItWorks from '../components/sections/HowItWorks.jsx';
import Calculator from '../components/sections/Calculator.jsx';
import FeaturedCask from '../components/sections/FeaturedCask.jsx';
import Distillery from '../components/sections/Distillery.jsx';
import TrustProof from '../components/sections/TrustProof.jsx';
import Faq from '../components/sections/Faq.jsx';
import Footer from '../components/sections/Footer.jsx';
import ReserveModal from '../components/modals/ReserveModal.jsx';
import GuideModal from '../components/modals/GuideModal.jsx';
import Chatbot from '../components/modals/Chatbot.jsx';

function wi2SetupReveals() {
  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !('IntersectionObserver' in window)
  )
    return;

  const els = document.querySelectorAll(
    '.wi-grid-3 > *, .wi-grid-4 > *, .wi-compare-grid > *, .wi-cask-grid > *, .wi-gnd-grid > *, .wi-faq-grid > *, .wi-calc2-grid > *'
  );

  if (!els.length) {
    setTimeout(wi2SetupReveals, 150);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        en.target.classList.add('wi-in');
        setTimeout(() => {
          en.target.classList.remove('wi-reveal', 'wi-in');
          en.target.style.removeProperty('--reveal-delay');
        }, 950);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
  );

  els.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    const idx = Array.prototype.indexOf.call(el.parentElement.children, el);
    el.style.setProperty('--reveal-delay', Math.min(idx, 5) * 70 + 'ms');
    el.classList.add('wi-reveal');
    io.observe(el);
  });
}

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(wi2SetupReveals, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Whiskey.Investments: The future of Irish Whiskey Cask Investment</title>
        <meta name="description" content="Reserve AB2 Irish Single Malt whiskey casks from Great Northern Distillery from £2,000. Second-fill, bonded and insured in Ireland. 10% deposit, distillery certificate included." />
      </Helmet>
      <Nav />
      <main>
        <Hero />
        <WhyWeExist />
        <WhyWhiskey />
        <HowItWorks />
        <Calculator />
        <FeaturedCask />
        <Distillery />
        <TrustProof />
        <Faq />
      </main>
      <Footer />
      <ReserveModal />
      <GuideModal />
      <Chatbot />
    </>
  );
}
