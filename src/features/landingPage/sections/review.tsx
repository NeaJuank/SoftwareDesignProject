import React from "react";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      location: "Ecuador",
      rating: 5,
      comment:
        "Excelente servicio, el auto estaba impecable y el proceso de renta fue muy sencillo. Definitivamente volvería a rentar con ellos.",
      avatar:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      location: "Colombia",
      rating: 5,
      comment:
        "La atención al cliente es excepcional. Me ayudaron con todas mis dudas y el auto superó mis expectativas. Muy recomendable.",
      avatar:
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      id: 3,
      name: "Ana Martínez",
      location: "Panama",
      rating: 5,
      comment:
        "Perfecto para viajes familiares. El BMW X5 que rentamos fue ideal para nuestras vacaciones. Proceso rápido y confiable.",
      avatar:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros{" "}
            <span className="text-emerald-500">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de clientes satisfechos avalan la calidad de nuestros
            servicios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 left-8">
                <div className="bg-emerald-500 p-3 rounded-full">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="pt-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500">2,847</div>
                <div className="text-gray-600">Reseñas</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center text-3xl font-bold text-emerald-500">
                  4.9{" "}
                  <Star className="h-8 w-8 text-amber-400 fill-current ml-2" />
                </div>
                <div className="text-gray-600">Calificación</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500">98%</div>
                <div className="text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
