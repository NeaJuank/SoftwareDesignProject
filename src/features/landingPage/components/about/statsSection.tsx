import { stats } from "@myTypes/pages/landingPage/aboutFeatures";

export default function StatsSection() {
  return (
    <>
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Números que Hablan por Nosotros
        </h3>
        <p className="text-xl text-slate-200">
          La confianza de miles de clientes respalda nuestro compromiso con la
          excelencia
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
    </>
  );
}
