import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Total loading animation time: ~3.8s, then fade out
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 600); // wait for exit animation
    }, 5800);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(circle at center, rgba(193,22,42,0.22), transparent 35%), linear-gradient(135deg, #050505 0%, #111111 45%, #000000 100%)',
          }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
              maskImage: 'radial-gradient(circle at center, black, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 70%)',
            }}
          />

          {/* Red glow blob */}
          <div
            className="absolute w-[480px] h-[480px] rounded-full pointer-events-none"
            style={{
              background: 'rgba(193,22,42,0.2)',
              filter: 'blur(100px)',
              animation: 'pulseGlow 2.5s ease-in-out infinite',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center" style={{ animation: 'contentEnter 1s ease forwards' }}>

            {/* SVG Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1792 2400"
              style={{
                width: 'min(280px, 60vw)',
                height: 'auto',
                filter: 'drop-shadow(0 0 35px rgba(193,22,42,0.45))',
                animation: 'logoFloat 3s ease-in-out infinite',
              }}
            >
              <g>
                <path
                  d="M1723.03,1085.9l-285.04,309.7c99.76,119.81,199.51,239.63,299.27,359.44-66.4,1.17-132.81,2.33-199.21,3.5-43.01-43.64-87.38-92.11-131.93-145.71-28.16-33.88-54.26-67.24-78.43-99.78-78.66,82.57-157.31,165.14-235.97,247.72-31.62.49-63.25.98-94.87,1.47v-124.59l523.27-551.75h202.9Z"
                  style={{
                    stroke: '#ffffff',
                    strokeWidth: 9,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeDasharray: 3800,
                    strokeDashoffset: 3800,
                    fill: 'transparent',
                    animation: 'drawLogo 3.5s ease forwards, fillLogoWhite 1.2s ease forwards 2.5s',
                  }}
                />
                <path
                  d="M1153.48,1085.9c-2.24,25.05-4.48,50.1-6.72,75.15l-424.77,465.61-437.46-465.62c-2.24-25.05-4.49-50.09-6.73-75.14h153.07l285.76,312.73,290.91-312.73h145.95Z"
                  style={{
                    stroke: '#c1162a',
                    strokeWidth: 9,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeDasharray: 3800,
                    strokeDashoffset: 3800,
                    fill: 'transparent',
                    filter: 'drop-shadow(0 0 14px rgba(193,22,42,0.8))',
                    animation: 'drawLogo 3.5s ease forwards, fillLogoRed 1.2s ease forwards 2.5s',
                  }}
                />
                <polygon
                  points="441.58 1755.16 277.81 1762.26 277.87 1221.17 439.81 1397.33 441.58 1755.16"
                  style={{
                    stroke: '#c1162a',
                    strokeWidth: 9,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeDasharray: 3800,
                    strokeDashoffset: 3800,
                    fill: 'transparent',
                    filter: 'drop-shadow(0 0 14px rgba(193,22,42,0.8))',
                    animation: 'drawLogo 3.5s ease forwards 0.2s, fillLogoRed 1.2s ease forwards 2.65s',
                  }}
                />
                <path
                  d="M996.85,1388.47c53.41-55.77,106.81-111.53,160.22-167.3l-8.97,190.4-151.25,158.45v-181.54Z"
                  style={{
                    stroke: '#c1162a',
                    strokeWidth: 9,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeDasharray: 3800,
                    strokeDashoffset: 3800,
                    fill: 'transparent',
                    filter: 'drop-shadow(0 0 14px rgba(193,22,42,0.8))',
                    animation: 'drawLogo 3.5s ease forwards 0.35s, fillLogoRed 1.2s ease forwards 2.8s',
                  }}
                />
              </g>
            </svg>

            {/* Text */}
            <div
              style={{
                marginTop: 28,
                opacity: 0,
                transform: 'translateY(18px)',
                animation: 'textReveal 0.9s ease forwards 3.1s',
                textAlign: 'center',
              }}
            >
              <h1 style={{ color: '#ffffff', fontSize: 'clamp(20px,4vw,32px)', letterSpacing: '0.22em', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'Urbanist, sans-serif' }}>
                Mohamed Khchaini
              </h1>
              <p style={{ marginTop: 10, color: 'rgba(255,255,255,0.6)', fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: 'Urbanist, sans-serif' }}>
                Creative Developer Portfolio
              </p>
            </div>

            {/* Progress bar */}
            <div
              style={{
                width: 'min(300px, 70vw)',
                height: 3,
                marginTop: 30,
                background: 'rgba(255,255,255,0.12)',
                borderRadius: 100,
                overflow: 'hidden',
                opacity: 0,
                animation: 'textReveal 0.8s ease forwards 1.7s',
              }}
            >
              <div
                style={{
                  width: 0,
                  height: '100%',
                  background: 'linear-gradient(90deg, #c1162a, #ffffff, #c1162a)',
                  borderRadius: 'inherit',
                  animation: 'loadingBar 1.8s ease forwards 1.75s',
                }}
              />
            </div>
          </div>

          {/* Keyframes */}
          <style>{`
            @keyframes drawLogo { to { stroke-dashoffset: 0; } }
            @keyframes fillLogoWhite { to { fill: #ffffff; } }
            @keyframes fillLogoRed { to { fill: #c1162a; } }
            @keyframes contentEnter {
              from { opacity: 0; transform: scale(0.92) translateY(20px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
            @keyframes logoFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
            }
            @keyframes textReveal { to { opacity: 1; transform: translateY(0); } }
            @keyframes loadingBar { to { width: 100%; } }
            @keyframes pulseGlow {
              0%, 100% { transform: scale(0.9); opacity: 0.5; }
              50% { transform: scale(1.15); opacity: 1; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
