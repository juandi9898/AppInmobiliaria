import React from 'react';
import { Property } from '../types';
import PropertyCard from './PropertyCard';

interface PropertyListProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
}

const PropertyList: React.FC<PropertyListProps> = ({ properties, onSelectProperty }) => {
  if (properties.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron viviendas</h3>
        <p className="text-gray-600">Intenta ajustar los filtros para ver más resultados.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map(property => (
        <PropertyCard 
          key={property.id} 
          property={property} 
          onClick={() => onSelectProperty(property)} 
        />
      ))}
    </div>
  );
};

export default PropertyList;