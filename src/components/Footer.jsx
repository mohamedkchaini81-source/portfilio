import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { HiEnvelope } from 'react-icons/hi2';

const socials = [
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-khchaini/' },
  { icon: SiGithub, label: 'GitHub', href: 'https://github.com/mohamedkchaini81-source' },
  { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61585805986470' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/21654665800' },
  { icon: HiEnvelope, label: 'Mail', href: 'mailto:mohamedkchaini81@gmail.com' },
  { icon: SiInstagram, label: 'Instagram', href: 'https://www.instagram.com/mohamed_kchaini?igsh=ZXJ4am5mNWYweTdq' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0b] border-t border-white/5 py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#home">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="MK Portfolio" className="h-16 w-auto object-contain" />
          </a>
          <p className="text-[#4b5563] text-xs mt-1 uppercase tracking-widest">
            © 2026 Mohamed Khchaini
          </p>
        </div>

        <div className="flex gap-3">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/5 rounded-lg text-[#9ca3af] hover:border-[#e8192c]/40 hover:text-[#e8192c] transition-all duration-200"
            >
              <s.icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>

        <p className="text-[#4b5563] text-xs uppercase tracking-widest text-center md:text-right">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
