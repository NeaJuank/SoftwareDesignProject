import React from 'react';
import { 
  Car, 
  Users, 
  Fuel, 
  Settings, 
  Star,
  MapPin,
  Calendar
} from 'lucide-react';

interface CarFeature {
  icon: React.ReactNode;
  label: string;
}

interface CarData {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  features: CarFeature[];
  type: string;
  location: string;
}

const cars: CarData[] = [
  {
    id: 1,
    name: "Honda Civic",
    image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=500",
    price: 45,
    rating: 4.8,
    type: "Sedán",
    location: "Centro Ciudad",
    features: [
      { icon: <Users size={16} />, label: "5 Pasajeros" },
      { icon: <Fuel size={16} />, label: "Gasolina" },
      { icon: <Settings size={16} />, label: "Automático" },
    ]
  },
  {
    id: 2,
    name: "Toyota RAV4",
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=500",
    price: 65,
    rating: 4.9,
    type: "SUV",
    location: "Aeropuerto",
    features: [
      { icon: <Users size={16} />, label: "7 Pasajeros" },
      { icon: <Fuel size={16} />, label: "Híbrido" },
      { icon: <Settings size={16} />, label: "AWD" },
    ]
  },
  {
    id: 3,
    name: "BMW Serie 3",
    image: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=500",
    price: 85,
    rating: 4.7,
    type: "Ejecutivo",
    location: "Centro Ciudad",
    features: [
      { icon: <Users size={16} />, label: "5 Pasajeros" },
      { icon: <Fuel size={16} />, label: "Gasolina" },
      { icon: <Settings size={16} />, label: "Manual" },
    ]
  },
  {
    id: 4,
    name: "Volkswagen Golf",
    image: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=500",
    price: 35,
    rating: 4.6,
    type: "Compacto",
    location: "Norte",
    features: [
      { icon: <Users size={16} />, label: "4 Pasajeros" },
      { icon: <Fuel size={16} />, label: "Gasolina" },
      { icon: <Settings size={16} />, label: "Manual" },
    ]
  },
  {
    id: 5,
    name: "Ford Explorer",
    image: "https://images.pexels.com/photos/1319999/pexels-photo-1319999.jpeg?auto=compress&cs=tinysrgb&w=500",
    price: 75,
    rating: 4.8,
    type: "SUV Grande",
    location: "Sur",
    features: [
      { icon: <Users size={16} />, label: "8 Pasajeros" },
      { icon: <Fuel size={16} />, label: "Gasolina" },
      { icon: <Settings size={16} />, label: "4WD" },
    ]
  },
  {
    id: 6,
    name: "Tesla Model 3",
    image: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=500",
    price: 95,
    rating: 4.9,
    type: "Eléctrico",
    location: "Premium",
    features: [
      { icon: <Users size={16} />, label: "5 Pasajeros" },
      { icon: <Fuel size={16} />, label: "Eléctrico" },
      { icon: <Settings size={16} />, label: "Automático" },
    ]
  }
];

const CarCard: React.FC<{ car: CarData }> = ({ car }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {car.type}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{car.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
          <div className="text-right">
            <span className="text-2xl font-bold text-emerald-500">${car.price}</span>
            <span className="text-gray-500 text-sm">/día</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-gray-600 mb-4">
          <MapPin size={14} />
          <span className="text-sm">{car.location}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {car.features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 mb-2">
                {feature.icon}
              </div>
              <span className="text-xs text-gray-600">{feature.label}</span>
            </div>
          ))}
        </div>
        
        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
          <Car size={18} />
          Rentar
        </button>
      </div>
    </div>
  );
};

const CarRental: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">Explora </span>
            <span className="text-emerald-500">Nuestros Carros</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre nuestra amplia selección de vehículos perfectos para cualquier ocasión. 
            Desde compactos económicos hasta SUVs premium.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors">
            Todos
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-200">
            Compactos
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-200">
            SUVs
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-200">
            Ejecutivos
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-200">
            Eléctricos
          </button>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 mx-auto">
            <Calendar size={20} />
            Ver Todos los Vehículos
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarRental;