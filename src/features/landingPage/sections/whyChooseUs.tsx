//components
import MainTitle from "@components/mainTItle";
import ModernCard from "../components/whyChooseUs/modernCard";
import TrustIndicator from "../components/whyChooseUs/trustIndicator";
//types
import { reasons } from "@myTypes/pages/landingPage/WhyChooseUsReasons";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <MainTitle title="¿Por Qué" titleWithColor="Confiar en Nosotros?" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 15 años de experiencia nos respaldan. Descubre por qué somos
            la opción preferida de miles de clientes satisfechos.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <ModernCard key={index} reason={reason} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <TrustIndicator />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
