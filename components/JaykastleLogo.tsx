'use client';

import React from 'react';

interface JaykastleLogoProps {
  className?: string;
  variant?: 'full' | 'emblem' | 'wordmark';
  theme?: 'dark' | 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const JaykastleLogo: React.FC<JaykastleLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  const emblemSizes = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  };

  const currentHeightClass = variant === 'emblem' ? emblemSizes[size] : sizeClasses[size];

  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* Official Corporate Logo Image */}
      <img
        src="/Jaykastle.png"
        alt="Jaykastle Nigeria Limited Logo"
        className={`${currentHeightClass} w-auto object-contain drop-shadow-md select-none`}
      />
    </div>
  );
};

