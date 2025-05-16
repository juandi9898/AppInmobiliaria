import React from 'react';
import { Property } from '../types';
import { MapPin, Home, Building, DollarSign } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  // Format price to COP with dots
  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(property.precio);

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={property.imagenes[0]} 
          alt={`${property.tipo} en ${property.ubicacion}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          {property.tipo === 'Casa' ? (
            <Home className="w-5 h-5 text-blue-600 mr-2" />
          ) : (
            <Building className="w-5 h-5 text-blue-600 mr-2" />
          )}
          <h3 className="text-lg font-semibold text-gray-800">{property.tipo}</h3>
        </div>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 text-red-500 mr-2" />
          <p>{property.ubicacion}</p>
        </div>
        
        <div className="flex items-center text-gray-700 font-medium">
          <DollarSign className="w-4 h-4 text-green-600 mr-1" />
          <p>{formattedPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;