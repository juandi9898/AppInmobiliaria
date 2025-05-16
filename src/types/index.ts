export interface Contact {
  nombre: string;
  numero: string;
}

export interface Property {
  id: number;
  tipo: string;
  ubicacion: string;
  precio: number;
  descripcion: string;
  imagenes: string[];
  contacto: Contact;
}

export interface FilterParams {
  tipo: string;
  ubicacion: string;
  precioMin: number;
  precioMax: number;
}