import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const products = [
  {
    id: 1,
    name: 'Macarons de Oro',
    description: 'Delicados macarons con toques dorados y sabores únicos',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80',
    details: 'Elaborados con almendra premium y decorados con oro comestible de 24 quilates.'
  },
  {
    id: 2,
    name: 'Tarta de Chocolate Belga',
    description: 'Elaborada con el más fino chocolate belga y decoración artesanal',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80',
    details: 'Tres capas de bizcocho de chocolate negro, relleno de ganache y decorado a mano.'
  },
  {
    id: 3,
    name: 'Éclairs Parisinos',
    description: 'Clásicos éclairs con un toque moderno y elegante',
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&q=80',
    details: 'Masa choux perfectamente horneada, rellena de crema pastelera y glaseado espejo.'
  }
];

const Products = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-luxury-cream" id="colección">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-luxury-brown mb-4">
            Nuestras Creaciones
          </h2>
          <p className="text-luxury-brown/80 max-w-2xl mx-auto font-sans">
            Cada pieza es una obra maestra creada con los ingredientes más selectos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              layoutId={`product-${product.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedId(product.id)}
              className="bg-white rounded-lg overflow-hidden shadow-luxury hover:shadow-xl transition-all duration-300 cursor-pointer group"
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <motion.div 
                className="p-6 bg-gradient-to-b from-white to-luxury-cream"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-serif text-luxury-brown mb-2">{product.name}</h3>
                <p className="text-luxury-brown/70 font-sans">{product.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                layoutId={`product-${selectedId}`}
                className="bg-white rounded-lg p-6 max-w-lg w-full"
                onClick={e => e.stopPropagation()}
              >
                {(() => {
                  const product = products.find(p => p.id === selectedId);
                  return (
                    <>
                      <img
                        src={product?.image}
                        alt={product?.name}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-2xl font-serif text-luxury-brown mb-2">{product?.name}</h3>
                      <p className="text-luxury-brown/70 mb-4 font-sans">{product?.description}</p>
                      <p className="text-luxury-brown font-sans">{product?.details}</p>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Products;