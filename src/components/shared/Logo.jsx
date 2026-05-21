import React, { useId } from 'react';

const Logo = ({ className = "h-8 w-auto", textClassName = "font-light", iconClassName = "w-8 h-8" }) => {
  const gradientId = useId().replace(/:/g, "");
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center justify-center">
        <svg className={`${iconClassName}`} viewBox="0 0 24 24">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#87CEEB" />
            </linearGradient>
          </defs>
          <path 
            d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" 
            fill={`url(#${gradientId})`}
          />
        </svg>
      </div>
      <span className={`text-sm ${textClassName} tracking-normal leading-none bg-gradient-to-r from-[#1e3a8a] to-[#87CEEB] bg-clip-text text-transparent inline-flex items-center`}>
        IT BUSINESS
      </span>
    </div>
  );
};

export default Logo;
