import { AboutPage } from "~/pages/about/about-page"
import type { Route } from "./+types/about"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "À propos - GIL SERVICES" },
    { name: "description", content: "Découvrez GIL SERVICES - Notre expertise, notre histoire et notre engagement envers l'excellence dans le développement web, mobile et le consulting IT." },
  ]
}

export default function About() {
  return <AboutPage />
}
