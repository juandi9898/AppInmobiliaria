import React, { useState, useEffect } from 'react';
import { properties } from './data/properties';
import { Property, FilterParams } from './types';
import Header from './components/Header';
import PropertyFilter from './components/PropertyFilter';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';

function App() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulating loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleFilter = (filters: FilterParams) => {
    setIsLoading(true);
    
    setTimeout(() => {
      const filtered = properties.filter(property => {
        // Filter by property type
        if (filters.tipo && property.tipo !== filters.tipo) return false;
        
        // Filter by location
        if (filters.ubicacion && property.ubicacion !== filters.ubicacion) return false;
        
        // Filter by price range
        if (property.precio < filters.precioMin || property.precio > filters.precioMax) return false;
        
        return true;
      });
      
      setFilteredProperties(filtered);
      setIsLoading(false);
    }, 500);
  };

  const handleSelectProperty = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleCloseDetail = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <PropertyFilter onFilter={handleFilter} />
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <PropertyList 
            properties={filteredProperties} 
            onSelectProperty={handleSelectProperty} 
          />
        )}
        
        {selectedProperty && (
          <PropertyDetail 
            property={selectedProperty}
            onClose={handleCloseDetail}
          />
        )}
      </main>
      
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2025 InmobiliApp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;