import React from 'react';
import { motion } from 'framer-motion';
import { Cake } from 'lucide-react';

interface CupcakeButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CupcakeButton = ({ children, onClick, className = '' }: CupcakeButtonProps) => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.button
      className={`relative group ${className}`}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      <span className="flex items-center justify-center gap-2">
        <motion.span variants={iconVariants} className="inline-block">
          <Cake className="w-5 h-5" />
        </motion.span>
        {children}
      </span>
    </motion.button>
  );
};

export default CupcakeButton;