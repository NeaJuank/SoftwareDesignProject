import { Star } from "lucide-react";
import { features, stats } from "../../types/landingPage/aboutFeatures";
import aboutImage from "../../assets/about.jpeg";
import SimpleCard from "./components/simpleCard";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quiénes <span className="text-emerald-600">Somos</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Tu Socio Confiable en Movilidad Premium
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              En LuxeDrive, entendemos que cada viaje es único y especial. Por
              eso, hemos construido una reputación sólida basada en la
              excelencia, la confiabilidad y el servicio personalizado que
              nuestros clientes merecen.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Nuestra misión es transformar cada trayecto en una experiencia
              memorable, ofreciendo no solo vehículos de la más alta calidad,
              sino también un servicio que supere todas las expectativas.
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex text-emerald-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 text-lg font-medium">
                4.9/5 basado en 2,847 reseñas
              </span>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Luxury Car Fleet"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-700 mb-2">
                  98%
                </div>
                <div className="text-gray-600 text-sm">
                  Satisfacción del Cliente
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <SimpleCard
              description={feature.description}
              icon={feature.icon}
              title={feature.title}
              key={index}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Números que Hablan por Nosotros
            </h3>
            <p className="text-xl text-slate-200">
              La confianza de miles de clientes respalda nuestro compromiso con
              la excelencia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
