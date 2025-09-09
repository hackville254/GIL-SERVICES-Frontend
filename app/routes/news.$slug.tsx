import { NewsArticle } from "~/pages/news/news-article"
import type { Route } from "./+types/news.$slug"

export function meta({ params }: Route.MetaArgs) {
  // Vous pouvez récupérer les données de l'article ici pour des meta dynamiques
  const slug = params.slug
  
  return [
    { title: `Article | ${slug} - GIL SERVICES` },
    { name: "description", content: `Découvrez notre article sur ${slug}. Conseils d'experts et informations utiles pour votre entreprise avec GIL SERVICES.` },
    { name: "keywords", content: `${slug}, article GIL SERVICES, conseil entreprise, information utile, expertise Cameroun` },
    
    // Open Graph tags
    { property: "og:title", content: `Article | ${slug} - GIL SERVICES` },
    { property: "og:description", content: `Découvrez notre article sur ${slug}. Conseils d'experts et informations utiles pour votre entreprise avec GIL SERVICES.` },
    { property: "og:image", content: "/logo.png" },
    { property: "og:url", content: `https://gil-services.com/news/${slug}` },
    { property: "og:type", content: "article" },
    
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `Article | ${slug} - GIL SERVICES` },
    { name: "twitter:description", content: `Découvrez notre article sur ${slug}. Conseils d'experts et informations utiles pour votre entreprise avec GIL SERVICES.` },
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

export default function NewsSlug() {
  return <NewsArticle />
}