import React from 'react';
import { motion } from 'framer-motion';
import { Cake } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Cake className="h-8 w-8 text-rose-600" />
            <span className="text-2xl font-serif font-bold text-gray-800">Délice</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['Inicio', 'Colección', 'Sobre Nosotros', 'Contacto'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-rose-600 font-medium transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;