import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CupcakeButton from './animations/CupcakeButton';
import AnimatedTitle from './animations/AnimatedTitle';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Pastries"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <motion.div
        ref={ref}
        className="relative h-full flex items-center justify-center text-center px-4"
      >
        <div className="max-w-4xl">
          <AnimatedTitle />
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5 }}
          >
            Descubre nuestra exquisita colección de pasteles y postres artesanales
          </motion.p>
          <CupcakeButton className="bg-rose-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-rose-700 transition-colors">
            Explorar Colección
          </CupcakeButton>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;