export interface ChatbotQA {
  id: number;
  question: string;
  answer: string;
}

export const chatbotData: ChatbotQA[] = [
  {
    id: 1,
    question: "¿Qué tipos de postres ofrecen?",
    answer: "Ofrecemos una amplia variedad de postres artesanales, incluyendo macarons, tartas, éclairs y pasteles personalizados."
  },
  {
    id: 2,
    question: "¿Hacen pasteles para eventos especiales?",
    answer: "Sí, realizamos pasteles personalizados para bodas, cumpleaños y todo tipo de celebraciones especiales."
  },
  {
    id: 3,
    question: "¿Tienen opciones sin gluten?",
    answer: "Sí, contamos con una selección de postres sin gluten elaborados en una zona específica para evitar contaminación cruzada."
  },
  {
    id: 4,
    question: "¿Cuál es el tiempo de antelación para pedidos especiales?",
    answer: "Recomendamos realizar pedidos especiales con al menos 1 semana de antelación para garantizar disponibilidad."
  },
  {
    id: 5,
    question: "¿Realizan envíos a domicilio?",
    answer: "Sí, ofrecemos servicio de entrega a domicilio en un radio de 25km desde nuestra ubicación."
  },
  {
    id: 6,
    question: "¿Qué ingredientes utilizan?",
    answer: "Utilizamos ingredientes premium de primera calidad, incluyendo chocolate belga, vainilla de Madagascar y frutos secos seleccionados."
  },
  {
    id: 7,
    question: "¿Tienen opciones veganas?",
    answer: "Sí, disponemos de una línea completa de postres veganos elaborados con ingredientes 100% vegetales."
  },
  {
    id: 8,
    question: "¿Cuál es su especialidad?",
    answer: "Nuestra especialidad son los macarons de oro y la tarta de chocolate belga, elaborados con técnicas artesanales francesas."
  },
  {
    id: 9,
    question: "¿Ofrecen degustaciones para eventos?",
    answer: "Sí, organizamos sesiones de degustación para eventos especiales como bodas, previa cita."
  },
  {
    id: 10,
    question: "¿Tienen servicio de catering?",
    answer: "Ofrecemos servicio de catering para eventos, con una selección personalizada de nuestros mejores postres."
  }
];