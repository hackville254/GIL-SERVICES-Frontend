import { ServicesPage } from "~/pages/services/services-page"
import type { Route } from "./+types/services"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nos Services | Conseil et Accompagnement Entreprise - GIL SERVICES" },
    { name: "description", content: "Découvrez nos services d'accompagnement : création d'entreprise, conseil stratégique, développement digital et solutions sur mesure pour votre réussite au Cameroun." },
    { name: "keywords", content: "services GIL SERVICES, conseil entreprise, accompagnement stratégique, développement digital, solutions sur mesure, services Cameroun" },
    
    // Open Graph tags
    { property: "og:title", content: "Nos Services | Conseil et Accompagnement Entreprise - GIL SERVICES" },
    { property: "og:description", content: "Découvrez nos services d'accompagnement : création d'entreprise, conseil stratégique, développement digital et solutions sur mesure pour votre réussite au Cameroun." },
    { property: "og:image", content: "/logo.png" },
    { property: "og:url", content: "https://gil-services.com/services" },
    { property: "og:type", content: "website" },
    
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Nos Services | Conseil et Accompagnement Entreprise - GIL SERVICES" },
    { name: "twitter:description", content: "Découvrez nos services d'accompagnement : création d'entreprise, conseil stratégique, développement digital et solutions sur mesure pour votre réussite au Cameroun." },
    { name: "twitter:image", content: "/logo.png" },
    
    // WhatsApp preview
    { property: "og:site_name", content: "GIL SERVICES" },
    { property: "og:locale", content: "fr_FR" },
    
    // Additional SEO
    { name: "robots", content: "index, follow" },
    { name: "geo.region", content: "CM" },
    { name: "geo.placename", content: "Cameroun" },
  ]
}

export default function Services() {
  return <ServicesPage />
}