import {
  SiReact, SiFlutter, SiDart, SiJavascript, SiHtml5,
  SiPython, SiFirebase, SiGit, SiFigma,
} from 'react-icons/si';
import {
  HiPhoto, HiFilm, HiPaintBrush,
} from 'react-icons/hi2';
import { VscCode } from 'react-icons/vsc';
import {
  HiLightBulb, HiUsers, HiChatBubbleLeft, HiSparkles,
  HiBolt, HiClipboardDocument,
} from 'react-icons/hi2';
import { MdApi } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';

const devSkills = [
  { name: 'React', icon: SiReact },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Dart', icon: SiDart },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: HiPaintBrush },
  { name: 'Python', icon: SiPython },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'API Integration', icon: MdApi },
  { name: 'Git', icon: SiGit },
  { name: 'VS Code', icon: VscCode },
];

const designSkills = [
  { name: 'UI/UX Design', icon: SiFigma },
  { name: 'Graphic Design', icon: HiSparkles },
  { name: 'Photoshop', icon: HiPhoto },
  { name: 'Illustrator', icon: HiPaintBrush },
  { name: 'Premiere Pro', icon: HiFilm },
  { name: 'Branding', icon: HiLightBulb },
  { name: 'Social Media', icon: HiChatBubbleLeft },
  { name: 'Video Editing', icon: HiBolt },
];

const softSkills = [
  { name: 'Problem Solving', icon: HiLightBulb },
  { name: 'Teamwork', icon: HiUsers },
  { name: 'Communication', icon: HiChatBubbleLeft },
  { name: 'Creativity', icon: HiSparkles },
  { name: 'Fast Learning', icon: HiBolt },
  { name: 'Project Org.', icon: HiClipboardDocument },
];

function SkillGroup({ title, skills, baseDelay = 0 }) {
  return (
    <div className="mb-12">
      <h3 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-3">
        <span className="w-5 h-[1px] bg-[#e8192c]" />
        {title}
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {skills.map((s, i) => (
          <SkillCard key={s.name} name={s.name} icon={s.icon} delay={baseDelay + i * 0.05} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Skills" subtitle="Technologies, tools, and capabilities I bring to every project." />
        <SkillGroup title="Development" skills={devSkills} baseDelay={0} />
        <SkillGroup title="Design & Media" skills={designSkills} baseDelay={0.1} />
        <SkillGroup title="Soft Skills" skills={softSkills} baseDelay={0.1} />
      </div>
    </section>
  );
}
