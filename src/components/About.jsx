import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FadeUp } from './AnimatedText';



export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-10 bg-[#0d0d0e] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="About Me" />

        <div className="grid grid-cols-1 gap-12 items-start">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <FadeUp delay={0.1}>
              <p className="text-[#d1d5db] text-base md:text-lg leading-relaxed">
                I am a Computer Science / Big Data student at <span className="text-white font-semibold">ISIMS Sfax</span> with
                strong interests in web development, mobile development, artificial intelligence,
                UI/UX design, and digital media. I combine design thinking, frontend development,
                backend logic, and creative media to build complete digital experiences.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-[#9ca3af] text-base leading-relaxed">
                My approach is rooted in precision — eliminating noise to focus on what matters:
                clean code, intuitive interfaces, and impactful results. Whether it's a mobile
                app, a web platform, or a visual identity, I bring the same level of craft and
                attention to detail to every project.
              </p>
            </FadeUp>

            
            <FadeUp delay={0.4}>
              <div className="flex flex-wrap gap-3 mt-2">
                {['Arabic: Native', 'French: Professional', 'English: Professional'].map(lang => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-[#131315] border border-white/10 text-[#d1d5db] text-sm rounded-lg font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}


































































