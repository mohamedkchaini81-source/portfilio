import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { HiArrowDownTray } from 'react-icons/hi2';

const experiences = [
  {
    period: '2026 – Present',
    role: 'Webmaster',
    company: 'IEEE IES/PES ISIMS Student Branch Chapter',
    type: 'Volunteer / Technical',
    points: [
      'Developed and deployed the official chapter website',
      'Managed website updates and technical improvements',
      'Maintained the chapter\'s online presence and digital identity',
    ],
    active: true,
  },
  {
    period: '2026 – Present',
    role: 'OGV Member',
    company: 'AIESEC',
    type: 'Volunteer',
    points: [
      'Promoted international volunteer opportunities to students',
      'Supported students in applying for global exchange programs',
      'Worked in a collaborative international environment',
    ],
    active: true,
  },
];

const education = {
  institution: 'Higher Institute of Computer Science and Multimedia of Sfax',
  degree: 'Computer Science / Big Data',
  location: 'Sfax, Tunisia',
  period: '2023 – 2026',
};

const certifications = [
  { name: 'NVIDIA Deep Learning Certificate', status: 'Completed' },
  { name: 'Oracle AI Foundation Certification', status: 'In Progress' },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Experience" subtitle="Professional activities, education, and certifications." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-7">
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8 flex items-center gap-3">
              <span className="w-5 h-[1px] bg-[#e8192c]" />
              Professional
            </h3>
            <div className="relative border-l border-white/10 ml-3 pl-8 space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 ${
                    exp.active ? 'bg-[#e8192c] border-[#e8192c]' : 'bg-[#0a0a0b] border-white/20'
                  }`} />
                  {exp.active && (
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#e8192c]/40 animate-ping" />
                  )}

                  <div className="bg-[#131315] border border-white/5 rounded-xl p-6 hover:border-[#e8192c]/20 transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <span className="text-[#e8192c] text-xs font-bold uppercase tracking-wider">{exp.period}</span>
                      <span className="px-2 py-0.5 bg-white/5 text-[#9ca3af] text-xs rounded font-medium">{exp.type}</span>
                    </div>
                    <h4 className="font-azonix text-white text-lg mb-1">{exp.role}</h4>
                    <p className="text-[#9ca3af] text-sm font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2 text-[#9ca3af] text-sm">
                          <span className="w-1 h-1 rounded-full bg-[#e8192c] mt-2 flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-3">
                <span className="w-5 h-[1px] bg-[#e8192c]" />
                Education
              </h3>
              <div className="bg-[#131315] border border-white/5 rounded-xl p-6 hover:border-[#e8192c]/20 transition-colors duration-300">
                <span className="text-[#e8192c] text-xs font-bold uppercase tracking-wider">{education.period}</span>
                <h4 className="font-azonix text-white text-base mt-1 mb-1">{education.degree}</h4>
                <p className="text-[#9ca3af] text-sm">{education.institution}</p>
                <p className="text-[#9ca3af] text-xs mt-1">{education.location}</p>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-3">
                <span className="w-5 h-[1px] bg-[#e8192c]" />
                Certifications
              </h3>
              <div className="flex flex-col gap-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 bg-[#131315] border border-white/5 rounded-xl px-5 py-4 hover:border-[#e8192c]/20 transition-colors">
                    <span className="text-[#d1d5db] text-sm font-medium">{cert.name}</span>
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
                      cert.status === 'Completed'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-[#e8192c]/10 text-[#e8192c] border border-[#e8192c]/20'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <a
                href="/cv.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#e8192c] text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-[#c8101f] transition-all duration-200 glow-red"
              >
                <HiArrowDownTray className="w-5 h-5" />
                Download Full CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
