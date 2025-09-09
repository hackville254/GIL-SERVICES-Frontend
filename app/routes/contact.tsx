import { ContactPage } from "~/pages/contact/contact-page"
import type { Route } from "./+types/contact"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contactez-nous | Demande de Devis et Information - GIL SERVICES" },
    { name: "description", content: "Contactez GIL SERVICES pour vos projets d'entreprise. Demandez un devis gratuit, obtenez des conseils personnalisés et découvrez comment nous pouvons vous accompagner." },
    { name: "keywords", content: "contact GIL SERVICES, demande devis, conseil gratuit, information entreprise, contact Cameroun, accompagnement projet" },
    
    // Open Graph tags
    { property: "og:title", content: "Contactez-nous | Demande de Devis et Information - GIL SERVICES" },
    { property: "og:description", content: "Contactez GIL SERVICES pour vos projets d'entreprise. Demandez un devis gratuit, obtenez des conseils personnalisés et découvrez comment nous pouvons vous accompagner." },
    { property: "og:image", content: "/logo.png" },
    { property: "og:url", content: "https://gil-services.com/contact" },
    { property: "og:type", content: "website" },
    
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Contactez-nous | Demande de Devis et Information - GIL SERVICES" },
    { name: "twitter:description", content: "Contactez GIL SERVICES pour vos projets d'entreprise. Demandez un devis gratuit, obtenez des conseils personnalisés et découvrez comment nous pouvons vous accompagner." },
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

export default function Contact() {
  return <ContactPage />
}