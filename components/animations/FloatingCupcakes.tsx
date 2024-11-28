import React from 'react';
import { motion } from 'framer-motion';
import { Cake } from 'lucide-react';

const FloatingCupcakes = () => {
  const cupcakes = Array.from({ length: 5 });
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {cupcakes.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-rose-300/20"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: -100,
            rotate: 0,
            opacity: 0.3
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360,
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        >
          <Cake className="w-8 h-8" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCupcakes;