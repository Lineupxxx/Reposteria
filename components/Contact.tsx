import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para hacer realidad tus dulces momentos especiales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Phone, title: 'Teléfono', content: '+34 123 456 789' },
            { icon: Mail, title: 'Email', content: 'info@delice.com' },
            { icon: MapPin, title: 'Dirección', content: 'Calle Principal 123, Madrid' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-gray-50"
            >
              <item.icon className="w-8 h-8 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-colors"
            />
          </div>
          <textarea
            placeholder="Mensaje"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-colors"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition-colors"
          >
            Enviar Mensaje
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;