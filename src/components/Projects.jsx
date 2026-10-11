import { useState } from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const BASE = import.meta.env.BASE_URL;

const projects = [
  {
    title: 'CertifSender App',
    category: 'Mobile / Automation',
    description: 'Certificate sending application with Python backend, Dart frontend, and mail API integration for automated certificate distribution.',
    tech: ['Python', 'Dart', 'API Mail'],
    role: 'Developer',
    demo: null,
    github: 'https://github.com/mohamedkchaini81-source/certisend',
    image: `${BASE}certisend.png`,
  },
  {
    title: 'Scholatica App',
    category: 'Mobile App',
    description: 'Mobile application built with Flutter and Firebase for educational or school use, providing a seamless learning experience.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    role: 'Mobile Developer',
    demo: null,
    github: null,
    inProgress: true,
    image: `${BASE}scholatica.png`,
  },
  {
    title: 'Personal Portfolio',
    category: 'Web Design & Dev',
    description: 'Personal brand portfolio website designed and developed to showcase skills, projects, and creative identity with modern UI/UX.',
    tech: ['React', 'Tailwind CSS', 'UI/UX'],
    role: 'Designer & Developer',
    demo: null,
    github: null,
    image: `${BASE}portfilio.png`,
  },
  {
    title: 'IEEE IES/PES ISIMS Website',
    category: 'Official Chapter Website',
    description: 'Official website for IEEE IES/PES ISIMS Student Branch Chapter with dashboard and forms for chapter management.',
    tech: ['Web Development', 'Dashboard', 'Forms'],
    role: 'Webmaster',
    demo: 'https://ies-pes-isims.ieee.tn/',
    github: null,
    image: `${BASE}iespes.png`,
  },
  {
    title: 'T2ST Society Website',
    category: 'Company Website',
    description: 'Professional society/company website with form integration and modern digital presentation for T2ST.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Forms'],
    role: 'Web Developer',
    demo: 'http://t2stphotovoltaique.tn/',
    github: 'https://github.com/mohamedkchaini81-source/T2ST',
    image: `${BASE}t2st.png`,
  },
  {
    title: 'Solo Commerce',
    category: 'E-Commerce',
    description: 'Full e-commerce website with complete UI/UX design, frontend, and backend development including product management.',
    tech: ['React', 'MongoDB', 'Frontend', 'Backend', 'UI/UX'],
    role: 'Full-Stack Developer',
    demo: null,
    github: null,
    image: `${BASE}solo.png`,
    inProgress: true,
  },
  {
    title: 'Arduino Boom Barrier',
    category: 'Embedded Systems',
    description: 'Automated boom barrier system built with Arduino that opens and closes a gate when a car enters or exits. Uses sensors to detect vehicle presence and controls a servo motor to raise and lower the barrier arm automatically.',
    tech: ['Arduino', 'C++', 'Servo Motor', 'Sensors'],
    role: 'Embedded Systems Developer',
    demo: null,
    github: null,
    image: `${BASE}arduino-boom-barrier.jpg`,
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-10 bg-[#0d0d0e] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Projects"
          subtitle="Real work, real impact. A selection of projects across development, design, and digital media."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              delay={i * 0.07}
              onViewDetails={() => setSelected(p)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
