import { motion } from 'framer-motion';

export default function SkillCard({ name, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, borderColor: 'rgba(232,25,44,0.6)' }}
      className="flex flex-col items-center justify-center gap-3 p-5 bg-[#131315] border border-white/5 rounded-xl group cursor-default transition-colors duration-300"
    >
      <div className="w-10 h-10 flex items-center justify-center text-[#9ca3af] group-hover:text-[#e8192c] transition-colors duration-300">
        {Icon && <Icon className="w-8 h-8" />}
      </div>
      <span className="text-[#d1d5db] text-xs font-semibold uppercase tracking-wider text-center leading-tight">
        {name}
      </span>
    </motion.div>
  );
}
