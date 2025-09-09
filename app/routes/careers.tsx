import { CareersPage } from "~/pages/careers/careers-page"
import type { Route } from "./+types/careers"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Carrières et Emplois | Rejoignez Notre Équipe - GIL SERVICES" },
    { name: "description", content: "Découvrez nos offres d'emploi et opportunités de carrière chez GIL SERVICES. Rejoignez une équipe dynamique et contribuez à notre succès au Cameroun." },
    { name: "keywords", content: "carrières GIL SERVICES, emploi Cameroun, offres emploi, recrutement, opportunités carrière, équipe dynamique, travail Cameroun" },
    
    // Open Graph tags
    { property: "og:title", content: "Carrières et Emplois | Rejoignez Notre Équipe - GIL SERVICES" },
    { property: "og:description", content: "Découvrez nos offres d'emploi et opportunités de carrière chez GIL SERVICES. Rejoignez une équipe dynamique et contribuez à notre succès au Cameroun." },
    { property: "og:image", content: "/logo.png" },
    { property: "og:url", content: "https://gil-services.com/careers" },
    { property: "og:type", content: "website" },
    
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Carrières et Emplois | Rejoignez Notre Équipe - GIL SERVICES" },
    { name: "twitter:description", content: "Découvrez nos offres d'emploi et opportunités de carrière chez GIL SERVICES. Rejoignez une équipe dynamique et contribuez à notre succès au Cameroun." },
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

export default function Careers() {
  return <CareersPage />
}