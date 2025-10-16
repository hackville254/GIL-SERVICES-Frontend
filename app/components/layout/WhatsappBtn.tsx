import { useEffect, useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber?: string; // numéro WhatsApp international, ex: "+237657842066"
  message?: string; // message initial
  bgColor?: string; // couleur du bouton
  iconColor?: string; // couleur de l'icône
}

// WhatsApp icon from public/whatsapp.svg
function WhatsAppIcon() {
  return (
    <img
      src="/whatsapp.svg"
      alt="WhatsApp"
    />
  );
}

export function WhatsAppButton({
  phoneNumber = "+237657842066",
  message = "Bonjour !",
  bgColor = "#25D366",
  iconColor = "#fff",
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Optionnel : masquer le bouton sur de très petits écrans si nécessaire
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 320) setIsVisible(false);
      else setIsVisible(true);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isVisible) return null;

  const url = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      style={{ width: 56, height: 56 }}
    >
      <WhatsAppIcon />
    </a>
  );
}
