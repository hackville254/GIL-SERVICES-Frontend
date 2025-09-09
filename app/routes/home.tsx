import { HomePage } from "~/pages/home/home-page"
import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Création d'Entreprise au Cameroun | Accompagnement Légal - GIL SERVICES" },
    { name: "description", content: "Service complet de création d'entreprise au Cameroun avec GIL SERVICES. Obtention du registre de commerce, documents légaux et accompagnement personnalisé post-création pour votre réussite entrepreneuriale." },
    { name: "keywords", content: "création entreprise Cameroun, registre de commerce Cameroun, accompagnement entreprise, documents légaux entreprise, création société Cameroun, formalités administratives" },
    
    // Open Graph tags
    { property: "og:title", content: "Création d'Entreprise au Cameroun | Accompagnement Légal - GIL SERVICES" },
    { property: "og:description", content: "Service complet de création d'entreprise au Cameroun avec GIL SERVICES. Obtention du registre de commerce, documents légaux et accompagnement personnalisé post-création pour votre réussite entrepreneuriale." },
    { property: "og:image", content: "/logo.png" },
    { property: "og:url", content: "https://gil-services.com" },
    { property: "og:type", content: "website" },
    
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Création d'Entreprise au Cameroun | Accompagnement Légal - GIL SERVICES" },
    { name: "twitter:description", content: "Service complet de création d'entreprise au Cameroun avec GIL SERVICES. Obtention du registre de commerce, documents légaux et accompagnement personnalisé post-création pour votre réussite entrepreneuriale." },
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

export default function Home() {
  return <HomePage />
}