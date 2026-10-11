import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-3">
        <span className="w-10 h-[2px] bg-[#e8192c]" />
        <h2 className="font-azonix text-3xl md:text-4xl text-white uppercase tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-[#9ca3af] text-base md:text-lg max-w-2xl ml-14">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
