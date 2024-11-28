import { motion } from 'framer-motion';
import { Cake } from 'lucide-react';

const AnimatedTitle = () => {
  const title = "Arte en Cada Bocado";
  const words = title.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: i * 0.1,
      },
    }),
    hover: {
      scale: 1.2,
      rotate: [0, -5, 5, 0],
      color: ['#ffffff', '#FFD700', '#ffffff'],
      textShadow: [
        '0 0 5px rgba(255,215,0,0.5)',
        '0 0 20px rgba(255,215,0,0.8)',
        '0 0 5px rgba(255,215,0,0.5)',
      ],
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const cupcakeVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
    float: {
      y: [0, -10, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    glow: {
      filter: [
        'drop-shadow(0 0 5px rgba(255,215,0,0.7))',
        'drop-shadow(0 0 15px rgba(255,215,0,0.9))',
        'drop-shadow(0 0 5px rgba(255,215,0,0.7))',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col items-center justify-center space-y-4"
    >
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 perspective-1000">
        {words.map((word, wordIndex) => (
          <motion.div
            key={wordIndex}
            className="flex items-center"
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                custom={letterIndex + wordIndex * 5}
                variants={letterVariants}
                whileHover="hover"
                className="inline-block text-5xl md:text-7xl font-serif text-white cursor-pointer transform-style-3d"
                style={{ 
                  textShadow: '0 0 10px rgba(255,215,0,0.3)',
                  fontFamily: 'Cormorant Garamond, serif'
                }}
              >
                {letter}
              </motion.span>
            ))}
            {wordIndex < words.length - 1 && (
              <span className="text-5xl md:text-7xl text-white">&nbsp;</span>
            )}
            {wordIndex === 1 && (
              <motion.div
                className="inline-block ml-4"
                initial="initial"
                animate={['animate', 'float', 'glow']}
                variants={cupcakeVariants}
              >
                <Cake className="w-12 h-12 text-yellow-400" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};


export default AnimatedTitle;