import { Star, ArrowRight, Shield, Award, Users } from "lucide-react";
import HeroSectionImage from "../../assets/heroSectionImage.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroSectionImage}
          alt="Luxury Car Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-emerald-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-white/90 text-lg font-medium">
                Calificación 4.9/5
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Experimenta el
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Lujo en Movimiento
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
              Descubre nuestra flota premium de vehículos de lujo y vive una
              experiencia de manejo excepcional con el mejor servicio del
              mercado.
            </p>
            {/**Explore Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#">
                <button className="cursor-pointer bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <span>Explorar Vehículos</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
              <a href="#">
                <button className="cursor-pointer bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Conocer Más</span>
                </button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  15+
                </div>
                <div className="text-white/80 text-sm">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  50K+
                </div>
                <div className="text-white/80 text-sm">
                  Clientes Satisfechos
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  200+
                </div>
                <div className="text-white/80 text-sm">Vehículos Premium</div>
              </div>
            </div>
          </div>

          {/* Right Content - Trust Indicators */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                ¿Por qué elegirnos?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 p-3 rounded-xl">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Seguridad Garantizada
                    </h4>
                    <p className="text-white/80 text-sm">
                      Todos nuestros vehículos cuentan con seguro completo y
                      mantenimiento premium.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 p-3 rounded-xl">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Calidad Premium
                    </h4>
                    <p className="text-white/80 text-sm">
                      Flota de vehículos de lujo de las mejores marcas del
                      mercado.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Servicio 24/7
                    </h4>
                    <p className="text-white/80 text-sm">
                      Atención personalizada las 24 horas del día, los 7 días de
                      la semana.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
