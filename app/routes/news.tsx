import { NewsPage } from "~/pages/news/news-page"
import type { Route } from "./+types/news"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Actualités et News | Blog Entreprise - GIL SERVICES" },
    { name: "description", content: "Suivez les dernières actualités de GIL SERVICES, nos conseils d'experts, tendances du marché et informations utiles pour le développement de votre entreprise au Cameroun." },
    { name: "keywords", content: "actualités GIL SERVICES, news entreprise, blog conseil, tendances marché, informations entreprise Cameroun, conseils experts" },
    
    // Open Graph tags
    { property: "og:title", content: "Actualités et News | Blog Entreprise - GIL SERVICES" },
    { property: "og:description", content: "Suivez les dernières actualités de GIL SERVICES, nos conseils d'experts, tendances du marché et informations utiles pour le développement de votre entreprise au Cameroun." },
    { property: "og:image", content: "/logo.png" },
    { property: "og:url", content: "https://gil-services.com/news" },
    { property: "og:type", content: "website" },
    
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Actualités et News | Blog Entreprise - GIL SERVICES" },
    { name: "twitter:description", content: "Suivez les dernières actualités de GIL SERVICES, nos conseils d'experts, tendances du marché et informations utiles pour le développement de votre entreprise au Cameroun." },
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

export default function News() {
  return <NewsPage />
}