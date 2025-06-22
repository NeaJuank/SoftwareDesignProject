interface simpleCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const SimpleCard: React.FC<simpleCardProps> = ({
  title,
  icon: Icon,
  description,
}) => {
  return (
    <div className="mx-2 sm:mx-0 p-3 text-center group hover:scale-105 transition-all duration-300 hover:bg-gray-200 rounded-2xl">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 p-4 rounded-2xl inline-block mb-4">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SimpleCard;
