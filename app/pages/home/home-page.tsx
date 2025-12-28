import { HeroCarousel } from "./hero-carousel"
import { ServicesSection } from "./services-section"
import { DomainsSection } from "./domains-section"
import { WhyUsSection } from "./why-us-section"
import { AppointmentSection } from "./appointment-section"
import { NewsSection } from "./news-section"
import { PartnersSection } from "./partners-section"
import { TrustSection } from "./trust-section"
import { PricingSection } from "./pricing-section"
import { EneoPaymentSection } from "./eneo-payment-section"

export function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ServicesSection />
      <DomainsSection />
      <WhyUsSection />
      <AppointmentSection />
      <EneoPaymentSection />
      <NewsSection />
      {/* Rubrique Prix */}
      <PricingSection />
      {/* Rubriques ajoutées */}
      <PartnersSection />
      <TrustSection />
      
    </main>
  )
}