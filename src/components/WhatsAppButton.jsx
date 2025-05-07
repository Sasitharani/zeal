import React from 'react';

const WhatsAppButton = () => {
  return (
    <button
      onClick={() => {
        const phoneNumber = "+917904010382";
        const message = "Hi, I'm interested to know more about your designs from zealonlinesolutions";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      }}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-gray-200 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full neumorphic-button flex items-center z-50 text-sm sm:text-base"
    >
      <i className="fab fa-whatsapp mr-1 sm:mr-2 text-lg sm:text-xl text-green-500"></i>
      <span className='text-blue-900'>Enquiry</span>
    </button>
  );
};

export default WhatsAppButton;