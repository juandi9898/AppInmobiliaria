import { Property } from '../types';

// Using stock photos from Pexels for property images
const propertyImages = [
  'https://pics.nuroa.com/casa_remodelada_en_venta_villa_vergel_serca_a_la_vipri_de_la_universidad_de_nari%C3%B1o_1510000746535749292.jpg',
  'https://pics.nuroa.com/casa_remodelada_en_venta_villa_vergel_serca_a_la_vipri_de_la_universidad_de_nari%C3%B1o_1510000746535749292.jpg',
  'https://cf.bstatic.com/xdata/images/hotel/max1024x768/603091907.jpg?k=0083f8437ded0878a93cedcb61865d98aa1b8f6f3c44014c1c17527051192054&o=&hp=1',
  'https://cf.bstatic.com/xdata/images/hotel/max1024x768/603091907.jpg?k=0083f8437ded0878a93cedcb61865d98aa1b8f6f3c44014c1c17527051192054&o=&hp=1',
  'https://cdn2.infocasas.com.uy/repo/img/th.outside500x260.66aab19eccfe8_infocdn__ue12zg3kvxuaaraf4sbqhzonhdbhqewqyvrzmujajpg.jpg',
  'https://cdn2.infocasas.com.uy/repo/img/th.outside500x260.66aab19eccfe8_infocdn__ue12zg3kvxuaaraf4sbqhzonhdbhqewqyvrzmujajpg.jpg',
  'https://previews.123rf.com/images/niserin/niserin2107/niserin210700363/171359089-sala-de-estar-en-un-peque%C3%B1o-apartamento-moderno-dise%C3%B1o-de-interiores.jpg',
  'https://vivienda.s3.us-east-2.amazonaws.com/properties/NzE0ZWQwYmMtZmEzMC00ZjY1LWIxYjItOGQ1NjAwYmE0NWJh/714ed0bc-fa30-4f65-b1b2-8d5600ba45ba/8666978c-81e8-4b96-a46b-d5cfa2e77f95.jpeg',
  'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg',
  'https://media.istockphoto.com/id/1369517702/es/foto/comedor-con-mesa-de-madera-y-suelo-en-apartamento-moderno.jpg?s=612x612&w=0&k=20&c=uwLgOU2d4H8u-RLXorbi1Si2RAokHZCGDiYJUuForsE=',
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
    imagenes: [propertyImages[9]],
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