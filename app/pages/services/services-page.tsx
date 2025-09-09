import { HeroServices } from "./hero-services"
import { ServicesList } from "./services-list"
import { CtaServices } from "./cta-services"

export function ServicesPage() {
  return (
    <main className="min-h-screen">
      <HeroServices />
      <ServicesList />
      <CtaServices />
    </main>
  )
}