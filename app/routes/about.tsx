import { AboutPage } from "~/pages/about/about-page"
import type { Route } from "./+types/about"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "À Propos de GIL SERVICES | Notre Histoire et Expertise" },
    { name: "description", content: "Découvrez l'histoire de GIL SERVICES, notre mission, notre équipe d'experts et notre engagement envers l'excellence dans l'accompagnement des entreprises au Cameroun." },
    { name: "keywords", content: "à propos GIL SERVICES, histoire entreprise, équipe experts, mission vision, accompagnement entreprise Cameroun, expertise conseil" },
    
    // Open Graph tags
    { property: "og:title", content: "À Propos de GIL SERVICES | Notre Histoire et Expertise" },
    { property: "og:description", content: "Découvrez l'histoire de GIL SERVICES, notre mission, notre équipe d'experts et notre engagement envers l'excellence dans l'accompagnement des entreprises au Cameroun." },
    { property: "og:image", content: "/logo.png" },
    { property: "og:url", content: "https://gil-services.com/about" },
    { property: "og:type", content: "website" },
    
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "À Propos de GIL SERVICES | Notre Histoire et Expertise" },
    { name: "twitter:description", content: "Découvrez l'histoire de GIL SERVICES, notre mission, notre équipe d'experts et notre engagement envers l'excellence dans l'accompagnement des entreprises au Cameroun." },
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

export default function About() {
  return <AboutPage />
}