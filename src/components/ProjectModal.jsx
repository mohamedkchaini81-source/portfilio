import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { SiGithub } from 'react-icons/si';

export default function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;
  const { title, category, description, tech, role, demo, github, inProgress, image } = project;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#131315] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Top red accent */}
          <div className="h-[3px] w-full bg-[#e8192c] rounded-t-2xl" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[#9ca3af] hover:text-white transition-all z-10"
          >
            <HiXMark className="w-5 h-5" />
          </button>

          {/* Image */}
          {image && (
            <div className="h-56 md:h-64 overflow-hidden bg-[#0d0d0e]">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col gap-6">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#e8192c]/10 border border-[#e8192c]/20 text-[#e8192c] text-xs font-bold uppercase tracking-wider rounded">
                  {category}
                </span>
                {inProgress && (
                  <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    In Progress
                  </span>
                )}
              </div>
              <h2 className="font-azonix text-2xl md:text-3xl text-white uppercase mb-1">{title}</h2>
              <p className="text-[#9ca3af] text-sm font-medium">Role: <span className="text-white">{role}</span></p>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">About</h4>
              <p className="text-[#9ca3af] text-sm leading-relaxed">{description}</p>
            </div>

            {/* Tech stack */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {tech.map(t => (
                  <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 text-[#d1d5db] text-xs rounded-lg font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2 border-t border-white/5">
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#e8192c] text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-[#c8101f] transition-colors"
                >
                  <HiArrowTopRightOnSquare className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 border border-white/10 text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:border-white/30 transition-colors"
                >
                  <SiGithub className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
              {!demo && !github && (
                <p className="text-[#4b5563] text-sm italic">No links available yet.</p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
