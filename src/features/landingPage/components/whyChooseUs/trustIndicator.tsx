import { Award, Shield, Star } from "lucide-react";
import { Awards } from "@myTypes/pages/landingPage/whyChooseUsAwards";

export default function TrustIndicator() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Left - Awards */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Reconocimientos
        </h3>
        <div className="space-y-3">
          {Awards.map((item, index) => (
            <div
              className="flex items-center justify-center md:justify-start space-x-3"
              key={index}
            >
              <Award className="h-6 w-6 text-amber-500" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Center - Rating */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="flex text-amber-400 mr-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-current" />
            ))}
          </div>
          <span className="text-3xl font-bold text-gray-900">4.9</span>
        </div>
        <p className="text-gray-600 mb-2">Calificación promedio</p>
        <p className="text-sm text-gray-500">Basado en 2,847 reseñas</p>
      </div>

      {/* Right - Guarantee */}
      <div className="text-center md:text-right">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 rounded-xl inline-block mb-4">
          <Shield className="h-8 w-8" />
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">Garantía 100%</h4>
        <p className="text-gray-600">
          Satisfacción garantizada o te devolvemos tu dinero
        </p>
      </div>
    </div>
  );
}
