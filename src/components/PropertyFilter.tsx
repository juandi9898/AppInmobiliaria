import React, { useState } from 'react';
import { FilterParams } from '../types';
import { propertyTypes, propertyLocations, priceRange } from '../data/properties';
import { Search } from 'lucide-react';

interface PropertyFilterProps {
  onFilter: (filters: FilterParams) => void;
}

const PropertyFilter: React.FC<PropertyFilterProps> = ({ onFilter }) => {
  const [filters, setFilters] = useState<FilterParams>({
    tipo: '',
    ubicacion: '',
    precioMin: priceRange.min,
    precioMax: priceRange.max,
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: name === 'precioMin' || name === 'precioMax' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Filtrar Viviendas</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">
              Tipo de Vivienda
            </label>
            <select
              id="tipo"
              name="tipo"
              value={filters.tipo}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Todos los tipos</option>
              {propertyTypes.map(tipo => (
                <option key={tipo} value={tipo}>{tipo}</option>
              ))}
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="ubicacion" className="block text-sm font-medium text-gray-700">
              Ubicación
            </label>
            <select
              id="ubicacion"
              name="ubicacion"
              value={filters.ubicacion}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Todas las ubicaciones</option>
              {propertyLocations.map(ubicacion => (
                <option key={ubicacion} value={ubicacion}>{ubicacion}</option>
              ))}
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="precioMin" className="block text-sm font-medium text-gray-700">
              Precio Mínimo
            </label>
            <input
              type="number"
              id="precioMin"
              name="precioMin"
              value={filters.precioMin}
              onChange={handleChange}
              min={priceRange.min}
              max={priceRange.max}
              step={10000000}
              className="block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="precioMax" className="block text-sm font-medium text-gray-700">
              Precio Máximo
            </label>
            <input
              type="number"
              id="precioMax"
              name="precioMax"
              value={filters.precioMax}
              onChange={handleChange}
              min={priceRange.min}
              max={priceRange.max}
              step={10000000}
              className="block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            <Search className="w-5 h-5 mr-2" />
            Filtrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyFilter;