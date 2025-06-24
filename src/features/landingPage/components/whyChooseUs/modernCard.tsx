import { CheckCircle } from "lucide-react";

interface Reason {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

interface ModernCardProps {
  reason?: Reason;
}

const ModernCard: React.FC<ModernCardProps> = ({ reason }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-gray-400/70 transition-all duration-300 transform hover:-translate-y-2 group hover:bg-gray-400/5">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 p-3 rounded-xl transition-all duration-300">
          {reason?.icon && <reason.icon className="h-6 w-6 text-white" />}
        </div>
        <h3 className="text-xl font-bold text-gray-900 ml-4">
          {reason?.title}
        </h3>
      </div>

      <p className="text-gray-600 mb-6">{reason?.description}</p>

      <ul className="space-y-3">
        {reason?.details.map((detail, detailIndex) => (
          <li key={detailIndex} className="flex items-center text-gray-700">
            <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModernCard;
