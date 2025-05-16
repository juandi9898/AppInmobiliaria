import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

interface ContactButtonsProps {
  phoneNumber: string;
  name: string;
}

const ContactButtons: React.FC<ContactButtonsProps> = ({ phoneNumber, name }) => {
  const handleWhatsAppClick = () => {
    // Format the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    // Format the phone URL
    const phoneUrl = `tel:${phoneNumber}`;
    window.open(phoneUrl, '_blank');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4">
      <button
        onClick={handleWhatsAppClick}
        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
      >
        <MessageSquare className="w-5 h-5" />
        <span>Contactar por WhatsApp</span>
      </button>
      
      <button
        onClick={handlePhoneClick}
        className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
      >
        <Phone className="w-5 h-5" />
        <span>Llamar</span>
      </button>
    </div>
  );
};

export default ContactButtons;