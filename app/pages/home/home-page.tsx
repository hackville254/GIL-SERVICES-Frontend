import { HeroCarousel } from "./hero-carousel"
import { ServicesSection } from "./services-section"
import { DomainsSection } from "./domains-section"
import { WhyUsSection } from "./why-us-section"
import { AppointmentSection } from "./appointment-section"
import { NewsSection } from "./news-section"

export function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ServicesSection />
      <DomainsSection />
      <WhyUsSection />
      <AppointmentSection />
      <NewsSection />
    </main>
  )
}