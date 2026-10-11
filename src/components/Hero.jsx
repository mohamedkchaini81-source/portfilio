import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDownTray, HiArrowRight } from 'react-icons/hi2';
import { SlideUp } from './AnimatedText';

const rotatingTexts = [
  'Full-Stack Developer',
  'UI/UX Designer',
  'Big Data Student',
  'Graphic Designer',
  'Video Editor',
];

function RotatingText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = rotatingTexts[index];
    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c + 1);
      }, 90);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c - 1);
      }, 45);
    } else {
      setIsDeleting(false);
      setIndex(i => (i + 1) % rotatingTexts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <span className="text-[#e8192c]">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-10 max-w-7xl mx-auto relative overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Red glow blob */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#e8192c]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#e8192c]/5 blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center py-16 md:py-0">
        {/* Text side */}
        <div className="md:col-span-7 flex flex-col items-start gap-6 order-2 md:order-1">
          <SlideUp delay={0.1}>
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#e8192c]/40 bg-[#e8192c]/10 text-[#e8192c] text-xs font-bold uppercase tracking-[0.2em] rounded">
              <span className="w-2 h-2 rounded-full bg-[#e8192c] animate-pulse" />
              Open to Stage / Internship Opportunities
            </span>
          </SlideUp>

          <SlideUp delay={0.2}>
            <div className="text-[#9ca3af] text-sm font-semibold uppercase tracking-[0.3em]">
              Mohamed Khchaini
            </div>
          </SlideUp>

          <SlideUp delay={0.3}>
            <h1 className="font-azonix text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] uppercase">
              I am a<br />
              <span className="block min-h-[1.2em]">
                <RotatingText />
              </span>
            </h1>
          </SlideUp>

          <SlideUp delay={0.45}>
            <p className="text-[#9ca3af] text-base md:text-lg leading-relaxed max-w-xl">
              I'm a Computer Science / Big Data student at ISIMS Sfax, building modern websites,
              mobile apps, dashboards, UI/UX interfaces, and digital solutions.
            </p>
          </SlideUp>

          <SlideUp delay={0.55}>
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                download
                className="flex items-center gap-2 px-7 py-3.5 bg-[#e8192c] text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-[#c8101f] transition-all duration-200 glow-red"
              >
                <HiArrowDownTray className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="#projects"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded hover:border-[#e8192c] hover:text-[#e8192c] transition-all duration-200"
              >
                View Projects
                <HiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-7 py-3.5 border border-white/10 text-[#9ca3af] font-bold uppercase tracking-widest text-sm rounded hover:border-white/30 hover:text-white transition-all duration-200"
              >
                Contact Me
              </a>
            </div>
          </SlideUp>
        </div>

        {/* Image side */}
        <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
          <SlideUp delay={0.2}>
            <div className="relative w-[280px] md:w-[340px] lg:w-[380px]">
              {/* Corner accent decorations */}
              <div className="absolute -top-3 -left-3 w-14 h-14 border-t-2 border-l-2 border-[#e8192c] z-20" />
              <div className="absolute -bottom-3 -right-3 w-14 h-14 border-b-2 border-r-2 border-[#e8192c] z-20" />

              {/* Glow behind image */}
              <div className="absolute inset-0 bg-[#e8192c]/10 blur-2xl rounded-xl" />

              <div className="relative overflow-hidden rounded-xl border border-white/10 aspect-[0.8]">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src={`${import.meta.env.BASE_URL}persone.png`}
                  alt="Mohamed Khchaini"
                  className="w-full h-full object-cover"
                  onError={e => {
                    e.target.src =
                      'https://ui-avatars.com/api/?name=Mohamed+Khchaini&background=1a1a1b&color=e8192c&size=400&bold=true&font-size=0.4';
                  }}
                />
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
