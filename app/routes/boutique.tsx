import { BoutiquePage } from "~/pages/boutique/boutique-page"
import type { Route } from "./+types/boutique"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Boutique | Produits & Offres - GIL SERVICES" },
    { name: "description", content: "Découvrez nos produits et offres professionnelles : présentation claire, design minimaliste et achat rapide via WhatsApp." },
    { name: "keywords", content: "boutique GIL SERVICES, produits, offres, achat WhatsApp, services Cameroun" },

    { property: "og:title", content: "Boutique | Produits & Offres - GIL SERVICES" },
    { property: "og:description", content: "Découvrez nos produits et offres professionnelles : présentation claire, design minimaliste et achat rapide via WhatsApp." },
    { property: "og:image", content: "/logo.png" },
    { property: "og:url", content: "https://gil-services.com/boutique" },
    { property: "og:type", content: "website" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Boutique | Produits & Offres - GIL SERVICES" },
    { name: "twitter:description", content: "Présentation professionnelle, symétrique et ultra qualitative." },
    { name: "twitter:image", content: "/logo.png" },

    { property: "og:site_name", content: "GIL SERVICES" },
    { property: "og:locale", content: "fr_FR" },
    { name: "robots", content: "index, follow" },
    { name: "geo.region", content: "CM" },
    { name: "geo.placename", content: "Cameroun" },
  ]
}

export default function Boutique() {
  return <BoutiquePage />
}