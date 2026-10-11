import { motion } from 'framer-motion';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { SiGithub } from 'react-icons/si';

export default function ProjectCard({ project, delay = 0, onViewDetails }) {
  const { title, category, description, tech, role, demo, github, inProgress, image } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col bg-[#131315] border border-white/5 rounded-xl overflow-hidden hover:border-[#e8192c]/40 transition-all duration-300"
    >
      {/* Top accent bar */}
      <div className="h-[2px] w-0 group-hover:w-full bg-[#e8192c] transition-all duration-500" />

      {/* Card visual header */}
      <div className="h-44 bg-gradient-to-br from-[#1a1a1d] to-[#0d0d0f] relative overflow-hidden flex items-center justify-center px-6">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <>
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e8192c]/5 rounded-full blur-3xl" />
            <h3 className="font-azonix text-lg md:text-xl text-white text-center z-10 uppercase leading-tight">
              {title}
            </h3>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow gap-4">
        {/* Category & Role */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="px-3 py-1 bg-[#e8192c]/10 border border-[#e8192c]/20 text-[#e8192c] text-xs font-bold uppercase tracking-wider rounded">
            {category}
          </span>
          <div className="flex items-center gap-2">
            {inProgress && (
              <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                In Progress
              </span>
            )}
            <span className="text-[#9ca3af] text-xs font-medium">{role}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#9ca3af] text-sm leading-relaxed flex-grow">{description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map(t => (
            <span key={t} className="px-2 py-1 bg-white/5 text-[#d1d5db] text-xs rounded font-medium">
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2 border-t border-white/5">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#e8192c] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#c8101f] transition-colors"
            >
              <HiArrowTopRightOnSquare className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border border-white/10 text-[#9ca3af] text-xs font-bold uppercase tracking-wider rounded hover:border-white/30 hover:text-white transition-colors"
            >
              <SiGithub className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
