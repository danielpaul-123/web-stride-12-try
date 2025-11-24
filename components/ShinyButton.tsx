import React from 'react';

interface ShinyButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({ text, onClick, className = '' }) => {
  return (
    <button className={`shiny-cta ${className}`} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};