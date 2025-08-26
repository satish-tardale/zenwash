import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "9960435751"; // Your WhatsApp number
  const message = "Hello! I would like to know more."; // Optional default message

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
   <button
  onClick={handleClick}
  className="
    fixed 
    bottom-14 right-10   /* default: mobile view – moved up/left */
    sm:bottom-5 sm:right-5  /* on ≥640px screens: closer to edge */
    bg-green-500 rounded-full p-4 shadow-lg 
    hover:bg-green-600 transition duration-300
  "
>
  <FaWhatsapp className="text-white text-3xl" />
</button>

  );
};

export default WhatsAppButton;
