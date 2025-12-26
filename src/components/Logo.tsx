import { motion } from 'framer-motion';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {/* Logo Icon */}
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-80" />
        <div className="absolute inset-0 rounded-xl bg-gradient-primary blur-lg opacity-40" />
        <svg
          viewBox="0 0 40 40"
          className="relative w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagon shape */}
          <path
            d="M20 4L35 12V28L20 36L5 28V12L20 4Z"
            fill="url(#logoGradient)"
            stroke="hsl(210 40% 98% / 0.3)"
            strokeWidth="1"
          />
          {/* Inner D shape */}
          <path
            d="M14 12H22C26.4183 12 30 15.5817 30 20C30 24.4183 26.4183 28 22 28H14V12Z"
            fill="none"
            stroke="hsl(210 40% 98%)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Accent dot */}
          <circle cx="22" cy="20" r="3" fill="hsl(210 40% 98%)" />
          <defs>
            <linearGradient id="logoGradient" x1="5" y1="4" x2="35" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(239 84% 67%)" />
              <stop offset="1" stopColor="hsl(271 81% 56%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight">
          <span className="gradient-text">Digital</span>
          <span className="text-foreground">Seba</span>
        </span>
        <span className="text-[10px] text-muted-foreground tracking-widest uppercase -mt-1">
          Premium Digital Store
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;
