import { HiEnvelope, HiPhone, HiMapPin, HiArrowRight } from 'react-icons/hi2';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { FadeUp } from './AnimatedText';

const contactInfo = [
  { icon: HiEnvelope, label: 'Email', value: 'mohamedkchaini81@gmail.com', href: 'mailto:mohamedkchaini81@gmail.com' },
  { icon: HiPhone, label: 'Phone', value: '+216 54 665 800', href: 'tel:+21654665800' },
  { icon: HiMapPin, label: 'Location', value: 'Sfax, Tunisia', href: null },
];

const socials = [
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-khchaini/' },
  { icon: SiGithub, label: 'GitHub', href: 'https://github.com/mohamedkchaini81-source' },
  { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61585805986470' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/21654665800' },
  { icon: HiEnvelope, label: 'Mail', href: 'mailto:mohamedkchaini81@gmail.com' },
  { icon: SiInstagram, label: 'Instagram', href: 'https://www.instagram.com/mohamed_kchaini?igsh=ZXJ4am5mNWYweTdq' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-10 bg-[#0d0d0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left — headline + tagline */}
          <FadeUp delay={0.1}>
            <div className="flex flex-col gap-6">
              <h3 className="font-azonix text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                Let's Build<br />Something{' '}
                <span className="text-[#e8192c]">Meaningful</span>
              </h3>
              <p className="text-[#9ca3af] text-base leading-relaxed max-w-md">
                I'm currently open to internship opportunities, freelance projects,
                and creative collaborations. Feel free to reach out.
              </p>
              <a
                href="mailto:mohamedkchaini81@gmail.com"
                className="inline-flex items-center gap-2 w-fit px-6 py-3 bg-[#e8192c] text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-[#c8101f] transition-all duration-200 glow-red"
              >
                Say Hello <HiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeUp>

          {/* Right — contact info + socials */}
          <div className="flex flex-col gap-8">

            {/* Contact info cards */}
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactInfo.map(info => (
                  <div
                    key={info.label}
                    className="flex flex-col gap-3 p-5 bg-[#131315] border border-white/5 rounded-xl hover:border-[#e8192c]/30 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-[#e8192c]/10 border border-[#e8192c]/20 rounded-lg">
                      <info.icon className="w-5 h-5 text-[#e8192c]" />
                    </div>
                    <div>
                      <div className="text-[#9ca3af] text-xs uppercase tracking-wider font-semibold mb-1">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white text-sm font-medium hover:text-[#e8192c] transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-white text-sm font-medium">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Socials */}
            <FadeUp delay={0.3}>
              <div className="p-5 bg-[#131315] border border-white/5 rounded-xl">
                <p className="text-[#9ca3af] text-xs uppercase tracking-wider font-semibold mb-4">
                  Find me on
                </p>
                <div className="flex flex-wrap gap-3">
                  {socials.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center gap-2 px-4 py-2.5 bg-[#0d0d0e] border border-white/5 rounded-lg text-[#9ca3af] text-sm font-medium hover:border-[#e8192c]/40 hover:text-[#e8192c] transition-all duration-200"
                    >
                      <s.icon className="w-4 h-4" />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </div>
    </section>
  );
}
