import { motion } from 'framer-motion';

export default function ServiceCard({ title, description, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group p-6 bg-[#131315] border border-white/5 rounded-xl hover:border-[#e8192c]/30 transition-all duration-300 cursor-default"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-[#e8192c]/10 rounded-lg mb-5 group-hover:bg-[#e8192c]/20 transition-colors duration-300">
        {Icon && <Icon className="w-6 h-6 text-[#e8192c]" />}
      </div>
      <h3 className="font-azonix text-white text-base mb-2 uppercase">{title}</h3>
      <p className="text-[#9ca3af] text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
