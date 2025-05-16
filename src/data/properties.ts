import { Property } from '../types';

// Using stock photos from Pexels for property images
const propertyImages = [
  'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
  'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
  'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
  'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
  'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
  'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  'https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg',
  'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg',
];

export const properties: Property[] = [
  {
    id: 0,
    tipo: "Casa",
    ubicacion: "Centro",
    precio: 400000000,
    descripcion: "Casa principal para en el Centro. Amplia, con 4 habitaciones, patio, cocina integral.",
    imagenes: [propertyImages[0], propertyImages[1]],
    contacto: {
      nombre: "Juan Diego",
      numero: "3209669061"
    }
  },
  {
    id: 1,
    tipo: "Apartamento",
    ubicacion: "Centro",
    precio: 350000000,
    descripcion: "Apartamento moderno en el Centro de Pasto, cerca del Parque Nariño.",
    imagenes: [propertyImages[2], propertyImages[3]],
    contacto: {
      nombre: "María López",
      numero: "3117788990"
    }
  },
  {
    id: 2,
    tipo: "Casa",
    ubicacion: "Torobajo",
    precio: 480000000,
    descripcion: "Casa amplia en Torobajo con patio y garaje para 2 carros.",
    imagenes: [propertyImages[4], propertyImages[5]],
    contacto: {
      nombre: "Carlos Martínez",
      numero: "3112233445"
    }
  },
  {
    id: 3,
    tipo: "Apartamento",
    ubicacion: "Las Lunas",
    precio: 310000000,
    descripcion: "Apartamento con buena vista en Las Lunas, 3 habitaciones.",
    imagenes: [propertyImages[6]],
    contacto: {
      nombre: "Sandra Paredes",
      numero: "3001122334"
    }
  },
  {
    id: 4,
    tipo: "Casa",
    ubicacion: "Anganoy",
    precio: 260000000,
    descripcion: "Casa tradicional en Anganoy, zona tranquila y residencial.",
    imagenes: [propertyImages[7], propertyImages[8]],
    contacto: {
      nombre: "Pedro Rojas",
      numero: "3014455667"
    }
  },
  {
    id: 5,
    tipo: "Apartamento",
    ubicacion: "La Rosa",
    precio: 380000000,
    descripcion: "Apartamento nuevo en edificio con ascensor en La Rosa.",
    imagenes: [propertyImages[0], propertyImages[1]],
    contacto: {
      nombre: "Ana Cárdenas",
      numero: "3105544332"
    }
  }
];

export const propertyTypes = Array.from(new Set(properties.map(property => property.tipo)));
export const propertyLocations = Array.from(new Set(properties.map(property => property.ubicacion)));
export const priceRange = {
  min: Math.min(...properties.map(property => property.precio)),
  max: Math.max(...properties.map(property => property.precio))
};