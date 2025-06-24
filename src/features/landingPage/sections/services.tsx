import React from "react";
import { Shield, Clock, MapPin, Phone, Car, CreditCard } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Seguro Completo",
      description: "Cobertura total para tu tranquilidad durante el viaje",
      features: [
        "Seguro contra daños",
        "Protección de robo",
        "Asistencia 24/7",
      ],
    },
    {
      icon: Clock,
      title: "Servicio 24/7",
      description: "Disponible las 24 horas, los 7 días de la semana",
      features: ["Recogida nocturna", "Soporte telefónico", "Emergencias"],
    },
    {
      icon: MapPin,
      title: "Múltiples Ubicaciones",
      description: "Recoge y devuelve en cualquiera de nuestras sucursales",
      features: ["Aeropuertos", "Centros urbanos", "Hoteles principales"],
    },
    {
      icon: Phone,
      title: "Soporte Premium",
      description: "Atención personalizada de nuestros expertos",
      features: ["Chat en vivo", "Soporte telefónico", "Asistente personal"],
    },
    {
      icon: Car,
      title: "Flota Premium",
      description: "Vehículos de última generación y perfectamente mantenidos",
      features: [
        "Modelos recientes",
        "Mantenimiento regular",
        "Limpieza profunda",
      ],
    },
    {
      icon: CreditCard,
      title: "Pagos Flexibles",
      description: "Múltiples opciones de pago para tu comodidad",
      features: ["Tarjetas de crédito", "Paypal", "Transferencias"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-emerald-500">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una experiencia completa de renta de autos con servicios
            premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-blue-700 group-hover:from-emerald-500 group-hover:to-emerald-600 p-3 rounded-xl transition-all duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-3xl p-8 md:p-12 mt-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para tu Próxima Aventura?
          </h3>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Reserva ahora y obtén un 20% de descuento en tu primera renta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Reservar Ahora
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold py-4 px-8 rounded-xl transition-all duration-300">
              Ver Promociones
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
