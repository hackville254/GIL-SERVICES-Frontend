import { HomePage } from "~/pages/home/home-page"
import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Accueil - GIL SERVICES" },
    { name: "description", content: "Bienvenue chez GIL SERVICES - Votre partenaire technologique de confiance pour tous vos projets de développement web, mobile et consulting IT." },
  ]
}

export default function Home() {
  return <HomePage />
}