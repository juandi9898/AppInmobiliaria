import React from 'react';
import { Property } from '../types';
import PropertyGallery from './PropertyGallery';
import ContactButtons from './ContactButtons';
import { MapPin, Home, Building, DollarSign, User, Clock } from 'lucide-react';

interface PropertyDetailProps {
  property: Property;
  onClose: () => void;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onClose }) => {
  // Format price to COP with dots
  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(property.precio);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              {property.tipo === 'Casa' ? (
                <Home className="w-6 h-6 text-blue-600 mr-2" />
              ) : (
                <Building className="w-6 h-6 text-blue-600 mr-2" />
              )}
              {property.tipo} en {property.ubicacion}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <PropertyGallery 
            images={property.imagenes} 
            propertyName={`${property.tipo} en ${property.ubicacion}`} 
          />
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center text-gray-800">
              <MapPin className="w-5 h-5 text-red-500 mr-2" />
              <span className="font-medium">Ubicación:</span>
              <span className="ml-2">{property.ubicacion}</span>
            </div>
            
            <div className="flex items-center text-gray-800">
              <DollarSign className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-medium">Precio:</span>
              <span className="ml-2 text-xl font-semibold">{formattedPrice}</span>
            </div>
            
            <div className="flex items-start text-gray-800">
              <Clock className="w-5 h-5 text-blue-500 mr-2 mt-1" />
              <div>
                <span className="font-medium">Descripción:</span>
                <p className="mt-1">{property.descripcion}</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex items-center text-gray-800 mb-4">
                <User className="w-5 h-5 text-purple-600 mr-2" />
                <span className="font-medium">Contacto:</span>
                <span className="ml-2">{property.contacto.nombre} - {property.contacto.numero}</span>
              </div>
              
              <ContactButtons 
                phoneNumber={property.contacto.numero} 
                name={property.contacto.nombre} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;