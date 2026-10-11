import {
  HiGlobeAlt, HiDevicePhoneMobile, HiPencilSquare, HiPhoto,
  HiFilm, HiChartBar, HiTag, HiShare,
} from 'react-icons/hi2';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Website Development',
    description: 'Modern, responsive websites built with React, clean architecture, and optimized performance.',
    icon: HiGlobeAlt,
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps with Flutter and Dart, integrated with Firebase and APIs.',
    icon: HiDevicePhoneMobile,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered interface design with clean layouts, intuitive flows, and premium visuals.',
    icon: HiPencilSquare,
  },
  {
    title: 'Graphic Design',
    description: 'Professional visual design using Photoshop and Illustrator for print and digital media.',
    icon: HiPhoto,
  },
  {
    title: 'Video Editing',
    description: 'High-quality video production and editing with Adobe Premiere Pro for all formats.',
    icon: HiFilm,
  },
  {
    title: 'Dashboard Design',
    description: 'Clean, data-rich dashboard interfaces with analytics cards, charts, and visualization.',
    icon: HiChartBar,
  },
  {
    title: 'Branding',
    description: 'Complete brand identity design including logo, color palette, typography, and guidelines.',
    icon: HiTag,
  },
  {
    title: 'Social Media Design',
    description: 'Creative visual content and campaigns designed for digital platforms and social media.',
    icon: HiShare,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-10 bg-[#0d0d0e] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Services"
          subtitle="What I bring to the table — from code to design to digital media."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
