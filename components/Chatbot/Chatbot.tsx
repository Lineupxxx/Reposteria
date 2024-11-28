import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { chatbotData, ChatbotQA } from './ChatbotData';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<ChatbotQA | null>(null);

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 bg-rose-600 text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl z-50"
          >
            <div className="p-4 bg-rose-600 text-white rounded-t-lg flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Asistente Virtual</h3>
                <p className="text-xs opacity-75">Powered by Landbot</p>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4">
              {!selectedQuestion && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-4 p-3 bg-rose-50 rounded-lg"
                >
                  <p className="text-sm text-gray-700">
                    ¡Hola! Soy tu asistente virtual implementado con Landbot. 
                    ¿En qué puedo ayudarte hoy?
                  </p>
                </motion.div>
              )}
              
              {selectedQuestion ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <button
                    onClick={() => setSelectedQuestion(null)}
                    className="text-rose-600 hover:underline flex items-center gap-2"
                  >
                    <span>←</span> Volver a preguntas
                  </button>
                  <div className="bg-rose-50 p-3 rounded-lg">
                    <p className="font-medium">{selectedQuestion.question}</p>
                  </div>
                  <motion.div 
                    className="bg-gray-100 p-3 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p>{selectedQuestion.answer}</p>
                  </motion.div>
                </motion.div>
              ) : (
                <div className="space-y-2">
                  {chatbotData.map((qa) => (
                    <motion.button
                      key={qa.id}
                      className="w-full text-left p-3 rounded-lg hover:bg-rose-50 transition-colors"
                      onClick={() => setSelectedQuestion(qa)}
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: qa.id * 0.1 }}
                    >
                      {qa.question}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:border-rose-500"
                />
                <motion.button 
                  className="p-2 bg-rose-600 text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;